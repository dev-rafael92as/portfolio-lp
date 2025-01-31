import { isMobile } from 'react-device-detect';
import Logo from "./Logo";
import linkedinLogo from '../../assets/icon-linkedin.png'
import HamburguerMenu from './HamburguerMenu';

// if (isMobile) return (
//   <header></header>
// )

const Header = () => {
  return (
    <header className="text-white  border-b border-solid border-[#5E6266]">
      <div className="flex justify-between max-w-7xl mx-auto py-6 items-center">
        <Logo />

        {isMobile && 
          <HamburguerMenu />
        }

        {!isMobile && 
          <>  
          <nav className="flex gap-8">
            <button>
              <p className="p-2">Sobre mim</p>
            </button>
            <button>
              <p className="p-2">Skills</p>
            </button>
            <button>
              <p className="p-2">Projetos</p>
            </button>
            <button>
              <p className="p-2">Estudos</p>
            </button>
            <button>
              <p className="p-2">Contato</p>
            </button>
          </nav>

          <button className="flex gap-2 items-center p-2">
            <p>Acessar Linkedin</p>
            <img src={linkedinLogo} alt="Logo Linkedin" />
          </button>
          </>
        }
      </div>
    </header>
  );
};

export default Header;
