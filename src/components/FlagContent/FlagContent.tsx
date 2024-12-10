import { flagContentProps } from '../../utils/componentTypes'

const FlagContent = ({flagContent}: flagContentProps) => {
  return (
    <div className='bg-primaryBlue text-white px-[11px] py-[15px] rounded-[100px] text-base w-fit'>{flagContent}</div>
  )
}

export default FlagContent