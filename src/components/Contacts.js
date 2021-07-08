import { Headline } from './Headline';
import Footer from './Footer';
import Header from './Header'

export const Contacts = () => (
    <div>
        <Header/>

        <div> <Headline headline="Get in touch" />

            <p className="text-center">Please give us a call, drop us an email or fill out our form and we will get back to you.</p>

            <div className="row">

                <div className="col-lg-6  col-sm-12 ">

                    <div className="logos">

                        <div className="mt-4">
                            <div className='Space-around'> <i className="bi bi-envelope-fill"></i> Lifeline@gmailcom</div>
                            <div className='Space-around'> <i className="bi bi-telephone-fill"></i> 0530501067  <br></br></div>
                            <div className='Space-around'> <i className="bi bi-geo-alt-fill"></i> 1 Lynch St.Homestead,Kimberley,8301 <br></br></div>
                            <div className='Space-around'> <i className="bi bi-facebook"></i><a href=" https://www.facebook.com "> facebook.com </a></div>
                            <div className='Space-around'> <i className="bi bi-instagram"></i><a href=" https://www.@Lifeline_nc "> @Lifeline_nc</a></div>


                        </div>

                    </div>
                </div>
                <div className="col-lg-6  col-sm-12">

                    <div className="mt-5">
                        <input type="email" placeholder="Email" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <input type="text" placeholder="Subject" className="form-control w-50 mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" /> <br></br>
                        <textarea className="form control w-50 mt-3" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea> <br></br>
                        <button id="btn-send" type="button" className="btn">send</button> <br></br>

                    </div>
                    <div>

                    </div>
                </div>




            </div></div>

        <Footer></Footer>

    </div>





    /*export default Contacts*/
)
