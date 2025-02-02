import CSSIcon from "../assets/icons/CSSIcon";
import HTMLIcon from "../assets/icons/HTMLIcon";
import JSIcon from "../assets/icons/JSIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import FlagContent from "./FlagContent/FlagContent";
import SkillCard from "./SkillCard/SkillCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const SkillSession = () => {
	return (
		<section className="md:my-48 py-6 max-w-[1359px] mx-auto px-4">
			<div className="flex lg:flex-row flex-col max-w-[1359px] mx-auto pt-16 relative px-4 pb-32">
				<div className="flex flex-col w-full">
					<div className="absolute top-3">
						<FlagContent flagContent="Habilidades" />
					</div>
					<h4 className="mt-9 text-3xl leading-[45px] max-w-[432px]">
						Minhas habilidades em desenvolvimento front-end
					</h4>
				</div>
				<div className="h-auto w-[2px] bg-primaryBlue rounded-3xl mx-6"></div>
				<div className="w-full">
					<p className="text-grayText text-base leading-[36px] max-w-[628px]">
						Aqui estão algumas das habilidades mais relevantes que destaco até
						aqui da minha{" "}
						<strong className="text-white">jornada profissional</strong>, elas
						me <strong className="text-white">ajudam todos os dias</strong> no
						desempenho das minhas funções
					</p>
				</div>
			</div>

			<div className="lg:px-4 px-4">
				<Carousel>
					<CarouselContent>
						<CarouselItem className="lg:basis-1/4 md:basis-1/2">
							<SkillCard
								cardText="Conhecimentos teóricos e pouca aplicação prática em projetos reais, mas constantemente melhorando."
								cardTitle="Javascript"
								Icon={JSIcon}
							/>
						</CarouselItem>
						<CarouselItem className="lg:basis-1/4 md:basis-1/2">
							<SkillCard
								cardText="Conhecimentos teóricos e pouca aplicação prática em projetos reais, mas constantemente melhorando."
								cardTitle="React"
								Icon={ReactIcon}
							/>
						</CarouselItem>
						<CarouselItem className="lg:basis-1/4 md:basis-1/2">
							<SkillCard
								cardText="Conhecimentos teóricos e pouca aplicação prática em projetos reais, mas constantemente melhorando."
								cardTitle="HTML"
								Icon={HTMLIcon}
							/>
						</CarouselItem>
						<CarouselItem className="lg:basis-1/4 md:basis-1/2">
							<SkillCard
								cardText="Conhecimentos teóricos e pouca aplicação prática em projetos reais, mas constantemente melhorando."
								cardTitle="CSS"
								Icon={CSSIcon}
							/>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
};

export default SkillSession;
