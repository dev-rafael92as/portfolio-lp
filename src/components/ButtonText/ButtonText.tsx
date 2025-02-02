import { ButtonIconProps } from "../../utils/componentTypes";

const ButtonText = ({ buttonContent, urlButton }: ButtonIconProps) => {
	return (
		<a
			className="text-white underline md:text-base text-xs leading-3"
			href={urlButton}
			aria-label={buttonContent}
		>
			{buttonContent}
		</a>
	);
};

export default ButtonText;
