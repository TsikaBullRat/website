import { Link } from 'react-router-dom';
import { Points } from './Points'

function Summary() {
    return (
        <div className="container-fluid">
            <div className="row mb-4 ml-5 mr-5">

                <div className="col-sm-12 col-lg-4 text-center mb-5">
                    <h3>What we're about</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ....</p>
                    <Link exact to="/about">
                        <button className="btn btn-primary">Want to know more</button>
                    </Link>
                </div>
                <ul className="col-sm-12 col-lg-6 text-center">
                    <h3>Our Mission</h3>
                    <li>
                        To assist those with depression
                    </li>
                    <hr />
                    <li>
                        To help those in bad situations out of them
                    </li>
                    <hr />
                    <li>
                        To give you someone to talk to
                    </li>
                    <hr />
                </ul>
            </div>
        </div>
    )
}

export default Summary;