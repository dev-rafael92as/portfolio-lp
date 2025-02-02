import { FlagContentProps } from "../../utils/componentTypes";

const FlagContent = ({ flagContent }: FlagContentProps) => {
	return (
		<div className="bg-primaryBlue text-white px-[11px] py-[15px] rounded-[100px] md:text-base text-xs leading-3 w-fit">
			{flagContent}
		</div>
	);
};

export default FlagContent;
