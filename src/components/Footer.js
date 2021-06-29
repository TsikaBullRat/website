

function Footer() {

    return (
        <div className="row bg-primary">
            <div className="col-lg-4 col-sm-12">
            <a style={{color:'#fff'}} href="#">Lifeline</a>
            </div>
            <div className="col-lg-4 col-sm-12" style={{color:'#fff'}}>
                <div><i className="bi bi-envelope" style={{color:'#fff',fontSize:24}}></i> Lifeline@gmailcom <br></br></div>
                <div className='Space-around' > <i className="bi bi-telephone" style={{color:'#fff', fontSize:24}}></i> 0530501067  <br></br></div>
                <div className='Space-around'> <i className="bi bi-facebook" style={{color:'#fff',fontSize:24}}></i> https://www.facebook.com <br></br></div>
                <div className='Space-around'> <i className="bi bi-instagram" style={{color:'#fff',fontSize:24}}></i> @Lifeline_nc <br></br></div>
                <div className='Space-around'> <i className="bi bi-geo-alt-fill" style={{color:'#fff',fontSize:24}}></i> 1 Lynch St. Homestead,Kimberley,8301 <br></br></div>
            </div>
            <div className="col-lg-4 col-sm-12" style={{color:'#fff',textDecoration:'underline'}}>
                <p>Info</p>
                <p>Surpport</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
}

export default Footer;