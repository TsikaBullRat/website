import thanks from '../assets/thank_you.jpg'

export const Ourimpacts = () => {
    return (
        <div>
            <div className="mr-1 mb-5 text-center">
                <div className="row about_us_box">
                    <div className="line"></div>
                    <h2>What We've Done</h2>
                    <div className="line"></div>
                </div>
                <p>lorem ipsum djkad jadhajhd ahdkahdja ajhdkahdja ajdkajsdj cjdkdhfl </p>
            </div>
            <div class="row justify-content-center mt-5 mb-5">
                <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                    <i class="bi bi-emoji-smile" style={{ fontSize: 100 }}></i>
                    <h4>300</h4>
                    <h4>Souls</h4>
                    <h4>Impacted</h4>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                    <i class="bi bi-emoji-sunglasses" style={{ fontSize: 100 }}></i>
                    <h4>300</h4>
                    <h4>Projects</h4>
                    <h4>Completed</h4>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                    <i class="bi bi-emoji-laughing" style={{ fontSize: 100 }}></i>
                    <h4>300</h4>
                    <h4>Goals</h4>
                    <h4>Achieved</h4>
                </div>
            </div>
            <div className="row" style={{ padding: 50 }}>
                <div className="card col-lg-2 col-md-6 col-sm-12" style={{ width: '20rem', margin: 25 }}>
                    <img src={thanks} className="card-img-top" />
                    <div className="card-body">
                        <h5>My Story</h5>
                        <p>A story told by those who have had problems, and the triumpht of life line</p>
                    </div>
                </div>
                <div className="card col-lg-2 col-md-6 col-sm-12" style={{ width: '20rem', margin: 25 }}>
                    <img src={thanks} class="card-img-top " />
                    <div className="card-body">
                        <h5>My Story</h5>
                        <p>A story told by those who have had problems, and the triumpht of life line</p>
                    </div>
                </div>
                <div className="card col-lg-2 col-md-6 col-sm-12" style={{ width: '20rem', margin: 25 }}>
                    <img src={thanks} />
                    <div className="card-body">
                        <h5>My Story</h5>
                        <p>A story told by those who have had problems, and the triumpht of life line</p>
                    </div>
                </div>
                <div className="card col-lg-2 col-md-6 col-sm-12" style={{ width: '20rem', margin: 25 }}>
                    <img src={thanks} />
                    <div className="card-body">
                        <h5>My Story</h5>
                        <p>A story told by those who have had problems, and the triumpht of life line</p>
                    </div>
                </div>
                <div className="card col-lg-2 col-md-6 col-sm-12" style={{ width: '20rem', margin: 25 }}>
                    <img src={thanks} />
                    <div className="card-body">
                        <h5>My Story</h5>
                        <p>A story told by those who have had problems, and the triumpht of life line</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
/*export default Ourimpacts;*/