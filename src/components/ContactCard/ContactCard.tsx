import { ContactCardProps } from "../../utils/componentTypes"

function ContactCard({Icon, title, content, href}: ContactCardProps) {
  return (
    <a href={href}>
        <div className="flex gap-3 items-center">
            <div className="border border-primaryBlue p-4 rounded-2xl">
                <Icon />
            </div>
            <div>
                <p className="font-bold mb-2">{title}</p>
                <p className="text-grayText">{content}</p>
            </div>
        </div>
    </a>
  )
}

export default ContactCard