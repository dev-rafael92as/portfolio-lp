import ArrowButton from "../ButtonIcon/ArrowButton";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import ButtonText from "../ButtonText/ButtonText";

const StartSession = () => {
  return (
    <div>
      <p className="font-normal text-xl tracking-[.2em]">
        Bem vindo ao meu Portfólio
      </p>
      <h2 className="font-raleway font-bold text-7xl">Rafael Barros</h2>
      <p className="">
        Desenvolvedor Web <span>Front-End</span>
      </p>
      <p>
        Olá, sou um estudante de tecnologia e amante de descobertas e desafios,
        um eterno estudante e entusiasta da tecnologia e de resolver problemas
        reais.
      </p>
      <div className="flex items-center gap-4">
        <ButtonIcon buttonContent="Veja meu linkedin" icon={ArrowButton()} />
        <ButtonText
          urlButton="https://github.com/dev-rafael92as"
          buttonContent="Acessar Github"
        />
      </div>
    </div>
  );
};

export default StartSession;
