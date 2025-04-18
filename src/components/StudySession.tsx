import FlagContent from "./FlagContent/FlagContent";
import StudyCard from "./StudyCard/StudyCard";
import IconDivider from "./IconDivider.tsx/IconDivider";
import { useHygraphContext } from "@/context/useHygraph";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const StudySession = () => {
	const { home } = useHygraphContext();
	const { studySession } = home;
	const { description, title, knowTechnology } = studySession;
	return (
		<section className="md:my-48 py-6 max-w-[1359px] mx-auto px-4">
			<div className="w-full flex-col items-center justify-center flex max-w-[479px] mx-auto gap-8 mb-24">
				<FlagContent flagContent={title} />

				<p className="font-bold text-3xl leading-[45px]">{description}</p>

				<IconDivider />
			</div>

			<div className="flex lg:flex-row lg:gap-0 gap-10 flex-col justify-between items-start">
				<Carousel>
					<CarouselContent>
						{knowTechnology.map((tech) => (
							<CarouselItem className="lg:basis-1/3" key={tech.name}>
								<StudyCard title={tech.name} description={tech.description} />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
};

export default StudySession;
