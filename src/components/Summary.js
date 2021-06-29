import { Link } from 'react-router-dom';
import { Points } from './Points'

function Summary() {
    return (
        <div className="container-fluid">
            <div className="row mb-4 ml-5 mr-5">

                <div className="col-sm-12 col-lg-6 text-center mb-5">
                    <h3>What we're about</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc. Vulputate odio ut enim blandit volutpat. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Sapien eget mi proin sed libero enim sed. Eget nulla facilisi etiam dignissim diam. Tincidunt id aliquet risus feugiat in ante metus dictum at. Tincidunt id aliquet risus feugiat. Amet nulla facilisi morbi tempus iaculis urna. Enim diam vulputate ut pharetra sit. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Pretium aenean pharetra magna ac. Viverra maecenas accumsan lacus vel. Congue quisque egestas diam in arcu. Interdum velit euismod in pellentesque massa placerat duis. At in tellus integer feugiat scelerisque. Augue mauris augue neque gravida in fermentum.</p>
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