import MenuBar from "./shared/MenuBar"


function Navbar() {
    return (
        <nav className="nav sticky top-0">
            <div className="nav-container">
                <h1 className="font-extrabold text-2xl">{'</>'}</h1>

                <ul className="nav-list">
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