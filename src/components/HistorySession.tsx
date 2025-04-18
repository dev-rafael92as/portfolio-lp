import FlagContent from "./FlagContent/FlagContent";
import IconDivider from "./IconDivider.tsx/IconDivider";
import { useHygraphContext } from "@/context/useHygraph";
import { RichText } from "@graphcms/rich-text-react-renderer";

const HistorySession = () => {
	const { home } = useHygraphContext();
	const { historySession } = home;
	const { description, initialDescription, profileImage, title } =
		historySession;

	return (
		<section className="flex lg:flex-row flex-col md:gap-0 gap-16 justify-between max-w-[1248px] mx-auto px-4 md:my-32 my-6">
			<div className="border-[#5E6266] rounded-[31px] border-solid border-[1px] relative w-full max-w-[467px]">
				<img
					src={profileImage.url}
					alt="Imagem de perfil Rafael Barros"
					className="lg:absolute md:w-[467px] max-h-[487px] md:translate-y-[-37px] object-cover"
				/>
			</div>
			<div className="w-full max-w-[627px]">
				<FlagContent flagContent={title} />

				<h4 className="my-8 md:max-w-[340px] max-w-[204px] font-bold md:text-3xl md:leading-[45px] text-[18px] leading-[27px]">
					{initialDescription}
				</h4>

				<div className="text-base text-grayText mb-8 leading-10">
					<RichText content={description.raw} />
				</div>
				<IconDivider />
			</div>
		</section>
	);
};

export default HistorySession;
