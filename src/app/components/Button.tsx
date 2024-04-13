import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	className?: string;
}

const Button = ({ className, ...props }: ButtonProps) => {
	const _className = twMerge(
		`border border-white/20 rounded px-3 text-xs font-semibold text-white/80 hover:bg-selected-tab`,
		className
	);

	return (
		<button
			className={_className}
			{...props}
		/>
	);
};

export default Button;
