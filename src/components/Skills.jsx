import { skills } from "../data/data"
import SkillCard from "./shared/SkillCard"

function Skills() {
    return (
        <div className="container px-8 lg:px-20 xl:px-40 py-10 pt-0 mx-auto">
            <div className="flex items-center gap-3">
                <p className="h-[2px] w-full bg-gray-500"></p>
                <p className="text-nowrap font-bold text-lg text-gray-600">Skills</p>
                <p className="h-[2px] w-full bg-gray-500"></p>
            </div>

            <div className="text-gray-700 flex gap-5 flex-wrap justify-center w-full max-w-3xl lg:max-w-4xl mx-auto my-10">
                {
                    skills.map((skill, index) => (
                        <SkillCard key={index} title={skill.title} description={skill.description} logo={skill.logo} />
                    ))
                }

                <div className="border border-gray-300 bg-gray-50 px-5 py-3 w-80 mx-auto">
                    <h1 className="font-medium">Expanding my skillset! More to come...</h1>
                </div>
            </div>
        </div>
    )
}

export default Skills