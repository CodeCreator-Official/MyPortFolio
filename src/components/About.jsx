

function About() {
    return (
        <div className="container px-8 lg:px-20 xl:px-40 py-10 mx-auto">
            <div className="flex items-center gap-3">
                <p className="h-[2px] w-full bg-gray-500"></p>
                <p className="text-nowrap font-bold text-lg text-gray-600">About Me</p>
                <p className="h-[2px] w-full bg-gray-500"></p>
            </div>

            <div className="bg-gray-50 text-gray-700 w-full max-w-3xl lg:max-w-4xl     mx-auto px-10 py-8 my-10">
                <i className='bx bxs-quote-left text-4xl py-4 lg:pt-1'></i>

                <p className="text-xl tracking-wide leading-8">
                    Hey there, I&apos;m Sankalp Pimpalkar from Navi Mumbai! Currently in my second year of Mechatronics Engineering at Terna Engineering College. I&apos;ve been diving into frontend development for two years now, absolutely loving the process of creating awesome websites. I&apos;ve worked on several projects that have fueled my passion even more. 
                    <br /><br />
                    Let&apos;s chat and explore the exciting world of web development together!🤩🤩
                </p>
            </div>
        </div>
    )
}

export default About