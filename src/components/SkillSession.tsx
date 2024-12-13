import FlagContent from './FlagContent/FlagContent'

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

        <div className='flex max-w-[1359px] mx-auto pt-16 relative px-4'>
            
        </div>
    </section>
  )
}

export default SkillSession