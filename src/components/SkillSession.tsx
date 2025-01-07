import CSSIcon from '../assets/icons/CSSIcon'
import HTMLIcon from '../assets/icons/HTMLIcon'
import JSIcon from '../assets/icons/JSIcon'
import ReactIcon from '../assets/icons/ReactIcon'
import FlagContent from './FlagContent/FlagContent'
import SkillCard from './SkillCard/SkillCard'

const SkillSession = () => {
  return (
    <section>
        <div className='flex max-w-[1359px] mx-auto pt-16 relative px-4 pb-32'>
            <div className='flex flex-col w-full'>
                <div className='absolute top-3'>
                    <FlagContent flagContent='Habilidades' />
                </div>
                <h4 className='mt-9 text-3xl leading-[45px] max-w-[432px]'>Minhas habilidades em desenvolvimento front-end</h4>
            </div>
            <div className='h-auto w-[2px] bg-primaryBlue rounded-3xl mx-6'></div>
            <div className='w-full'>
                <p className='text-grayText text-base leading-[36px] max-w-[628px]'>Aqui estão algumas das habilidades mais relevantes que destaco até aqui da minha <strong className='text-white'>jornada profissional</strong>, elas me <strong className='text-white'>ajudam todos os dias</strong> no desempenho das minhas funções</p>
            </div>
        </div>

        <div className='flex max-w-[1359px] mx-auto pt-16 relative px-4 justify-between w-full'>
            <SkillCard cardText='Conhecimentos teóricos e pouca aplicação prática em projetos reais, mas constantemente melhorando.' cardTitle='Javascript' Icon={JSIcon} />
            <SkillCard cardText='Conhecimentos teóricos e pouca aplicação prática em projetos reais, mas constantemente melhorando.' cardTitle='React' Icon={ReactIcon} />
            <SkillCard cardText='Conhecimentos teóricos e pouca aplicação prática em projetos reais, mas constantemente melhorando.' cardTitle='HTML' Icon={HTMLIcon} />
            <SkillCard cardText='Conhecimentos teóricos e pouca aplicação prática em projetos reais, mas constantemente melhorando.' cardTitle='CSS' Icon={CSSIcon} />
        </div>
    </section>
  )
}

export default SkillSession