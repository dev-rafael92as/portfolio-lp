import { buttonIconProps } from "../../utils/componentTypes"

const ButtonIcon = ({icon, buttonContent}: buttonIconProps) => {
  return (
    <button className='flex gap-2 py-4 px-7 bg-primaryBlue text-white items-center hover:opacity-50 transition-opacity'>
        {buttonContent}
        {icon}
    </button>
  )
}

export default ButtonIcon