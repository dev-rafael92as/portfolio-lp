export interface buttonIconProps {
    buttonContent: string
    icon?: JSX.Element
    urlButton?: string
}

export interface flagContentProps {
    flagContent: string
}

export interface skillCardProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    cardTitle: string
    cardText: string
}