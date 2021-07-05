import { Link } from 'react-router-dom';

function Footer() {

    return (

        <div className=" row bg-primary mt-5">

            <div className="col-lg-4 col-sm-12 footer_nav"></div>


            <div className="col-lg-4 col-sm-12 " style={{ color: '#fff' }}>
                <div><i className="bi bi-envelope" style={{ color: '#fff', fontSize: 24 }}></i> Lifeline@gmailcom <br></br></div>
                <div className='Space-around' > <i className="bi bi-telephone" style={{ color: '#fff', fontSize: 24 }}></i> 0530501067 <br></br></div>
                <div className='Space-around'> <i className="bi bi-geo-alt-fill" style={{ color: '#fff', fontSize: 24 }}></i> 1 Lynch St. Homestead,Kimberley,8301 <br></br></div>
                <br />
            </div>

            <div className="col-lg-4 col-sm-12 footer_nav">
                <ul>

                    <li>
                        <Link exact to="/about">About Us</Link>
                    </li>
                    <br />
                    <li>
                        <Link exact to="/impacts">Our Impacts</Link>
                    </li>
                    <br />
                    <li>
                        <Link exact to="/contacts">Contacts</Link>
                    </li>
                    <br />
                </ul>



            </div>
        </div>
    );
}

export default Footer;