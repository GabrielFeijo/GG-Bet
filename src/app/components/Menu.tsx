import Image from 'next/image';

import casinoIcon from '@/app/assets/casino.png';
import sportIcon from '@/app/assets/sport.png';

const Menu = () => {
	const selectedItem = 'casino';
	return (
		<nav>
			<ul className='flex gap-8 uppercase text-xs font-semibold mx-20 items-center '>
				<li
					className={`py-6 border-b-2 hover:border-primary cursor-pointer  ${
						selectedItem === 'casino' ? '!border-primary' : 'border-transparent'
					}`}
				>
					<Image
						src={casinoIcon}
						alt='Ícone de cartas de baralho'
						className='size-6 inline-block mr-1'
					/>
					<span>Cassino</span>
				</li>
				<li
					className={`border-b-2 hover:border-primary py-6 cursor-pointer border-transparent`}
				>
					<Image
						src={sportIcon}
						alt='cassino'
						className='size-6 inline-block mr-1'
					/>
					<span>Esportes</span>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
