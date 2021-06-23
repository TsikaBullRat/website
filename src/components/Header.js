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
                <span>About Us</span>
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
    height: 80,
    color: '#fff'
}