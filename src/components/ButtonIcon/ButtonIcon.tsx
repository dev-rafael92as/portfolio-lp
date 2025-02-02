import { ButtonIconProps } from "../../utils/componentTypes";

const ButtonIcon = ({ icon, buttonContent, classCss }: ButtonIconProps) => {
	return (
		<button
			className={`flex gap-2 w-full md:text-base text-xs leading-3 justify-center py-4 px-7 bg-primaryBlue text-white items-center hover:opacity-50 transition-opacity ${classCss}`}
		>
			{buttonContent}
			{icon}
		</button>
	);
};

export default ButtonIcon;
