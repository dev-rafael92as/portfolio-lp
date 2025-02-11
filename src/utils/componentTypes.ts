export interface ButtonIconProps {
    buttonContent: string
    icon?: JSX.Element
    urlButton?: string
    classCss?: string
}

export interface FlagContentProps {
    flagContent: string
}

export interface SkillCardProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    cardTitle: string
    cardText: string
}

export interface StudyCardProps {
    title: string
    description: string
}

export interface ContactCardProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    title: string
    content: string
    href: string
}

export interface HygraphProps {
    home: StartSession
}

interface StartSession {
    descriptionStartSession: string
    subtitleStartSession: string
    titleStartSession: string
}