'use client';
import Image from 'next/image';
import infinito from '@/app/assets/infinito.png';
import { useState } from 'react';
import { TabState } from './TabButton';
import { useSearchParams } from 'next/navigation';

const TotalBets = () => {
	const tab: TabState = (useSearchParams().get('tab') as TabState) || 'normal';
	const [totalBets, setTotalBets] = useState('');

	return (
		<>
			{tab === 'auto' && (
				<div className='relative bg-selected-tab'>
					<input
						type='number'
						className=' bg-selected-tab outline-none p-3 py-4 rounded text-white/80 text-xs font-medium'
						placeholder='Total de Apostas'
						onChange={(e) => setTotalBets(e.target.value)}
					/>

					{totalBets.length <= 0 && (
						<Image
							src={infinito}
							alt='Simbolo de infinito'
							className='size-6 absolute right-3 top-1/2 -translate-y-1/2'
						/>
					)}
				</div>
			)}
		</>
	);
};

export default TotalBets;
