import { Link } from 'react-router-dom';
import { Headline } from './Headline';

function Summary() {
    return (
        <div>
            <Headline headline="About Us" />

            <div className="row ">
                <div className="col-sm-12 col-lg-12 text-center ml-lg-5 mini_about_box">
                    <h3>What we're about</h3>
                    <p>The ROTO Centre was established as a non profit organization in 2016 when Mpho Matthews, the founder, joined up with other individuals wanting to create a safe place with educational activities and support services that would cater to the specific needs of special needs children. The need for such an organization was realized through the founder’s own personal experience of having a child that has special needs. To date, ROTO is the only special needs day care centre in Barkley West, serving more than 20 families each day between Monday to Saturday with a variety of programs and services.
                    </p>
                    <Link exact to="/about">
                        <button className="btn">Want to know more</button>
                    </Link>
                </div>
                <div className="col-sm-12 col-lg-4  text-center mini_about_box" >
                    <h3>Our Mission</h3>
                    <ul>
                        <div className="list_repsonder">
                            <li>
                                Promote dignity and self-esteem
                            </li>
                            <hr />
                        </div>
                        <div className="list_repsonder">
                            <li>
                                Foster Independence and self-determination
                            </li>
                            <hr />
                        </div>
                        <div className="list_repsonder">
                            <li>
                                Facilitate social interaction and involvement in
                                community life

                            </li>
                            <hr />
                        </div>

                        <div className="list_repsonder">
                            <li>
                            Dispel stereotypes and myths about special  
needs


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