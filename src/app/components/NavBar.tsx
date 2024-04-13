const NavBar = () => {
	return (
		<div className='flex gap-10 items-center'>
			<a
				href='#'
				className='font-bold transition-colors hover:text-primary hover:underline underline-offset-2'
			>
				Entrar
			</a>

			<a
				href='#'
				className='font-semibold transition-colors bg-primary text-white px-4 py-3 rounded hover:bg-primary/80'
			>
				Cadastre-se
			</a>
		</div>
	);
};

export default NavBar;
