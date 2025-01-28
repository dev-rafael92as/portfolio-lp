import ProjectTecIcon from '../ProjectTecIcon/ProjectTecIcon'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

export interface ProjectCardType {
    projectTitle: string
    projectDescription: string
    projectImage: string
    projectTecs?: string[]
    projectLink: string
}

const ProjectCard = ({projectTitle, projectDescription, projectImage, projectTecs, projectLink}: ProjectCardType) => {
  return (
    <div className='max-w-[433px]'>
        <a className='' href={projectLink}>
            <div className='mb-8'>
                <img src={projectImage} alt="" />
            </div>

            <div className='flex mb-8 gap-[10px]'>
                {projectTecs?.map((techName) => {
                    return (
                        <ProjectTecIcon techName={techName} />
                    )
                })}
            </div>

            <h4 className='font-bold text-[22px] leading-[22px] mb-8'>{projectTitle}</h4>
            <p className='text-grayText font-[18px] leading-9'>{projectDescription}</p>
            <div className='flex w-full items-center justify-center mt-6'>
                <ButtonIcon classCss='rounded-md' buttonContent='Acessar o Website' urlButton={projectLink}/>
            </div>
        </a>
    </div>
  )
}

export default ProjectCard