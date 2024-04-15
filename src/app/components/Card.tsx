import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import gg from '@/app/assets/gg.png';
import Image from 'next/image';

interface CardProps extends ComponentPropsWithoutRef<'p'> {
	className?: string;
	number: number;
	mini?: boolean;
}

const colors = {
	red: 'bg-primary',
	white: 'bg-white',
	gray: 'bg-slate-500',
};

const grayNumbers = [1, 3, 5, 7, 9, 11, 13];

const Card = ({ className, number, mini, children, ...props }: CardProps) => {
	const type = grayNumbers.includes(number)
		? 'gray'
		: number === 0
		? 'white'
		: 'red';

	const _className = twMerge(
		`${type !== 'white' ? 'border-4 rounded-full' : 'text-black'} ${
			mini
				? `w-6 h-6 m-1.5  text-xs ${type !== 'white' && 'border-2'}`
				: 'w-16 h-16 m-4'
		} font-extrabold flex justify-center items-center`,
		className
	);

	return (
		<div className={`${colors[type]} rounded flex justify-center`}>
			<span
				className={_className}
				{...props}
			>
				{type !== 'white' ? (
					number
				) : (
					<Image
						src={gg}
						alt='GG'
						className='size-15'
					/>
				)}
			</span>
		</div>
	);
};

export default Card;
