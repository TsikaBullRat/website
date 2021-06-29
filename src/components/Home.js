import Footer from './Footer'
import Summary from './Summary'
import Smiley from './Smileyfaces'


export const Home = () => {

    return (
        <div>
            <div>

                <div class="jumbotron ">

                    <div style={{ marginTop: '15%' }}>
                        <h1 class="display-4 pt-5 font-weight-bold">Get hope to the hopless</h1>
                        <h3 class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</h3>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Make a difference</a>
                        <a class="btn btn-primary btn-lg ml-3" href="#" role="button">Give a hand</a>
                    </div>



                </div>

            </div>
            <Summary />
            <div className="row">
                <div>
                    <h2>We move things</h2>
                </div>
                <div>
                <p>As Life line we make move to change peoples lives. </p>
                <Smiley className=""/>
                </div>
            </div>
            <Footer />
        </div>

    );
}

/*export default Home*/
