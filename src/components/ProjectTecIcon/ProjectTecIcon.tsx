interface ProjectTecIconProps {
	techName: string;
}

const ProjectTecIcon = ({ techName }: ProjectTecIconProps) => {
	return (
		<div className="rounded-[100px] font-bold text-[14px] leading-[14px] w-max border-[2px] py-[10px] px-[13px] border-primaryBlue">
			{techName}
		</div>
	);
};

export default ProjectTecIcon;
