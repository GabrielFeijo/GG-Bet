'use client';
import { useState } from 'react';

import Card from './Card';
import PreviousGames from './PreviousGames';
import Tab from './Tab';
import Timer from './Timer';

const numbers = Array.from({ length: 15 }, (_, index) => index);

const repetitions = 10;

const output = Array(repetitions).fill(numbers).flat();

const Game = () => {
	const [betInfo, setBetInfo] = useState({
		spinNum: 0,
		spin: false,
	});

	const [resultNumbers, setResultNumbers] = useState({
		chosen: 0,
		chosenNum: 0,
	});

	const [latestGames, setLatestGames] = useState<number[]>([]);

	const animation = {
		transition: 'all 7999ms cubic-bezier(0, 0, 0.28, 1) 0s',
		transform: `matrix(1, 0, 0, 1, ${resultNumbers.chosen * -1}  , 0)`,
	};

	const createObj = () => {
		const obj: { [key: number]: number[] } = {};
		for (let i = 0; i < 15; i++) {
			if (i === 0) {
				obj[i] = [8049, 8141];
			} else {
				const last = obj[i - 1][1];
				obj[i] = [
					Math.round((last + 16) * 100) / 100,
					Math.round((last + 16 + 96) * 100) / 100,
				];
			}
		}
		return obj;
	};

	const getResult = (chosen: number, obj: { [key: number]: number[] }) => {
		for (var key in obj) {
			if (obj[key][0] <= chosen && obj[key][1] >= chosen) {
				return key;
			}
		}
	};

	const pickRandomNumber = (obj: { [key: number]: number[] }) => {
		const keys = Object.keys(obj);
		const randomKey = parseInt(keys[(keys.length * Math.random()) << 0]);
		const rangeArr = obj[randomKey as keyof typeof obj];
		const randomOffset =
			Math.random() * (rangeArr[1] - rangeArr[0]) + rangeArr[0];
		return randomOffset;
	};

	const spin = () => {
		const numberObj = createObj();
		const chosenNumber = pickRandomNumber(numberObj);
		const result = parseInt(getResult(chosenNumber, numberObj) || '0');

		setBetInfo((prev) => {
			return {
				...prev,
				spinNum: (prev.spinNum += 1),
				spin: true,
			};
		});

		setResultNumbers((prev) => {
			return {
				...prev,
				chosen: chosenNumber,
				chosenNum: result,
			};
		});

		const timer1 = setTimeout(() => {
			setLatestGames((prev) => {
				return [...prev, result];
			});
			reset();
			clearTimeout(timer1);
		}, 9500);
		return result;
	};

	const reset = () => {
		setBetInfo((prev) => {
			return {
				...prev,
				spin: false,
			};
		});
	};

	return (
		<section className='h-full bg-secondary rounded my-8 flex flex-row max-w-[68rem]'>
			<Tab
				isSpinning={betInfo.spin}
				result={resultNumbers.chosenNum}
			/>

			<span className='border-l border-white/10'></span>

			<div className='grid grid-flow-row grid-rows-1'>
				<div className='bg-selected-tab flex-1 m-4 rounded flex flex-col items-center justify-evenly overflow-hidden relative'>
					<Timer
						startGame={spin}
						resetTimer={!betInfo.spin}
					/>

					<div
						className={
							'grid grid-flow-col gap-4 w-full relative justify-start bg-red-50'
						}
						style={
							betInfo.spin
								? animation
								: {
										transform: 'matrix(1, 0, 0, 1, -1356, 0)',
								  }
						}
					>
						{output.map((num, index) => (
							<Card
								key={index}
								number={num}
							/>
						))}
					</div>
					<div className='w-1 h-36 bg-white absolute rounded left-1/2 -translate-x-1/2 mt-10'></div>

					<span></span>
				</div>
				<PreviousGames latestGames={latestGames} />
			</div>
		</section>
	);
};

export default Game;
