import React from 'react'
import Head from 'next/head'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoStar } from 'react-icons/go'

//const Index = (props) => {
const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto bg-network'>
            <Head>
                <title>Marvin Lemos - Software and Machine Learning Engineer</title>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <div className='grid grid-cols-2 pt-16 leading-none'>
                <div className='pt-32'>
                    <h1 className='text-4xl uppercase pl-16'>Hi, I'm Marvin Lemos</h1>
                    <h2 className='font-bold text-5xl uppercase pl-16'>Software engineer</h2>
                    <div className='relative border-orange border rounded px-16 pb-4 pt-10 mt-6 '>
                        <h3 className='absolute bg-orange text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contact Me</h3>
                        <p>
                            <FaLinkedin className='text-6xl inline-block mr-6' />
                            <FaGithub className='text-6xl inline-block mr-6' />
                            <FiLink className='text-6xl inline-block mr-6' />
                            <br />
                            <span className=' inline-block pt-4'>or drop a line: marvinlemos@gmail.com</span>
                        </p>
                    </div>
                </div>
                <div>
                    <img src='/images/cover.png' />
                </div>
            </div>

            <div className='bg-white rounded shadow-lg py-12 px-16'>
                <h3 className='text-4xl text-center text-orange'>What I do</h3>
                <p className='text-2xl'>Software and Machine Learning engineer with Ph.D. in computer science and
                10+ years of experience in applying technology to solve real-world problems.
                I am passionate about cutting-edge technology and I am currently seeking an environment
                where I could explore the boundaries of Machine Learning by developing new products and technology.
                I´m an expert in Python, Java, R, and SQL programming and I also have excellent oral and
                writing communication skills, as a result of my experience in teaching, researching,
                and supervising students and interns -  this makes me a good fit for positions
                that combine tech with researching skills</p>
            </div>

            <div className='mt-10'>
                <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>My Education</h3>
                <div className='grid grid-cols-2 leading-none bg-white rounded shadow-lg py-12 '>
                    <div className='px-12'>
                        <h4 className='text-2xl uppercase font-bold text-orange'>Ph.D in Applied Informatics</h4>
                        <p className='text-lg uppercase'>University of Fortaleza</p>
                        <span className='text-lg normal-case font-bold'>2019</span>
                    </div>
                    <div className='border-dashed border-l-2 px-12'>
                        <h4 className='text-2xl uppercase font-bold text-orange'>Master in Applied Informatics</h4>
                        <p className='text-lg uppercase'>University of Fortaleza</p>
                        <span className='text-lg normal-case font-bold'>2010</span>
                    </div>
                </div>

            </div>

            <div>
                <h3 className='text-4xl font-bold text-center uppercase mt-10 text-orange'>Tech Contributions</h3>
                <p className='text-center'>So far, I have {user.public_repos} public repositories in GitHub <RiGitRepositoryLine className='inline-block' />. Here some of them:</p>
                <div className='grid grid-cols-3 gap-2 my-6'>
                    {repos.map(repo => {
                        return (
                            <div key={repo.id} className='rounded bg-white p-4 hover:shadow-lg'>
                                <h3 className='text-lg font-bold hover:underline'> <a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
                                <p>Language: {repo.language} {/* <GoStar className='inline-block' />Starts: {repo.stargazers_count} */}</p>
                                <p className='border-t-2 pt-2 font-light hover:bg-gray-100'>{repo.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <p className='text-center my-8 py-4 border-t-2'>
                    You can find the source-code of this website here:
                    <br/>
                    <a href='https://github.com/marvinlemos/marvinlemos.dev'>https://github.com/marvinlemos/marvinlemos.dev</a>
                </p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {

    const { repos, user } = await getUser('marvinlemos')

    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index