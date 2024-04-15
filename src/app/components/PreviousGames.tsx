'use client';
import React, { useRef,WheelEvent } from 'react';

import Card from './Card';

const PreviousGames = ({ latestGames }: { latestGames: number[] }) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
		if (scrollRef.current) {
			scrollRef.current.scrollLeft += e.deltaY;
		}
	};

	return (
		<div className='border-t p-4 border-white/20 overflow-hidden'>
			<p className='text-white/80 text-xs uppercase'>Giros anteriores</p>

			<div
				className='flex gap-2 mt-2 overflow-x-auto'
				onWheel={handleScroll}
				ref={scrollRef}
			>
				{latestGames
					.slice()
					.reverse()
					.map((num, index) => (
						<Card
							number={num}
							mini
							key={index}
						>
							{index}
						</Card>
					))}
			</div>
		</div>
	);
};

export default PreviousGames;
