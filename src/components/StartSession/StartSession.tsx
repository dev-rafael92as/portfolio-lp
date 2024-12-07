import ArrowButton from "../ButtonIcon/ArrowButton";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import ButtonText from "../ButtonText/ButtonText";
import bgStartSession from '../../assets/bg-start-session.png'

const StartSession = () => {
  return (
    <section className="bg-cover" style={{backgroundImage: `url(${bgStartSession})`}}>
      <div className="max-w-[1358px]  mx-auto py-32">
        <p className="font-normal text-xl tracking-[.2em] text-[#D7D7D7] mb-4">
          Bem vindo ao meu Portfólio
        </p>
        <h2 className="font-raleway font-bold text-7xl mb-1">Rafael Barros</h2>
        <p className="text-2xl mb-7">
          Desenvolvedor Web <span className="text-primaryBlue">Front-End</span>
        </p>
        <p className="text-[#D7D7D7] text-xl font-normal mb-14">
          Olá, sou um estudante de tecnologia e amante de descobertas e desafios,
          um eterno estudante e <span className="text-white">entusiasta da tecnologia e de resolver problemas
          reais.</span>
        </p>
        <div className="flex items-center gap-8">
          <ButtonIcon buttonContent="Veja meu linkedin" icon={ArrowButton()} />
          <ButtonText
            urlButton="https://github.com/dev-rafael92as"
            buttonContent="Acessar Github"
          />
        </div>
      </div>
    </section>
  );
};

export default StartSession;
