import { useState } from 'react';
import ColorButton from './ColorButton';

const SelectedColor = () => {
	const [selectedColor, setSelectedColor] = useState('white');

	const setColor = (color: string) => {
		setSelectedColor(color);
	};

	return (
		<div className='w-full '>
			<p className='text-sm text-white/80 font-medium'>Selecionar Cor</p>

			<div className='flex flex-1 justify-between mt-2 '>
				<ColorButton
					className='bg-primary'
					selected={selectedColor === 'red'}
					onClick={() => setColor('red')}
				>
					x2
				</ColorButton>
				<ColorButton
					className={`bg-white text-primary ${
						selectedColor === 'white' && 'border-primary'
					}`}
					selected={selectedColor === 'white'}
					onClick={() => setColor('white')}
				>
					x14
				</ColorButton>
				<ColorButton
					className='bg-gray'
					selected={selectedColor === 'gray'}
					onClick={() => setColor('gray')}
				>
					x2
				</ColorButton>
			</div>
		</div>
	);
};

export default SelectedColor;
