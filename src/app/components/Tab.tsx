'use client';
import Image from 'next/image';
import Button from './Button';
import SelectedColor from './SelectedColor';
import TabButton, { TabState } from './TabButton';
import TotalBets from './TotalBets';
import telaCheia from '@/app/assets/tela-cheia.png';
import info from '@/app/assets/info.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useSearchParams } from 'next/navigation';

const Tab = ({
	isSpinning,
	result,
}: {
	isSpinning: boolean;
	result: number;
}) => {
	const { userInformation, setUserInformation } = useContext(AuthContext);
	const tab: TabState = (useSearchParams().get('tab') as TabState) || 'normal';

	const [betDetails, setBetDetails] = useState<{
		isPlaying: boolean;
		selectedColor: string;
		numberOfBets: string;
		bet: string;
		error: string;
	}>({
		isPlaying: false,
		selectedColor: 'white',
		numberOfBets: '',
		bet: '',
		error: '',
	});
	const isDisabled = isSpinning || betDetails.isPlaying;

	const labelColor =
		betDetails.selectedColor === 'gray'
			? 'Cinza'
			: betDetails.selectedColor === 'red'
			? 'Vermelho'
			: 'Branco';

	const toggleFullScreen = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.body.requestFullscreen();
		}
	};

	const handleChange = (value: string) => {
		let error = '';

		const valueAsNumber = parseInt(value);

		if (valueAsNumber > userInformation.balance) {
			error = 'Você não pode apostar mais do que seu saldo';
		} else if (valueAsNumber <= 0) {
			error = 'Você não pode apostar um valor menor ou igual a 0.';
		}

		setBetDetails((prev) => ({
			...prev,
			error: error,
			bet: isNaN(valueAsNumber) || valueAsNumber <= 0 ? '' : value,
		}));
	};

	const handleBet = () => {
		if (!betDetails.bet) {
			setBetDetails((prev) => ({
				...prev,
				error: 'Por favor, escolha um valor',
			}));
			return;
		}

		setBetDetails((prev) => ({
			...prev,
			isPlaying: true,
		}));

		setUserInformation((prev) => ({
			...prev,
			balance: prev.balance - parseInt(betDetails.bet),
		}));
	};

	useEffect(() => {
		if (!isSpinning && betDetails.isPlaying) {
			const winningColor = getWinningColor(result);

			if (winningColor === betDetails.selectedColor) {
				let multiplier = 0;
				switch (winningColor) {
					case 'gray':
					case 'red':
						multiplier = 2;
						break;
					case 'white':
						multiplier = 14;
						break;
				}

				setUserInformation((prev) => ({
					...prev,
					balance: prev.balance + parseInt(betDetails.bet) * multiplier,
				}));
			}

			if (tab === 'normal') {
				setBetDetails((prev) => ({
					...prev,
					isPlaying: false,
					bet: '',
				}));
			} else {
				if (Number(betDetails.numberOfBets) - 1 > 0) {
					setBetDetails((prev) => ({
						...prev,
						numberOfBets: String(Number(prev.numberOfBets) - 1),
					}));

					handleBet();
				} else {
					setBetDetails((prev) => ({
						...prev,
						isPlaying: false,
						numberOfBets: '',
						bet: '',
					}));
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setUserInformation, result, isSpinning]);

	const getWinningColor = (win: number): 'red' | 'gray' | 'white' => {
		if (win % 2 === 0) {
			return win === 0 ? 'white' : 'red';
		} else {
			return 'gray';
		}
	};

	const updateBetDetails = (key: string, value: string) => {
		setBetDetails((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	return (
		<section
			className={`p-8 py-6 space-y-5 min-h-[28rem] ${
				isDisabled && 'pointer-events-none'
			} `}
		>
			<div className='flex border border-white/20 p-1 rounded bg-tab text-xs space-x-2'>
				<TabButton text='Normal' />
				<TabButton text='Auto' />
			</div>
			<div>
				<div className='flex'>
					<div className='relative bg-selected-tab w-40'>
						<input
							type='number'
							className='bg-selected-tab outline-none p-3 rounded text-white/80 text-xs font-medium w-32'
							placeholder='Quantia'
							onChange={(e) => handleChange(e.target.value)}
							value={betDetails.bet}
						/>
						<span className='absolute right-3 top-1/2 -translate-y-1/2 font-semibold text-white/80 text-sm'>
							R$
						</span>
					</div>
					<Button
						onClick={() => {
							handleChange(String((parseInt(betDetails.bet) ?? 0) / 2));
						}}
					>
						1/2
					</Button>
					<Button
						onClick={() => {
							handleChange(String((parseInt(betDetails.bet) ?? 0) * 2));
						}}
					>
						2x
					</Button>
				</div>
				{betDetails.error && (
					<p className='text-xs text-red-500 w-full px-1 mt-1'>
						{betDetails.error}
					</p>
				)}
			</div>

			<SelectedColor
				selectedColor={betDetails.selectedColor}
				updateBetDetails={updateBetDetails}
			/>
			<TotalBets
				numberOfBets={betDetails.numberOfBets}
				updateBetDetails={updateBetDetails}
			/>
			<button
				className='text-sm font-semibold text-white bg-primary w-full rounded py-3 disabled:cursor-not-allowed disabled:bg-primary/50'
				disabled={isDisabled}
				onClick={handleBet}
			>
				Começar o jogo
			</button>

			{betDetails.isPlaying && (
				<p className='text-sm font-medium'>
					Sua aposta: R$ {parseInt(betDetails.bet).toFixed(2).replace('.', ',')}{' '}
					- {labelColor}
				</p>
			)}
			<div className='flex justify-between pointer-events-auto'>
				<Button
					className='py-2'
					onClick={toggleFullScreen}
				>
					<Image
						src={telaCheia}
						alt='Simbolo de tela cheia'
						className='size-6'
					/>
				</Button>
				<Button className='py-2'>
					<Image
						src={info}
						alt='Simbolo de informação'
						className='size-6'
					/>
				</Button>
			</div>
		</section>
	);
};

export default Tab;
