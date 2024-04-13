import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ColorButtonProps extends ComponentPropsWithoutRef<'button'> {
	className?: string;
	selected: boolean;
}

const ColorButton = ({ className, selected, ...props }: ColorButtonProps) => {
	const _className = twMerge(
		`px-[30px] py-3 text-xs rounded-sm font-medium ${
			selected && 'border-2 border-white border-space-4'
		}`,
		className
	);
	return (
		<button
			className={_className}
			{...props}
		/>
	);
};

export default ColorButton;
