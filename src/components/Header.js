function Header() {

    return (
        <div style={header}>
            <div style={{ display: 'flex' }}>
                <div>
                    <h2>Lifeline</h2>
                </div>
            </div>
            <div className="links">
                <span>Home</span>
               <a><span>About Us</span></a>
                <span>Our Impacts</span>
                <span>Conatcts</span>
            </div>
        </div>
    );
}

export default Header

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#03adfc',
    height: 80
}