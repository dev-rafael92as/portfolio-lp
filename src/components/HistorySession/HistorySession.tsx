import React from 'react'
import FlagContent from '../FlagContent/FlagContent'
import IconDivider from '../IconDivider.tsx/IconDivider'
import profilePhoto from '../../assets/profile-photo.png'

const HistorySession = () => {
  return (
    <section className='flex justify-between max-w-[1248px] mx-auto px-4 my-32'>
        <div className='border-[#5E6266] rounded-[31px] border-solid border-[1px] relative w-full max-w-[467px]'>
            <img src={profilePhoto} alt="Imagem de perfil Rafael Barros" className='absolute w-[467px] max-h-[487px~] translate-y-[-37px] object-cover' />
        </div>
        <div className='w-full max-w-[627px]'>
            <FlagContent flagContent='História'/>

            <h4 className='my-8 max-w-[340px] font-bold text-3xl leading-[45px]'>Um pouco mais sobre o Rafael Barros</h4>

            <p className='text-base text-grayText mb-8 leading-10'>Iniciou os estudos na tecnologia em meados de 2020 com 28 anos, incentivado por amigos próximos que enxergavam um certo perfil e paixão sobre o tema, <strong className='text-white'>começou por conta própria</strong>, comprou cursos, logo viu <strong className='text-white'>interesse no desenvolvimento para web</strong> e decidiu que começaria por lá. Hoje atua em uma agência ecomerces como <strong className='text-white'>Desenvolvedor Front-end Trainee.</strong></p>
            <IconDivider />
        </div>
    </section>
  )
}

export default HistorySession