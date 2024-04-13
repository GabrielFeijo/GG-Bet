'use client';
import Image from 'next/image';
import Button from './Button';
import SelectedColor from './SelectedColor';
import TabButton from './TabButton';
import TotalBets from './TotalBets';
import telaCheia from '@/app/assets/tela-cheia.png';
import info from '@/app/assets/info.png';

const Tab = () => {
	const toggleFullScreen = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.body.requestFullscreen();
		}
	};

	return (
		<section className='p-4 space-y-5'>
			<div className='flex border border-white/20 p-1 rounded bg-tab text-xs space-x-2'>
				<TabButton text='Normal' />
				<TabButton text='Auto' />
			</div>
			<div className='flex'>
				<div className='relative bg-selected-tab w-40'>
					<input
						type='text'
						className='bg-selected-tab outline-none p-3 rounded text-white/80 text-xs font-medium w-32'
						placeholder='Quantia'
					/>
					<span className='absolute right-3 top-1/2 -translate-y-1/2 font-semibold text-white/80 text-sm'>
						R$
					</span>
				</div>

				<Button>1/2</Button>
				<Button>2x</Button>
			</div>
			<SelectedColor />
			<TotalBets />
			<button className='text-sm font-semibold text-white bg-primary w-full rounded py-3'>
				Começar o jogo
			</button>

			<div className='flex justify-between'>
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
