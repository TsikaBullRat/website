import { Link } from 'react-router-dom';
import {Headline} from './Headline';

function impactSummary() {
    return (
        <div>
            <Headline headline={"Our Impacts"}/>
            <div className="row justify-content-center mb-5" style={{color:'#000'}}>
            <div className="col-sm-12 col-lg-3 ml-5">
                <h2>We move things</h2>
                <p>As Life line we make moves to change peoples lives. We want to help people deal with their downfalls to lift them into to joy</p>
                <Link exact to='/impacts'>
                    <button className="btn btn-primary">
                        See the difference
                    </button>
                </Link>

            </div>
            <div className="row float-right">
                
                    <div className="text-center col-sm-12 col-lg-4">
                        <i className="bi bi-emoji-smile " style={{ color: 'black', fontSize: 30,padding:50 }}></i>
                        <h5>300</h5>
                        <h5>Souls</h5>
                        <h5>Impacted</h5>
                    </div>
                    <div className="text-center col-sm-12 col-lg-4">
                        <i className="bi bi-emoji-sunglasses " style={{ color: 'black', fontSize: 30,padding:50 }}></i>
                        <h5>300</h5>
                        <h5>Projects</h5>
                        <h5>Completed</h5>
                    </div>
                    <div className="text-center col-sm-12 col-lg-4">
                        <i className="bi bi-emoji-laughing " style={{ color: 'black', fontSize: 30,padding:50 }}></i>
                        <h5>300</h5>
                        <h5>Goals</h5>
                        <h5>Achieved</h5>
                    </div>
                </div>
            </div>
            
                
        </div>
    )
}

export default impactSummary;