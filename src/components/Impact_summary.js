import { Link } from 'react-router-dom';

function Impact_summary() {
    return (
        <div className="row back">
            <div className="col-sm-12 col-lg-4">
                <h2>We move things</h2>
                <p>As Life line we make moves to change peoples lives. We want to help people deal with their downfalls to lift them into to joy</p>
            </div>
            <div className="col-lg-5 space"></div>
            <div className="float-right col-sm-12 col-lg-3" style={{marginTop:170}}>
                <div className="d-flex ">
                    <div className="text-center">
                        <i className="bi bi-emoji-smile" style={{ color: '#fff', fontSize: 30,padding:50 }}></i>
                        <h5>300</h5>
                        <h5>Souls</h5>
                        <h5>Impacted</h5>
                    </div>
                    <div className="text-center">
                        <i className="bi bi-emoji-sunglasses" style={{ color: '#fff', fontSize: 30,padding:50 }}></i>
                        <h5>300</h5>
                        <h5>Projects</h5>
                        <h5>Completed</h5>
                    </div>
                    <div className="text-center">
                        <i className="bi bi-emoji-laughing" style={{ color: '#fff', fontSize: 30,padding:50 }}></i>
                        <h5>300</h5>
                        <h5>Goals</h5>
                        <h5>Achieved</h5>
                    </div>
                </div>
                <Link exact to='/impacts'>
                    <button className="btn btn-primary">
                        See the difference
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Impact_summary;