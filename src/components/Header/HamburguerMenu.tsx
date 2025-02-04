import { RxHamburgerMenu } from "react-icons/rx";
import { ChevronRight } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import Logo from "./Logo";

const HamburguerMenu = () => {
	return (
		<div className="flex items-center">
			<Sheet>
				<SheetTrigger>
					<RxHamburgerMenu />
				</SheetTrigger>
				<SheetContent
					side="top"
					className="w-full h-full bg-main text-white py-6 px-4 border-b-0"
				>
					<SheetHeader className="text-start border-b border-[#1E2123] pb-6">
						<SheetTitle className="text-white">
							<Logo />
						</SheetTitle>
					</SheetHeader>
					<nav className="flex flex-col gap-3 justify-start items-start">
						<button className="py-2 flex w-full justify-between items-center text-grayMenu border-b border-[#1E2123]">
							<p className="p-2">Sobre mim</p>
							<ChevronRight />
						</button>
						<button className="py-2 flex w-full justify-between items-center text-grayMenu border-b border-[#1E2123]">
							<p className="p-2">Skills</p>
							<ChevronRight />
						</button>
						<button className="py-2 flex w-full justify-between items-center text-grayMenu border-b border-[#1E2123]">
							<p className="p-2">Projetos</p>
							<ChevronRight />
						</button>
						<button className="py-2 flex w-full justify-between items-center text-grayMenu border-b border-[#1E2123]">
							<p className="p-2">Estudos</p>
							<ChevronRight />
						</button>
						<button className="py-2 flex w-full justify-between items-center text-grayMenu border-b border-[#1E2123]">
							<p className="p-2">Contato</p>
							<ChevronRight />
						</button>
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default HamburguerMenu;
