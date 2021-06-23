import Header from "../components/Header"
import '../App.css'
function Contacts() {
    return (
        <div>

            <Header />

            <div className="row">

                <div className="col-6 ">

                    <div className="">
                    <div>
                    <i class="bi bi-envelope"></i> Keaa2gmail.com  <br></br>
                    <i class="bi bi-telephone"></i> 079231312`1  <br></br>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    </div>
                
                    </div>
               

                </div>

                <div className="col-6">
                    <div className="mt-5">
                        <input type="email" placeholder="Email" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <input type="text" placeholder="Subject" className="form-control w-50 mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <textarea class="form control w-50 mt-3" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                        <button id="btn-send" type="button" class="btn btn-primary">send</button>
                        
                    </div>
                    <div>
                   
                    </div>
                </div>

            </div>





        </div>
    )
}

export default Contacts
