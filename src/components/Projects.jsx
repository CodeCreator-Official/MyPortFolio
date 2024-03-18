import { projectData } from "../data/data"
import ProjectCard from "./shared/ProjectCard"

function Projects() {
    return (
        <div className="container px-5 lg:px-20 xl:px-40 py-10 pt-0 mx-auto">
            <div className="flex items-center gap-3">
                <p className="h-[2px] w-full bg-gray-500"></p>
                <p className="text-nowrap font-bold text-lg text-gray-600">Projects</p>
                <p className="h-[2px] w-full bg-gray-500"></p>
            </div>

            <div className="text-gray-700 flex gap-5 flex-wrap justify-center w-full max-w-3xl lg:max-w-4xl mx-auto my-10">
                {
                    projectData.map((project) => (
                        <ProjectCard key={project.id} projectImage={project.projectImage} name={project.name} title={project.title} description={project.description} codeURL={project.codeURL} visitURL={project.visitURL} />
                    ))
                }
            </div>
            <div className="border border-gray-300 bg-gray-50 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-900 px-5 py-3 w-80 mx-auto">
                <h1 className="font-medium">Projects are coming soon...</h1>
            </div>
        </div>
    )
}

export default Projects