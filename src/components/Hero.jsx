

function Hero() {
    return (
        <div className="hero-section">

            <img className="w-60 h-60 rounded-full mb-16 hidden dark:block dark:md:hidden outline-dashed border-8 border-black" src="/dark-hero.jpg" alt="profile-logo" />

            <img className="w-60 h-60 rounded-full mb-16 dark:hidden md:hidden " src="/dark-hero.jpg" alt="profile-logo" />

            <div className="w-full max-w-full md:max-w-md lg:max-w-lg h-full flex flex-col gap-1 justify-center">
                <p className="paragraph-small">Hello, I am</p>
                <h1 className="heading-primary">Sankalp Pimpalkar</h1>
                <p className="paragraph-medium mt-2 max-w-md">
                    I bring websites to life, weaving creativity with technical expertise to craft user-friendly experiences.
                </p>

                <div className="mt-1 py-3 flex flex-wrap gap-3">
                    <button className="button-filled">Hire Me!</button>

                    <a className="button-ghost">Download my CV</a>
                </div>
            </div>

            <img className="w-60 h-60 xl:w-96 rounded-full hidden md:block dark:hidden" src="/dark-hero.jpg" alt="profile-logo" />

            <img className="w-60 h-60 xl:w-80 outline-dashed border-8 border-black rounded-full hidden md:dark:block" src="/dark-hero.jpg" alt="profile-logo" />
        </div>
    )
}

export default Hero
