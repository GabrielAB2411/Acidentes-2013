import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

type ProfileProps = {
    role: string
    name: string,
    imgUrl: string,
    linkedinUrl?: string,
    githubUrl?: string,
}

export default function Profile({name, imgUrl, role, linkedinUrl, githubUrl}: ProfileProps) {
    return (
        <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={imgUrl} alt={name} />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
                <a href={linkedinUrl} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><LinkedinLogo size={20}/></a>
                <a href={githubUrl} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><GithubLogo size={20}/></a>
            </div>
        </div>
    )
}