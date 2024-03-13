/* eslint-disable react/prop-types */

function ProjectCard({ projectImage, title, name, description, codeURL, visitURL }) {
    return (
        <div className="w-full max-w-sm border border-gray-500">
            <img className="object-cover object-top w-full h-72" src={projectImage} alt="project-image" />

            <div className="px-5 py-4">
                <h1 className="font-bold text-xl">{`${title} (${name})`}</h1>
                <p className="mt-1">
                    {description}
                </p>
            </div>

            <div className="border-t border-gray-600 flex items-center justify-center py-2 divide-x-2 divide-gray-400">
                <a href={codeURL} rel="noreferrer" target="_blank" className="flex items-center gap-2 px-10 hover:text-black text-gray-900">
                    <i className='bx bxl-github text-3xl'></i>
                    <p className="font-bold text-lg text-gray-600">Code</p>
                </a>
                <a href={visitURL} rel="noreferrer" className="flex items-center gap-1 px-10 text-sky-600 hover:text-sky-500">
                    <i className='bx bx-link-alt text-3xl' ></i>
                    <p className="font-bold text-lg text-gray-600">Visit</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard