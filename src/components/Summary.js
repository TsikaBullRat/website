import { Link } from 'react-router-dom';
import {Headline} from './Headline';

function Summary() {
    return (
        <div className="container-fluid">
            <Headline headline={"About Us"}/>
            
            <div className="row justify-content-center mb-5">
                <div className="col-sm-12 col-lg-4 text-center">
                    <h3>What we're about</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ....</p>
                    <Link exact to="/about">
                        <button className="btn btn-primary">Want to know more</button>
                    </Link>
                </div>
                <div className="col-sm-12 col-lg-6  text-center" >
                <h3>Our Mission</h3>
                    <ul>
                        <div className="list_repsonder">
                        <li>
                            To assist those with depression
                        </li>
                        <hr />
                        </div>
                        <div className="list_repsonder">
                        <li>
                        To help those in bad situations out of them
                        </li>
                        <hr />
                        </div>
                        <div className="list_repsonder">
                        <li>
                        To give you someone to talk to
                        </li>
                        <hr />
                        </div>
                        
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Summary;