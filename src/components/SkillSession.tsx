import { useHygraphContext } from "@/context/useHygraph";
import CSSIcon from "../assets/icons/CSSIcon";
import HTMLIcon from "../assets/icons/HTMLIcon";
import JSIcon from "../assets/icons/JSIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import FlagContent from "./FlagContent/FlagContent";
import SkillCard from "./SkillCard/SkillCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { RichText } from "@graphcms/rich-text-react-renderer";

const SkillSession = () => {
	const { home } = useHygraphContext();
	const { skillSession } = home;
	const { description, knowTechnology, text, title } = skillSession;
	return (
		<section className="md:my-48 py-6 max-w-[1359px] mx-auto px-4">
			<div className="flex lg:flex-row flex-col max-w-[1359px] mx-auto pt-16 relative px-4 pb-32">
				<div className="flex flex-col w-full">
					<div className="absolute top-3">
						<FlagContent flagContent={title} />
					</div>
					<h4 className="mt-9 text-3xl leading-[45px] max-w-[432px]">
						{description}
					</h4>
				</div>
				<div className="h-auto w-[2px] bg-primaryBlue rounded-3xl mx-6"></div>
				<div className="w-full">
					<div className="text-grayText text-base leading-[36px] max-w-[628px]">
						<RichText content={text.raw} />
					</div>
				</div>
			</div>

			<div className="lg:px-4 px-4">
				<Carousel>
					<CarouselContent>
						{knowTechnology.map(({ description, name, svgIcon }) => (
							<CarouselItem className="lg:basis-1/4 md:basis-1/2" key={name}>
								<SkillCard
									cardText={description.text}
									cardTitle={name}
									svgIcon={svgIcon}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
};

export default SkillSession;
