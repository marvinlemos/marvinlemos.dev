import React from 'react'
import EducationItem from './EducationItem'

const degress = [
    {
        degree: 'Ph.D in Applied Informatics',
        institution: 'University of Fortaleza',
        year: 2019
    },
    {
        degree: 'Master in Applied Informatics',
        institution: 'University of Fortaleza',
        year: 2010
    }
]
const Education = () => {
    return (
        <div className='mt-10'>
            <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>My Education</h3>
            <div className='mx-8 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded shadow-lg'>
                {
                    degress.map((degree, i) => (
                        <EducationItem key={'i' + i} degree={degree}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Education