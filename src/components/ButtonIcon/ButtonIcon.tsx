import { ButtonIconProps } from "../../utils/componentTypes";

const ButtonIcon = ({
	icon,
	buttonContent,
	urlButton,
	classCss,
}: ButtonIconProps) => {
	return (
		<a
			href={urlButton}
			className={`flex gap-2 w-full md:text-base text-xs leading-3 justify-center py-4 px-7 bg-primaryBlue text-white items-center hover:opacity-50 transition-opacity ${classCss}`}
		>
			{buttonContent}
			{icon}
		</a>
	);
};

export default ButtonIcon;
