import { buttonIconProps } from "../../utils/componentTypes";

const ButtonText = ({ buttonContent, urlButton }: buttonIconProps) => {
  return (
    <a className="text-white underline text-base" href={urlButton} aria-label={buttonContent}>
      {buttonContent}
    </a>
  );
};

export default ButtonText;
