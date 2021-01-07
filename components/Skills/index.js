import React from 'react'
import SkillItem from './SkillItem'

const skills = [
    {
        name: 'R',
        grade: 'Excelent'
    },
    {
        name: 'Python',
        grade: 'Good'
    },
    {
        name: 'Java',
        grade: 'Very Good'
    },
    {
        name: 'Machine Learning',
        grade: 'Excelent'
    },
    {
        name: 'Data Science',
        grade: 'Excelent'
    },
    {
        name: 'NodeJs',
        grade: 'Very Good'
    }
]

const Skills = () => {
    return (
        <div className='mt-10'>
            <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>Technical Skills</h3>
            <div className='mx-8 md:mx-0 md:grid md:grid-cols-6 leading-none bg-white rounded shadow-lg'>
                {
                    skills.map((skill, i) => (
                        <SkillItem key={'i' + 1} skill={skill} />
                    ))
                }
            </div>
        </div>
    )
}

export default Skills