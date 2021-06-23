import Header from './Header'

function Home(){

    return(
        <div className="home">
            <Header/>
            <div className="banner_text">
                <h2>Hi this is meant for:</h2>
                <p>Anything the owner of this website wishes to say</p>
            </div>
            <div className="home_button_holder">
                <button>Donate Now</button>
                <button>Helping Hand</button>
                <button>Raised Funds</button>
            </div>
        </div>
    );
}

export default Home
