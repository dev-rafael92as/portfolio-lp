import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const HamburguerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
        <button 
            className=""
            onClick={handleMenuOpen}
        >
            <RxHamburgerMenu />
        </button>
        {isMenuOpen && 
          <div>
            Abriuu
          </div>
        }
    </div>
  )
}

export default HamburguerMenu