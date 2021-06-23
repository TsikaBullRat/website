import Header from './Header'

function Home(){

    return(
        <div className="home">
            <Header/>
            <div className="banner_text">
                <h2>Hi this is meant for:</h2>
                <p>Anything the owner of this website wishes to say</p>
            </div>
        </div>
    );
}

export default Home
