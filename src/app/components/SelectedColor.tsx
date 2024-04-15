import ColorButton from './ColorButton';

const SelectedColor = ({
	updateBetDetails,
	selectedColor,
}: {
	updateBetDetails: (key: string, value: string) => void;
	selectedColor: string;
}) => {
	return (
		<div className='w-full '>
			<p className='text-sm text-white/80 font-medium'>Selecionar Cor</p>

			<div className='flex flex-1 justify-between mt-2 '>
				<ColorButton
					className='bg-primary'
					selected={selectedColor === 'red'}
					onClick={() => updateBetDetails('selectedColor', 'red')}
				>
					x2
				</ColorButton>
				<ColorButton
					className={`bg-white text-primary ${
						selectedColor === 'white' && 'border-primary'
					}`}
					selected={selectedColor === 'white'}
					onClick={() => updateBetDetails('selectedColor', 'white')}
				>
					x14
				</ColorButton>
				<ColorButton
					className='bg-gray'
					selected={selectedColor === 'gray'}
					onClick={() => updateBetDetails('selectedColor', 'gray')}
				>
					x2
				</ColorButton>
			</div>
		</div>
	);
};

export default SelectedColor;
