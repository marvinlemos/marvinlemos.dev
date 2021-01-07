import React from 'react'
import ContatctMe from './ContactMe'

const Hero = () => {
    return (
        <div className='pt-14 md:grid md:grid-cols-2 md:pt-10 leading-none'>
            <div className='pt-16 md:pt-32'>
                <h1 className='text-4xl uppercase pl-16'>Hi, I'm Marvin Lemos</h1>
                <h2 className='text-4xl font-bold md:text-5xl uppercase pl-16'>Software engineer</h2>
                <ContatctMe />
            </div>
            <div>
                <br />  
                {/*<img src='/images/cover.png' /> */}
            </div>
        </div>
    )
}

export default Hero

