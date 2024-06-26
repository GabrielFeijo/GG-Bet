import Image from 'next/image';

import { sideBarItems } from '../utils/sideBarItems';

const SideBar = () => {
	const selectedItem = 3;

	return (
		<aside className='w-fit border-r border-white/20 py-8 h-[calc(100vh-4.7rem)]'>
			<ul className='space-y-7 '>
				{sideBarItems.map((item) => (
					<li
						key={item.id}
						className={`px-4 border-r-[2px] cursor-pointer ${
							selectedItem === item.id
								? 'border-primary '
								: 'border-transparent'
						}`}
						title={
							selectedItem === item.id ? item.name : 'Em desenvolvimento...'
						}
					>
						<Image
							src={item.icon}
							alt={`Ícone ${item.name}`}
							className='size-5'
						/>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default SideBar;
