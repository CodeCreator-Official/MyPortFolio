import { useEffect, useRef, useState } from "react"
import MenuBar from "./shared/MenuBar"
import Typewriter from "typewriter-effect"


function Navbar() {


    const [darktheme, setDarktheme] = useState(false)
    const [floatDiv, setFloatDiv] = useState(false)
    const dialogueRef = useRef(null)

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
        
        console.log(floatDiv)
        setFloatDiv(!floatDiv)
    }
    useEffect(() => {
        function handleClickOutside(event) {
            // Close floatDiv only if it's currently open (floatDiv) and clicked outside (not dialogueRef)
            if (floatDiv && dialogueRef.current && !dialogueRef.current.contains(event.target)) {
                setFloatDiv(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [floatDiv]); // Add floatDiv to the dependency array


    return (
        <nav className="nav sticky top-0">
            <div className="nav-container relative">
                <h1 className="font-medium text-gray-700 dark:text-gray-300 text-2xl">
                    <Typewriter
                        options={{
                            strings: ['</>'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>

                <ul className="nav-list">
                    <li className="text-gray-500 hover:text-gray-700 font-medium">About</li>
                    <li className="text-gray-500 hover:text-gray-700 font-medium">Contact</li>
                    <li className="text-gray-500 hover:text-gray-700 font-medium">Projects</li>
                    <li className="text-gray-500 hover:text-gray-700 font-medium">Experience</li>
                </ul>

                <MenuBar onClick={HandleFloatDiv} />

                <ul ref={dialogueRef} className={`absolute w-40 dark:bg-gray-900/95 right-5 top-16 rounded-md px-2 border dark:border-gray-800 border-gray-400/20 bg-gray-300/60 md:hidden ${floatDiv ? 'block' : 'hidden'} z-50`}>
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