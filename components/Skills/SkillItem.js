import React from 'react'

const SkillItem = ({ skill }) => {
    return (
        <div className='px-6 mx-8 md:mx-0 md:px-8 py-6'>
            <h4 className='text-1xl uppercase font-bold text-orange'>{skill.name}</h4>
            <p className='text-base'>{skill.grade}</p>
            <span className='text-lg normal-case font-bold'></span>
        </div>
    )
}

export default SkillItem