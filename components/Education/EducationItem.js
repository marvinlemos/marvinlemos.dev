import React from 'react'

//const EducationItem = (props) => {
//  const {degre} = props
const EducationItem = ({ degree }) => {
    return (
        <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-8 md:mx-0 md:px-12 py-6'>
            <h4 className='text-2xl uppercase font-bold text-orange'>{degree.degree}</h4>
            <p className='text-lg uppercase'>{degree.institution}</p>
            <span className='text-lg normal-case font-bold'>{degree.year}</span>
        </div>
    )
}

export default EducationItem