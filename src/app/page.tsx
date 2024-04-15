import Game from './components/Game';
import Header from './components/Header';
import SideBar from './components/SideBar';

export default function Home() {
	return (
		<>
			<Header />
			<section className='grid grid-flow-col '>
				<SideBar />
				<main className='h-fit'>
					<Game />
				</main>
			</section>
		</>
	);
}
