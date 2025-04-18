import { SkillCardProps } from "../../utils/componentTypes";
import IconDivider from "../IconDivider.tsx/IconDivider";

const SkillCard = ({ Icon, cardTitle, cardText, svgIcon }: SkillCardProps) => {
	return (
		<div className="md:max-w-[296px]">
			<div className="flex gap-5 items-center mb-5">
				{Icon ? (
					<Icon />
				) : svgIcon ? (
					<span
						className="w-6 h-6 block"
						dangerouslySetInnerHTML={{ __html: svgIcon }}
					/>
				) : null}
				{cardTitle}
			</div>
			<p className="mb-8">{cardText}</p>
			<IconDivider />
		</div>
	);
};

export default SkillCard;
