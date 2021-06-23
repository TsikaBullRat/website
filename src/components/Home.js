import Header from './Header';


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
                    <button className="btn btn-primary">Donate Now</button>
                    <button className="btn btn-primary">Helping Hand</button>
                    <button className="btn btn-primary">Raised Funds</button>
                </div>
            </div>
        </div>

    );
}

export default Home
