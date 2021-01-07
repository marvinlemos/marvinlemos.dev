import React from 'react'

const RepoItem = ({ repo }) => {
    return (
        <div className='my-3 md:my-0 rounded bg-white p-4 hover:shadow-lg'>
            <h3 className='text-lg font-bold hover:underline'> <a href={'https://github.com/' + repo.full_name}>{repo.name}</a></h3>
            <p>Language: {repo.language} {/* <GoStar className='inline-block' />Starts: {repo.stargazers_count} */}</p>
            <p className='border-t-2 pt-2 font-light hover:bg-gray-100'>{repo.description}</p>
        </div>
    )
}

export default RepoItem