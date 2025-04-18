import ProjectTecIcon from "../ProjectTecIcon/ProjectTecIcon";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export interface ProjectCardType {
	title: string;
	description: string;
	image: string;
	knowTechnology?: TechName[];
	url: string;
}

type TechName = {
	name: string;
};

const ProjectCard = ({
	title,
	description,
	image,
	knowTechnology,
	url,
}: ProjectCardType) => {
	return (
		<div className="max-w-[433px]">
			<div className="mb-8">
				<img
					src={image}
					alt={title}
					width={433}
					height={322}
					className="rounded-3xl max-h-[188px]"
				/>
			</div>

			<div className="flex mb-8 gap-[10px] flex-wrap">
				{knowTechnology?.map(({ name }) => {
					return <ProjectTecIcon key={name} techName={name} />;
				})}
			</div>

			<h4 className="font-bold text-[22px] leading-[22px] mb-8">{title}</h4>
			<p className="text-grayText font-[18px] leading-9 h-[144px]">
				{description}
			</p>
			<div className="flex w-full items-center justify-center mt-6">
				<ButtonIcon
					classCss="rounded-md"
					buttonContent="Acessar o Website"
					urlButton={url}
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
