import { ButtonIconProps } from "../../utils/componentTypes";

const ButtonText = ({ buttonContent, urlButton }: ButtonIconProps) => {
  return (
    <a className="text-white underline text-base" href={urlButton} aria-label={buttonContent}>
      {buttonContent}
    </a>
  );
};

export default ButtonText;
