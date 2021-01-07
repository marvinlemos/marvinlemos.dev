import React from 'react'
import { RiGitRepositoryLine } from 'react-icons/ri'
import RepoItem from './Repos'

const Repos = ({user, repos}) => {
    return (
        <div>
            <h3 className='mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 text-orange'>Tech Contributions</h3>
            <p className='text-center'>So far, I have {user.public_repos} public repositories in GitHub <RiGitRepositoryLine className='inline-block' />. Here some of them:</p>
            <div className='md:grid md:grid-cols-3 md:gap-2 md:my-6'>
                {repos.map(repo => {
                    return (
                        <RepoItem key={repo.id} repo={repo} />
                    )
                })}
            </div>
        </div>
    )
}

export default Repos