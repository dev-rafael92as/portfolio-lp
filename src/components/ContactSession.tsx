import ContactCard from "./ContactCard/ContactCard";
import FlagContent from "./FlagContent/FlagContent";
import IconDivider from "./IconDivider.tsx/IconDivider";
import { BsPhone, BsInstagram } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const ContactSession = () => {
  return (
    <section className="my-48 max-w-[1359px] mx-auto px-4">
      <div className="w-full flex-col items-center flex max-w-[479px] mx-auto gap-8 mb-24">
        <FlagContent flagContent="Contato" />
      </div>

      <div className="flex">
        <div className="flex flex-col gap-9">
          <p className="font-bold text-3xl leading-[45px]">
            Gostou do portfólio? Esses são meus contatos
          </p>
          <p className="text-[18px] leading-9">
            Sinta-se a vontade caso tenha alguma duvida ou precise entrar em
            contato!{" "}
            <strong className="font-extrabold">Vamos nos conectar</strong> e
            crescer essa comunidade incrível.
          </p>
          <div>
            <IconDivider />
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-start text-[22px] leading-[22px]">
          <ContactCard Icon={BsPhone} content="+55 (11) 99456-6523" title="Telefone" href="https://wa.me/5511994566523"/>
          <ContactCard Icon={FaLinkedinIn} content="linkedin/in/rafael92as/" title="Linkedin" href="www.linkedin.com/in/rafael92as"/>
          <ContactCard Icon={BsInstagram} content="Intagram" title="@rafiinha_barros" href="https://www.instagram.com/rafiinha_barros/"/>
          <ContactCard Icon={HiOutlineMail} content="rafa_barros92@hotmail.com" title="E-mail" href="mailto:rafa_barros92@hotmail.com"/>
        </div>
      </div>
    </section>
  );
};

export default ContactSession;
