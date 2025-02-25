import ArrowButton from "./ButtonIcon/ArrowButton";
import ButtonIcon from "./ButtonIcon/ButtonIcon";
import ButtonText from "./ButtonText/ButtonText";
import bgStartSession from "../assets/bg-start-session.png";
import { isDesktop } from "react-device-detect";
import { useHygraphContext } from "@/context/useHygraph";
import { RichText } from "@graphcms/rich-text-react-renderer";

const StartSession = () => {
	const { home } = useHygraphContext();
	const { startSession } = home;
	const { titleStart, subTitle, description, contactFields } = startSession;
	console.log({ startSession });
	return (
		<section
			className="bg-cover lg:px-4"
			style={isDesktop ? { backgroundImage: `url(${bgStartSession})` } : {}}
		>
			<div className="max-w-[1358px] mx-auto md:py-32 py-9 md:px-0 px-4">
				<p className="font-normal text-xs md:text-xl tracking-[.2em] text-grayText mb-4">
					Bem vindo ao meu Portfólio
				</p>
				<h2 className="font-raleway font-bold text-[44px] leading-[51px] md:text-7xl md:mb-1 mb-4">
					{titleStart}
				</h2>
				<p className="md:text-2xl text-[16px] leading-4 md:mb-7 mb-4">
					{subTitle.text}
				</p>
				<p className="text-grayText md:text-xl text-xs leading-9 font-normal md:mb-14 mb-11">
					<RichText content={description.raw}></RichText>
				</p>
				<div className="flex items-center gap-8">
					<div className="max-w-[232px]">
						<ButtonIcon
							urlButton={
								contactFields.find((item) => item.name === "Linkedin")
									?.contactValue
							}
							buttonContent="Veja meu linkedin"
							icon={ArrowButton()}
						/>
					</div>
					<ButtonText
						urlButton={
							contactFields.find((item) => item.name === "Github")?.contactValue
						}
						buttonContent="Acessar Github"
					/>
				</div>
			</div>
		</section>
	);
};

export default StartSession;
