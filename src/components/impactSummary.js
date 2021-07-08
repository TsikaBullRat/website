import { Link } from 'react-router-dom';
import { Headline } from './Headline';

function impactSummary() {
    return (
        <div>
            <Headline headline="Our Impacts" />
            <div className="row justify-content-center my_text_center back mb-5 mx-md-5">
                <div className="col-sm-12 col-lg-3">
                    <h2>We move things</h2>
                    <p>As Life line we make moves to change peoples lives. We want to help people deal with their downfalls to lift them into to joy</p>
                    <Link exact to='/impacts'>
                        <button className="btn ">
                            See the difference
                        </button>
                    </Link>


                </div>
                <div className="row float-right">
                    <div className="text-center col-sm-12 col-lg-4">
                        <br />
                        <i className="bi bi-emoji-smile " style={{ fontSize: 100, padding: 50 }}></i>
                        <h5>300 Souls</h5>
                        <h5>Impacted</h5>
                        <br />
                    </div>

                    <div className="text-center col-sm-12 col-lg-4">
                        <br />
                        <i className="bi bi-check2-circle" style={{ fontSize: 100, padding: 50 }}></i>
                        <h5>300 Projects</h5>
                        <h5>Completed</h5>
                        <br />
                    </div>
                    <div className="text-center col-sm-12 col-lg-4">
                        <br />
                        <i class="bi bi-award" style={{ fontSize: 100, padding: 50 }}></i>
                        <h5>300 Goals</h5>
                        <h5>Achieved</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default impactSummary;