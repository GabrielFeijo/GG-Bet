'use client';
import React, { useState } from 'react';
import casinoIcon from '@/app/assets/casino.png';
import sportIcon from '@/app/assets/sport.png';
import Image from 'next/image';

const Menu = () => {
	const [selectedItem, setSelectedItem] = useState<'casino' | 'sport'>(
		'casino'
	);

	return (
		<nav>
			<ul className='flex gap-8 uppercase text-xs font-semibold mx-20 items-center '>
				<li
					className={`py-6 border-b-2 hover:border-primary cursor-pointer  ${
						selectedItem === 'casino' ? '!border-primary' : 'border-transparent'
					}`}
				>
					<a href='#'>
						<Image
							src={casinoIcon}
							alt='Ícone de cartas de baralho'
							className='size-6 inline-block mr-1'
						/>
						Cassino
					</a>
				</li>
				<li
					className={`border-b-2 hover:border-primary py-6 cursor-pointer  ${
						selectedItem === 'sport' ? '!border-primary' : 'border-transparent'
					}`}
				>
					<a href='#'>
						<Image
							src={sportIcon}
							alt='cassino'
							className='size-6 inline-block mr-1'
						/>
						Esportes
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
