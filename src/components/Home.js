import Footer from './Footer'
import Summary from './Summary'
import ImpactSum from './impactSummary'


export const Home = () => {

    return (
        <div>
            <div>
                <div className="jumbotron">

                    <div style={{ marginTop: '15%' }}>
                        <h1 className="display-4 pt-5 font-weight-bold">Get hope to the hopless</h1>
                        <h3 className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</h3>
                        <a className="btn btn-primary btn-lg ml-3" href="#" role="button">Make a difference</a>
                        <a className="btn btn-primary btn-lg ml-3" href="#" role="button">Give a hand</a>
                    </div>



                </div>

            </div>
            <Summary />
            <ImpactSum/>
            <Footer />
        </div>

    );
}

/*export default Home*/
