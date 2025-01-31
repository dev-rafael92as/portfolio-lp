import FlagContent from "./FlagContent/FlagContent";
import IconDivider from "./IconDivider.tsx/IconDivider";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectImage from "../assets/ImageProject.png";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const ProjectSession = () => {
  const projectMarkup = {
    projectTitle: "Desafio - Front-End Mentor",
    projectDescription: `Projetinho onde desenvolvi o layout de um card de preço, nele foi possível desenvolver de uma forma diferente, seguindo apenas a imagem e algumas instruções de estilização.`,
    projectImage: ProjectImage,
    projectTecs: ["Javascript", "HTML", "CSS"],
    projectLink: "/",
  };
  return (
    <section className="my-48 max-w-[1359px] mx-auto px-4">
      <div className="w-full justify-center flex mb-8">
        <FlagContent flagContent="Projetos" />
      </div>

      <div className="flex flex-col gap-8 justify-center items-center mb-28">
        <h3 className="text-[30px] max-w-[366px] flex w-full text-center font-epilogue font-bold leading-[45px]">
          Conheça meus projetos mais recentes
        </h3>
        <p className="max-w-[839px] text-[18px] leading-9 text-center">
          Esta seção estão <strong>alguns dos projetos</strong> que finalizei
          recentemente e alguns que estão em processo de trabalho. Por aqui é
          possível identificar por quais caminhos ando focando meus estudos e{" "}
          <strong>práticas na programação</strong>.
        </p>
        <IconDivider />
      </div>

      <div className="flex gap-[30px]">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="lg:basis-1/3">
              <ProjectCard {...projectMarkup} />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <ProjectCard {...projectMarkup} />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <ProjectCard {...projectMarkup} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectSession;
