function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="left">
                    <h1>Investo</h1>

                </div>
                <div className="mid">
                    <a href="#">Home</a>
                    <a href="#baner">How it works</a>
                    <a href="#project">Projects</a>
                    <a href="#about">About Us</a>

                </div>
                <div className="right">
                    <a href="#footer">Contact Us</a>
                    <button>
                        Sign up
                    </button>

                </div>

            </div>
            <div className="nav-res">
                <div className="nav-show">
                    <h1>Investo</h1>
                    <img alt="" onClick={show} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"></img>


                </div>

            </div>
            <div className="nav-hide" >
                <a href="#" onClick={show}>Home</a>
                <a href="#baner" onClick={show}>How it works</a>
                <a href="#project" onClick={show}>Projects</a>
                <a href="#about" onClick={show}>About Us</a>
                <a href="#footer" onClick={show}>Contact Us</a>
                <button onClick={show}>
                    Sign up
                </button>

            </div>


        </>
    )
}
function show() {
    document.querySelector(".nav-hide").classList.toggle('show');
}
export default Navbar