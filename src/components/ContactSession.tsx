import { useHygraphContext } from "@/context/useHygraph";
import ContactCard from "./ContactCard/ContactCard";
import FlagContent from "./FlagContent/FlagContent";
import IconDivider from "./IconDivider.tsx/IconDivider";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RichText } from "@graphcms/rich-text-react-renderer";

const ContactSession = () => {
	const { home } = useHygraphContext();
	const { contactSession } = home;
	const { contactFields, description, text, title } = contactSession;
	return (
		<section className="md:my-48 my-6 max-w-[1359px] mx-auto px-4">
			<div className="w-full flex-col items-center flex max-w-[479px] mx-auto gap-8 mb-24">
				<FlagContent flagContent={title} />
			</div>

			<div className="flex lg:flex-row md:gap-0 gap-9 flex-col justify-between">
				<div className="flex flex-col gap-9 max-w-[435px]">
					<p className="font-bold text-3xl leading-[45px]">{description}</p>
					<p className="text-[18px] leading-9">
						<RichText content={text.raw} />
					</p>
					<div className="md:block hidden">
						<IconDivider />
					</div>
				</div>

				<div className="flex lg:flex-row flex-col flex-wrap items-start text-[22px] leading-[22px] max-w-[700px] gap-12">
					{contactFields.map(
						({ contactValue, name, svgIcon, contentValue }) => {
							if (name == "Github") return;
							console.log(contentValue);
							return (
								<ContactCard
									svgIcon={svgIcon}
									content={contentValue}
									title={name}
									href={contactValue}
								/>
							);
						}
					)}
				</div>
			</div>
		</section>
	);
};

export default ContactSession;
