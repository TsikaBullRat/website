

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="#">Lifeline</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">About Us</a>
                    <a className="nav-link" href="#">Our Impacts</a>
                    <a className="nav-link" href="#">Contacts</a>
                </div>
            </div>
        </nav>
    );
}

export default Header
/* aria-controls="Content" aria-expand="false" aria-label="Toggle navigation"*/