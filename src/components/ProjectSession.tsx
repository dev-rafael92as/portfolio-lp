import FlagContent from "./FlagContent/FlagContent";
import IconDivider from "./IconDivider.tsx/IconDivider";
import ProjectCard from "./ProjectCard/ProjectCard";
// import ProjectImage from "../assets/ImageProject.png";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useHygraphContext } from "@/context/useHygraph";
import { RichText } from "./RichText/RichText";

const ProjectSession = () => {
	const { home } = useHygraphContext();
	const { projectSession } = home;
	const { description, myProject, text, title } = projectSession;

	return (
		<section className="md:my-48 my-6 max-w-[1359px] mx-auto px-4">
			<div className="w-full justify-center flex mb-8">
				<FlagContent flagContent={title} />
			</div>

			<div className="flex flex-col gap-8 justify-center items-center mb-28">
				<h3 className="text-[30px] max-w-[366px] flex w-full text-center font-epilogue font-bold leading-[45px]">
					{description}
				</h3>
				<div className="max-w-[839px] text-[18px] leading-9 text-center">
					<RichText content={text.raw} />
				</div>
				<IconDivider />
			</div>

			<div className="lg:flex lg:gap-[30px]">
				<Carousel>
					<CarouselContent>
						{myProject.map((project) => (
							<CarouselItem className="lg:basis-1/3" key={project.title}>
								<ProjectCard
									title={project.title}
									description={
										project.description.text || project.description.toString()
									}
									image={project.image.url}
									url={project.url as string}
									knowTechnology={project.knowTechnology}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
};

export default ProjectSession;
