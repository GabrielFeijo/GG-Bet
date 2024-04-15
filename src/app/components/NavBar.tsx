'use client';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const NavBar = () => {
	const { userInformation } = useContext(AuthContext);

	return (
		<div className='flex gap-10 items-center'>
			<div className='space-x-1'>
				<span className='text-sm font-semibold text-white/80'>R$</span>
				<span className='font-bold'>
					{userInformation.balance.toFixed(2).replace('.', ',')}
				</span>
			</div>

			<button className='font-bold transition-colors hover:text-primary hover:underline underline-offset-2'>
				Entrar
			</button>

			<button className='font-semibold transition-colors bg-primary text-white px-4 py-3 rounded hover:bg-primary/80'>
				Cadastre-se
			</button>
		</div>
	);
};

export default NavBar;
