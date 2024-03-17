/* eslint-disable react/prop-types */

import { useState } from "react"

function MenuBar({ classname = "" }) {

    const [darktheme, setDarktheme] = useState(false)

    function HandleClick() {
        const html = document.getElementById('html')
        if (!darktheme) {
            html.classList.replace('light', 'dark')
        } else {
            html.classList.replace('dark', 'light')
        }
        setDarktheme(!darktheme)
    }

    return (
        <div className={`block md:hidden ${classname}`} onClick={HandleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
        </div>
    )
}

export default MenuBar