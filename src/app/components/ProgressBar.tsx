'use client';
import { useState, useEffect } from 'react';

const ProgressBar = ({
	startGame,
	resetTimer = false,
}: {
	startGame: () => void;
	resetTimer: boolean;
}) => {
	const totalTime = 15000;
	const [timeLeft, setTimeLeft] = useState(totalTime);
	const progressWidth = (timeLeft / totalTime) * 100;

	useEffect(() => {
		const timer = setTimeout(() => {
			if (timeLeft > 0) {
				setTimeLeft(timeLeft - 10);
			} else {
				startGame();
			}
		}, 10);

		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timeLeft]);

	useEffect(() => {
		if (resetTimer) {
			const timer = setTimeout(() => {
				setTimeLeft(totalTime);
				clearTimeout(timer);
			}, 2000);
		}
	}, [resetTimer]);

	const formatTime = (milliseconds: number) => {
		const seconds = Math.floor(milliseconds / 1000);
		const remainingMilliseconds = milliseconds % 1000;
		return `${seconds}:${
			remainingMilliseconds < 100
				? `0${remainingMilliseconds}`
				: remainingMilliseconds
		}`.slice(0, -1);
	};

	return (
		<>
			{timeLeft > 0 || timeLeft === totalTime ? (
				<div className='w-11/12 bg-secondary p-2 rounded-md relative'>
					<p className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 font-bold text-xs text-white'>
						Girando Em: {formatTime(timeLeft)}
					</p>
					<div
						className='bg-primary h-6 rounded'
						style={{ width: `${progressWidth}%` }}
					></div>
				</div>
			) : (
				<p className='font-medium text-center p-2'>Girando...</p>
			)}
		</>
	);
};

export default ProgressBar;
