import {Link} from 'react-router-dom';

function Footer() {

    return (
        <div className="row bg-primary">
            <div className="col-lg-4 col-sm-12">
                <a style={{ color: '#fff' }} href="#">Lifeline</a>
            </div>
            <div className="col-lg-4 col-sm-12" style={{ color: '#fff' }}>
                <div><i className="bi bi-envelope" style={{ color: '#fff', fontSize: 24 }}></i> Lifeline@gmailcom <br></br></div>
                <div className='Space-around' > <i className="bi bi-telephone" style={{ color: '#fff', fontSize: 24 }}></i> 0530501067  <br></br></div>
                <div className='Space-around'> <i className="bi bi-facebook" style={{ color: '#fff', fontSize: 24 }}></i> https://www.facebook.com <br></br></div>
                <div className='Space-around'> <i className="bi bi-instagram" style={{ color: '#fff', fontSize: 24 }}></i> @Lifeline_nc <br></br></div>
                <div className='Space-around'> <i className="bi bi-geo-alt-fill" style={{ color: '#fff', fontSize: 24 }}></i> 1 Lynch St. Homestead,Kimberley,8301 <br></br></div>
            </div>
            <div className="col-lg-4 col-sm-12 footer_nav">
                <ul>
                    <li>
                    <Link exact to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link exact to="/impacts">Our Impacts</Link>        
                    </li>
                    <li>
                    <Link exact to="/contacts">Contacts</Link>        
                    </li>
                
                
                
                </ul>
                
            </div>
        </div>
    );
}

export default Footer;