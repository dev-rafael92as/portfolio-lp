import { HygraphProps } from "@/utils/componentTypes";
import { createContext, useContext, ReactNode } from "react";

// interface Page {
// 	pageTitle?: string;
// 	benefitsShelfTitle?: string;
// 	imageBannerLoginForm?: { url: string }[];
// }

// interface HygraphContextProps {
// 	data: Page[];
// }

const HygraphContext = createContext<HygraphProps | undefined>(undefined);

export const HygraphProvider = ({
	children,
	home,
}: {
	children: ReactNode;
	home: HygraphProps;
}) => {
	return (
		<HygraphContext.Provider value={home}>{children}</HygraphContext.Provider>
	);
};

export const useHygraphContext = () => {
	const context = useContext(HygraphContext);
	if (!context) {
		throw new Error("useHygraphContext must be used within a HygraphProvider");
	}
	return context;
};
