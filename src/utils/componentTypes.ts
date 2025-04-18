export interface ButtonIconProps {
	buttonContent: string;
	icon?: JSX.Element;
	urlButton?: string;
	classCss?: string;
}

export interface FlagContentProps {
	flagContent: string;
}

export interface SkillCardProps {
	Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	cardTitle: string;
	cardText: string;
	svgIcon?: string;
}

export interface StudyCardProps {
	title: string;
	description: Description;
}

export interface ContactCardProps {
	Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	title: string;
	content: string;
	href: string;
	svgIcon?: string
}

export interface HygraphProps {
	home: ProfileData;
}

type Description = {
	html: string;
	text: string;
	markdown: string;
	raw : {
		children: ParagraphNode[];
	}
};

type ContactField = {
	name: string;
	contactValue: string;
	svgIcon?: string;
	contentValue: string;
};

type Image = {
	url: string;
};

type Project = {
	title: string;
	description: Description;
	image: Image;
	url: string | null;
	knowTechnology: Technology[]
};

type Technology = {
	name: string;
	svgIcon: string;
	description: Description;
};

type StartSession = {
	titleStart: string;
	subTitle: Description;
	description: Description;
	contactFields: ContactField[];
};

type HistorySession = {
	id: string;
	title: string;
	description: Description;
	initialDescription: string;
	profileImage: Image;
};

type ContactSession = {
	contactFields: ContactField[];
	title: string;
	text: Description;
	description: string;
};

type ProjectSession = {
	title: string;
	description: string;
	text: Description;
	myProject: Project[];
};

type SkillSession = {
	title: string;
	description: string;
	text: Description;
	knowTechnology: Technology[];
};

type ProfileData = {
	startSession: StartSession;
	historySession: HistorySession;
	contactSession: ContactSession;
	projectSession: ProjectSession;
	studySession: StudySession;
	skillSession: SkillSession;
};

type StudySession = {
	title: string;
	description: string;
	text: Description;
	knowTechnology: Technology[];
}

type TextNode = {
	text: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
};

type ParagraphNode = {
	type: "paragraph";
	children: TextNode[];
};
