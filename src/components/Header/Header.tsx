import React from "react";
import Logo from "./Logo";
import linkedinLogo from '../../assets/icon-linkedin.png'

const Header = () => {
  return (
    <header className="text-white flex justify-between max-w-7xl mx-auto py-6 items-center">
      <Logo />

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
    </header>
  );
};

export default Header;
