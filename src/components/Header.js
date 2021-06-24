

function Header() {

    return (
        <div className="header navbar navbar-expand-lg">
            <h2>Lifeline</h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Content">
                <span className="nav-toggler-icon"></span>
            </button>
            <div className="links" id="Content">
                <span className="nav-item">
                    <a className="nav-link">Home</a>
                </span>
                <span className="nav-item">
                    <a nav-link>About Us</a>
                </span>
                <span className="nav-item">
                    <a nav-link>Our Impacts</a>
                </span>
                <span className="nav-item">
                    <a nav-link>Conatcts</a>
                </span>
            </div>
        </div>
    );
}

export default Header
/* aria-controls="Content" aria-expand="false" aria-label="Toggle navigation"*/