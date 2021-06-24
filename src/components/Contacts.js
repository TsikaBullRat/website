import Header from "../components/Header"

function Contacts() {
    return (
        <div>

            <Header />

            <div className="row">
 
                <div className="col-6 ">

                    <div className="logos">
                        <div>
                            <div><i className="bi bi-envelope"></i> Lifeline@gmailcom <br></br></div>
                            <div className='Space-around'> <i className="bi bi-telephone"></i> 0530501067  <br></br></div>
                            <div className='Space-around'> <i className="bi bi-facebook"></i> https://www.facebook.com <br></br></div>
                            <div className='Space-around'> <i className="bi bi-instagram"></i> @Lifeline_nc <br></br></div>
                            <div className='Space-around'> <i className="bi bi-geo-alt-fill"></i> 1 Lynch St. Homestead,Kimberley,8301 <br></br></div>
                        </div>

                    </div>


                </div>

                <div className="col-6">
                    <div className="mt-5">
                        <input type="email" placeholder="Email" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" /> <br></br>
                        <input type="text" placeholder="Subject" className="form-control w-50 mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" /> <br></br>
                        <textarea className="form control w-50 mt-3" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea> <br></br>
                        <button id="btn-send" type="button" className="btn btn-primary">send</button> <br></br>

                    </div>
                    <div>

                    </div>
                </div>

            </div>





        </div>
    )
}

export default Contacts
