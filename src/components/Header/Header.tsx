import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between max-w-7xl mx-auto py-6">
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

      <button>
        <p>Acessar Linkedin</p>
        <img src="" alt="" />
      </button>
    </header>
  );
};

export default Header;
