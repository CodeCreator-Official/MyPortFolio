import { useState } from "react"
import MenuBar from "./shared/MenuBar"


function Navbar() {


    const [darktheme, setDarktheme] = useState(false)
    const [floatDiv, setFloatDiv] = useState(false)

    function HandleClick() {
        const html = document.getElementById('html')
        if (!darktheme) {
            html.classList.replace('light', 'dark')
        } else {
            html.classList.replace('dark', 'light')
        }
        setDarktheme(!darktheme)
    }

    function HandleFloatDiv() {
        setFloatDiv(!floatDiv)
    }

    return (
        <nav className="nav sticky top-0">
            <div className="nav-container relative">
                <h1 className="font-extrabold text-2xl">{'</>'}</h1>

                <ul className="nav-list">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Projects</li>
                    <li>Experience</li>
                </ul>

                <MenuBar onClick={HandleFloatDiv} />

                <ul className={`absolute w-40 dark:bg-gray-900/95 right-5 top-16 rounded-md px-2 border dark:border-gray-800 border-gray-400/20 bg-gray-300 md:hidden ${floatDiv ? 'block' : 'hidden'}`}>
                    <li className="flex items-center gap-3 px-2 py-3 text-gray-700 dark:text-gray-400 border-b border-gray-400" onClick={HandleClick}>
                        {
                            darktheme ?
                                (<i className='bx bx-sun text-lg' ></i>) :
                                (<i className='bx bx-moon text-lg'></i>)
                        }
                        <h2 className="text-base font-medium">
                            {darktheme ? 'Light Mode' : 'Dark Mode'}
                        </h2>
                    </li>

                    <div className="flex flex-col gap-3 py-3 px-3">
                        <li className="text-gray-700 dark:text-gray-400">
                            <h2 className="text-lg font-medium">
                                About
                            </h2>
                        </li>
                        <li className="text-gray-700 dark:text-gray-400">
                            <h2 className="text-lg font-medium">
                                Contact
                            </h2>
                        </li>
                        <li className="text-gray-700 dark:text-gray-400">
                            <h2 className="text-lg font-medium">
                                Projects
                            </h2>
                        </li>
                        <li className="text-gray-700 dark:text-gray-400">
                            <h2 className="text-lg font-medium">
                                Experience
                            </h2>
                        </li>
                    </div>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar