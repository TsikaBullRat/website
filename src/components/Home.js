import Header from './Header'

function Home() {

    return (
        <div>
            <Header />
            <div className="home">
                <div className="banner_text">
                    <h1>Hi this is meant for:</h1>
                    <h3>Anything the owner of this website wishes to say</h3>
                </div>
                <div className="home_button_holder">
                    <button><h4>Donate Now</h4></button>
                    <button><h4>Helping Hand</h4></button>
                    <button><h4>Raised Funds</h4></button>
                </div>
            </div>
        </div>

    );
}

export default Home
