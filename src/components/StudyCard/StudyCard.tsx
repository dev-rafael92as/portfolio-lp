import CheckIcon from '../../assets/icons/CheckIcon'
import { studyCardProps } from '../../utils/componentTypes'

const StudyCard = ({title, description}: studyCardProps) => {
  return (
    <div className='flex flex-col items-center justify-center max-w-[374px]'>
        <div className='flex items-center justify-center p-6 border border-primaryBlue rounded-full w-fit mb-16'>
            <CheckIcon />
        </div>

        <p className='text-[22px] leading-[22px] font-bold mb-1'>{title}</p>
        <p className='text-base leading-9 text-grayText'>{description}</p>
    </div>
  )
}

export default StudyCard