'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import infinito from '@/app/assets/infinito.png';

import { TabState } from './TabButton';

const TotalBets = ({
	numberOfBets,
	updateBetDetails,
}: {
	numberOfBets: string;
	updateBetDetails: (key: string, value: string) => void;
}) => {
	const tab: TabState = (useSearchParams().get('tab') as TabState) || 'normal';

	return (
		<>
			{tab === 'auto' && (
				<div className='relative bg-selected-tab'>
					<input
						type='number'
						className=' bg-selected-tab outline-none p-3 py-4 rounded text-white/80 text-xs font-medium'
						placeholder='Total de Apostas'
						onChange={(e) => updateBetDetails('numberOfBets', e.target.value)}
						value={numberOfBets}
					/>

					{numberOfBets.length <= 0 && (
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
