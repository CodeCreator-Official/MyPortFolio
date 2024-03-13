

function Hero() {
    return (
        <div className="container px-8 lg:px-20 xl:px-40 py-20 flex flex-col md:flex-row items-center justify-between mx-auto h-full max-h-[65%]">

            <img className="w-72 rounded-full mb-16 block md:hidden" src="/profile-logo.jpg" alt="profile-logo" />

            <div className="w-full max-w-md lg:max-w-lg h-full flex flex-col gap-1 justify-center">
                <p className="font-semibold text-xl">Hello, I am</p>
                <h1 className="text-5xl font-extrabold">Sankalp Pimpalkar</h1>
                <p className="text-lg">A Frontend Developer who loves to creates Websites.</p>

                <p className="flex flex-col w-fit text-lg text-gray-500 mt-2">
                    &apos;Design is not just what it looks like and feels like. Design is how it works.&apos;
                    <p className="w-full text-end font-bold text-gray-700">- Steve Jobs</p>
                </p>
            </div>

            <img className="w-60 xl:w-96 rounded-full hidden md:block" src="/public/profile-logo.jpg" alt="profile-logo" />
        </div>
    )
}

export default Hero