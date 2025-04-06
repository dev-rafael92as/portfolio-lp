interface ProjectTecIconProps {
	techName: string;
}

const ProjectTecIcon = ({ techName }: ProjectTecIconProps) => {
	return (
		<div className="rounded-[100px] border-[2px] py-[10px] px-[13px] border-primaryBlue flex">
			<span className="font-bold text-[11px] leading-[14px] w-max">
				{techName}
			</span>
		</div>
	);
};

export default ProjectTecIcon;
