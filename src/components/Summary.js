import { Link } from 'react-router-dom';

function Summary() {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-5 mb-3">
                <h3>What we're about</h3>
            </div>
            <div className="row mb-4 justify-content-center">

                <div className="col-lg-2">
                    <div className="bg-primary deco_box_home"></div>
                </div>
                <div className="col-lg-6">

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam donec adipiscing tristique risus. A lacus vestibulum sed arcu non odio euismod lacinia. Aliquam etiam erat velit scelerisque. A iaculis at erat pellentesque adipiscing. Tellus in metus vulputate eu scelerisque felis. Non pulvinar neque laoreet suspendisse interdum. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Morbi blandit cursus risus at. Elementum eu facilisis sed odio morbi quis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.</p>
                    <Link exact to="/about">
                        <button className="btn btn-primary">Want to know more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Summary;