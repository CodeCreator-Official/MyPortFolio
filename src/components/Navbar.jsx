import MenuBar from "./shared/MenuBar"


function Navbar() {
    return (
        <nav className="bg-gray-300 w-full">
            <div className="container mx-auto flex items-center justify-between py-3 px-8 lg:px-20 xl:px-40">
                <h1 className="font-extrabold text-2xl">{'</>'}</h1>

                <ul className="hidden md:flex gap-6 text-gray-700">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Projects</li>
                    <li>Experience</li>
                </ul>

                <MenuBar />
            </div>
        </nav>
    )
}

export default Navbar