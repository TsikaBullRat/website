import { Link } from 'react-router-dom';
import { Headline } from './Headline';

function Summary() {
    return (
        <div>
            <Headline headline="About Us" />

            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6 text-center ml-lg-5 mini_about_box">
                    <h3>What we're about</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ....</p>
                    <Link exact to="/about">
                        <button className="btn">Want to know more</button>
                    </Link>
                </div>
                <div className="col-sm-12 col-lg-6  text-center mini_about_box" >
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
                <div className="col-sm-12 col-lg-6  text-center mini_about_box" >
                    <h3>Vision</h3>
                    <ul>
                        <div className="list_vision">
                            <li>
                                Help those in need
                            </li>
                            <hr />
                        </div>
                        <div className="list_vision">
                            <li>
                                Assist the needy in all ways possible
                            </li>
                            <hr />
                        </div>
                        <div className="list_vision">
                            <li>
                                Have an exciting statement to say to the people
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