import "./NavBar.css"
const NavBar = () => {
    return(
        <div className="flex-nav">
            <div>
                <a href="/" className="link">Home</a>
            </div>
            <div>
                <a href="PokeDex" className="link">PokeDex</a>
            </div>
        </div>
    )
}

export default NavBar;