import { Bars3Icon } from '@heroicons/react/20/solid';

import Menu from './Menu';
import NavBar from './NavBar';

const Header = () => {
	return (
		<header className='px-6 flex items-center justify-between border-b border-white/20 relative'>
			<div className='flex items-center gap-6'>
				<Bars3Icon className='w-6 h-6' />
				<h1 className='text-2xl font-bold'>GG Bet</h1>
				<Menu />
			</div>

			<NavBar />
		</header>
	);
};

export default Header;
