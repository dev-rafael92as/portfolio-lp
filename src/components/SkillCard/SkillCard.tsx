import React from 'react'

const SkillCard = ({Icon, cardTitle, cardText}) => {
  return (
    <div>
        <div>
            <Icon />
            {cardTitle}
        </div>
        <p>{cardText}</p>
    </div>
  )
}

export default SkillCard