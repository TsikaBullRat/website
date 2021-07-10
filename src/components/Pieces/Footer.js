import { Link } from 'react-router-dom';

function Footer() {

    return (

        <div className=" row footer">
            <div className="col-sm-12 ml-4 mt-4" style={{ color: '#fff' }}>
                <div><i className="bi bi-envelope" style={{ color: '#fff', fontSize: 24 }}></i>Email<br></br></div>
                <div className='Space-around' > <i className="bi bi-telephone" style={{ color: '#fff', fontSize: 24 }}></i>Phone<br></br></div>
                <div className='Space-around'> <i className="bi bi-geo-alt-fill" style={{ color: '#fff', fontSize: 24 }}></i>Address<br></br></div>
                <br />
            </div>
        </div>
    );
}

export default Footer;