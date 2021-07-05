import { Link } from 'react-router-dom';

function Footer() {

    return (

        <div className="row bg-primary">
            <div className="col-lg-4 col-sm-12" style={{ color: '#fff' }}>
                <div><i className="bi bi-envelope" style={{ color: '#fff', fontSize: 24 }}></i> Lifeline@gmailcom <br></br></div>
                <div className='Space-around' > <i className="bi bi-telephone" style={{ color: '#fff', fontSize: 24 }}></i> 0530501067  <br></br></div>
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

                {/*<div style={{ background: 'black', color: 'white', fontSize: 10, width: 'auto', marginBottom: -15 }}>
                    <div className='d-flex'>
                        <a> <i className="bi bi-facebook" style={{ color: '#fff', fontSize: 20, marginRight: 10 }}></i></a>
                        <a> <i className="bi bi-instagram" style={{ color: '#fff', fontSize: 20 }}></i></a>
                    </div>
                    <div style={{ marginRight: 10 }}>
                        <p>Copyrights: <b>Mlabs South Africa,</b> All rights reserved<br />Developed By: Keahara van Blerk and Ntsikayomzi Ngcakani</p>
                    </div>

                </div>*/}

            </div>
        </div>
    );
}

export default Footer;