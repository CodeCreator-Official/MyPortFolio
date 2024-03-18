/* eslint-disable react/prop-types */


function SkillCard({ title, description, logo }) {
    return (
        <div className="border dark:border-gray-800 bg-gray-50 border-gray-300/60 dark:bg-gray-900 dark:text-gray-400 px-6 py-5 w-full
        min-w-[48%] md:max-w-full lg:max-w-sm">
            <div className="flex items-center gap-2">
                <h1 className="font-bold text-xl">{title}</h1>
                <i className={`${logo} text-2xl`}></i>
            </div>
            <p className="mt-2 w-full max-w-lg">
                {description}
            </p>
        </div>
    )
}

export default SkillCard