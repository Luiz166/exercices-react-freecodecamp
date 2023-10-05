import logo from "../images/react-icon.png";

const Nav = () => {
    return (
        <nav className="Navbar">
            <div className="Separeted">
                <img src={logo} alt="logo" />
                <h2>ReactFacts</h2>
            </div>
            <div className="Separeted">
                <span>React Course - Project 1</span>
            </div>
        </nav>
    )
}

export default Nav;