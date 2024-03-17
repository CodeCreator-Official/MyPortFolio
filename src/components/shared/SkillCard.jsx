/* eslint-disable react/prop-types */


function SkillCard({ title, description, logo }) {
    return (
        <div className="border dark:border-gray-800 bg-gray-50 border-gray-300 dark:bg-gray-900 dark:text-gray-400 shadow px-6 py-5 w-full
        max-w-full md:max-w-full xl:max-w-md">
            <div className="flex items-center gap-2">
                <h1 className="font-bold text-xl">{title}</h1>
                <i className={`${logo} text-2xl`}></i>
            </div>
            <p className="mt-2">
                {description}
            </p>
        </div>
    )
}

export default SkillCard