import React from 'react'
import getUser from '../utils/getUser'

//const Index = (props) => {
const Index = ({repos, user}) => {    
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl'>Hi, I'm Marvin Lemos</h1>
            <h2 className='font-bold text-3xl'>My Github repositories</h2>
            <p>So far, I have {user.public_repos} public repos. Here some of them:</p>
            {repos.map(repo => {
                return (
                    <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>Language: {repo.language} / Starts: {repo.stargazers_count}</p>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context) {

    const {repos, user} = await getUser('marvinlemos')

    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index