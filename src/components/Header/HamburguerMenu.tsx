// import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

const HamburguerMenu = () => {
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const handleMenuOpen = () => {
	//   setIsMenuOpen(!isMenuOpen);
	// };
	return (
		<div>
			<Sheet>
				<SheetTrigger>
					<RxHamburgerMenu />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
			{/* <button className="" onClick={handleMenuOpen}></button>
      {isMenuOpen && <div>Abriuu</div>} */}
		</div>
	);
};

export default HamburguerMenu;
