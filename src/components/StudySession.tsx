import FlagContent from "./FlagContent/FlagContent";
import StudyCard from "./StudyCard/StudyCard";
import IconDivider from "./IconDivider.tsx/IconDivider";

const StudySession = () => {
	return (
		<section className="md:my-48 py-6 max-w-[1359px] mx-auto px-4">
			<div className="w-full flex-col items-center justify-center flex max-w-[479px] mx-auto gap-8 mb-24">
				<FlagContent flagContent="Estudos" />

				<p className="font-bold text-3xl leading-[45px]">
					Veja as tecnologias que estou estudando no momento
				</p>

				<IconDivider />
			</div>

			<div className="flex lg:flex-row lg:gap-0 gap-10 flex-col justify-between items-start">
				<StudyCard
					title="ReactJS"
					description="Aprofundando mais meus conhecimentos e métodos de trabalho com utilização de hooks, componetização, boas práticas e clean code."
				/>
				<StudyCard
					title="TypeScript"
					description="Trazer tipagem forte para o javascript, com orientação a objetos e podendo ser escrita em qualquer ambiente de desenvolvimento. Ele com certeza é o próximo nível de programação."
				/>
				<StudyCard
					title="NodeJS"
					description="Aventurar na construção de aplicações voltadas ao back-end, criando as primeiras APIs inicialmente e depois me aprofundando mais na arquitetura."
				/>
			</div>
		</section>
	);
};

export default StudySession;
