import { RichText } from "@graphcms/rich-text-react-renderer";
import CheckIcon from "../../assets/icons/CheckIcon";
import { StudyCardProps } from "../../utils/componentTypes";

const StudyCard = ({ title, description }: StudyCardProps) => {
	return (
		<div className="flex flex-col items-center justify-center md:max-w-[374px]">
			<div className="flex items-center justify-center p-6 border border-primaryBlue rounded-full w-fit mb-16">
				<CheckIcon />
			</div>

			<p className="text-[22px] leading-[22px] font-bold md:mb-1 mb-5">
				{title}
			</p>
			<p className="text-base leading-9 text-grayText text-center">
				<RichText content={description.raw}></RichText>
			</p>
		</div>
	);
};

export default StudyCard;
