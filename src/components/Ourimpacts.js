import profile from '../assets/profile.png';
import { Headline } from './Headline';
import Footer from './Footer';
import Header from './Header'

export const Ourimpacts = () => {
    return (
        <div>
            <Header/>

            <div> <Headline headline="Lives Changed" />

                <p className="text-center">We aid in changing peoples lives for the better,to ensure that your physical ,emotional and mental health is cared for. </p>

                <div className="row justify-content-center">
                    <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                        <img src={profile} style={{ width: 250, height: 250 }} />
                        <div className="card-body">
                            <h5>My Story</h5>
                            <p>A story told by those who have had problems, and the triumpht of life line</p>
                        </div>
                    </div>
                    <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                        <img src={profile} style={{ width: 250, height: 250 }} />
                        <div className="card-body">
                            <h5>My Story</h5>
                            <p>A story told by those who have had problems, and the triumpht of life line</p>
                        </div>
                    </div>
                    <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                        <img src={profile} style={{ width: 250, height: 250 }} />
                        <div className="card-body">
                            <h5>My Story</h5>
                            <p>A story told by those who have had problems, and the triumpht of life line</p>
                        </div>
                    </div>
                </div>
                <div className="mr-1 mb-n5 text-center">
                    <Headline headline="Success Stories" />
                    <p>lorem ipsum djkad jadhajhd ahdkahdja ajhdkahdja ajdkajsdj cjdkdhfl </p>
                </div>
                <div class="row justify-content-center mt-5 mb-5">
                    <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                        <i class="bi bi-emoji-smile" style={{ fontSize: 100 }}></i>
                        <h4>300 Souls</h4>
                        <h4></h4>
                        <h4>Impacted</h4>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                        <i class="bi bi-check2-circle" style={{ fontSize: 100 }}></i>
                        <h4>300 Projects</h4>
                        <h4></h4>
                        <h4>Completed</h4>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                        <i class=" bi bi-award" style={{ fontSize: 100 }}></i>
                        <h4>300 Goals</h4>
                        <h4></h4>
                        <h4>Achieved</h4>
                    </div>
                </div></div>

            <Footer></Footer>

        </div>
    );
}