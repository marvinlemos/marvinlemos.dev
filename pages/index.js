import React from 'react'
import getUser from '../utils/getUser'
import { RiGitRepositoryLine } from 'react-icons/ri'
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';

//const Index = (props) => {
const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto bg-network'>
            <PageHead />
            
            <Hero />

            <div className='bg-white rounded shadow-lg py-12 px-8 md:mt-6 mx-8 md:mx-0 md:px-16'>
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
                <div className='mx-8 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded shadow-lg'>
                    <div className='px-6 mx-8 md:mx-0 md:px-12 py-6'>
                        <h4 className='text-2xl uppercase font-bold text-orange'>Ph.D in Applied Informatics</h4>
                        <p className='text-lg uppercase'>University of Fortaleza</p>
                        <span className='text-lg normal-case font-bold'>2019</span>
                    </div>
                    <div className='border-dashed border-t md:border-t-0 md:border-l-2 px-6 mx-6 md:mx-0 md:px-12 py-6'>
                        <h4 className='text-2xl uppercase font-bold text-orange'>Master in Applied Informatics</h4>
                        <p className='text-lg uppercase'>University of Fortaleza</p>
                        <span className='text-lg normal-case font-bold'>2010</span>
                    </div>
                </div>
            </div>


            <div className='mt-10'>
                <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>Technical Skills</h3>
                <div className='mx-8 md:mx-0 md:grid md:grid-cols-6 leading-none bg-white rounded shadow-lg'>
                    <div className='px-6 mx-8 md:mx-0 md:px-8 py-6'>
                        <h4 className='text-1xl uppercase font-bold text-orange'>R</h4>
                        <p className='text-base'>Excelent</p>
                        <span className='text-lg normal-case font-bold'></span>
                    </div>
                    <div className='border-dashed border-t md:border-t-0 md:border-l-2  px-6 mx-8 md:mx-0 md:px-8 py-6'>
                        <h4 className='text-1xl uppercase font-bold text-orange'>Python</h4>
                        <p className='text-base'>Good</p>
                        <span className='text-lg normal-case font-bold'></span>
                    </div>
                    <div className='border-dashed border-t md:border-t-0 md:border-l-2  px-6 mx-8 md:mx-0 md:px-8 py-6'>
                        <h4 className='text-1xl uppercase font-bold text-orange'>Java</h4>
                        <p className='text-base'>Very Good</p>
                        <span className='text-lg normal-case font-bold'></span>
                    </div>
                    <div className='border-dashed border-t md:border-t-0 md:border-l-2  px-6 mx-8 md:mx-0 md:px-8 py-6'>
                        <h4 className='text-1xl uppercase font-bold text-orange'>Machine Learning</h4>
                        <p className='text-base'>Excelent</p>
                        <span className='text-lg normal-case font-bold'></span>
                    </div>
                    <div className='border-dashed border-t md:border-t-0 md:border-l-2  px-6 mx-8 md:mx-0 md:px-8 py-6'>
                        <h4 className='text-1xl uppercase font-bold text-orange'>Data Science</h4>
                        <p className='text-base'>Excelent</p>
                        <span className='text-lg normal-case font-bold'></span>
                    </div>
                    <div className='border-dashed border-t md:border-t-0 md:border-l-2  px-6 mx-8 md:mx-0 md:px-8 py-6'>
                        <h4 className='text-1xl uppercase font-bold text-orange'>NodeJS</h4>
                        <p className='text-base'>Very Good</p>
                        <span className='text-lg normal-case font-bold'></span>
                    </div>
                </div>
            </div>


            <div>
                <h3 className='mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 text-orange'>Tech Contributions</h3>
                <p className='text-center'>So far, I have {user.public_repos} public repositories in GitHub <RiGitRepositoryLine className='inline-block' />. Here some of them:</p>
                <div className='md:grid md:grid-cols-3 md:gap-2 md:my-6'>
                    {repos.map(repo => {
                        return (
                            <div key={repo.id} className='my-3 md:my-0 rounded bg-white p-4 hover:shadow-lg'>
                                <h3 className='text-lg font-bold hover:underline'> <a href={'https://github.com/' + repo.full_name}>{repo.name}</a></h3>
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