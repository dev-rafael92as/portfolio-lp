import { ContactCardProps } from "../../utils/componentTypes";

function ContactCard({
	Icon,
	svgIcon,
	title,
	content,
	href,
}: ContactCardProps) {
	return (
		<a href={href}>
			<div className="flex gap-3 items-end w-[276px]">
				<div className="border border-primaryBlue p-4 rounded-2xl">
					{Icon ? (
						<Icon />
					) : svgIcon ? (
						<span
							className="w-6 h-6 block"
							dangerouslySetInnerHTML={{ __html: svgIcon }}
						/>
					) : null}
				</div>
				<div>
					<p className="font-bold mb-2">{title}</p>
					<p className="text-grayText text-sm">{content}</p>
				</div>
			</div>
		</a>
	);
}

export default ContactCard;
