import Header from './Header';
import thanks from '../assets/thank_you.jpg'
import Smiley from './Smileyfaces'

export const Ourimpacts = () => {
    return (
        <div>
            <div className="mt-5 mr-1 mb-5 text-center">
                <h3>What We've Done</h3>
                <p>lorem ipsum djkad jadhajhd ahdkahdja ajhdkahdja ajdkajsdj cjdkdhfl </p>
            </div>
            <Smiley/>
            <div className="row" style={{padding:50}}>
                <div className="card col-lg-2 col-md-6 col-sm-12" style={{width: '17%', height:'auto', marginLeft: 20}}>
                    <img src={thanks} class="card-img-top"/>
                    <div className="card-body">
                        <h5>My Story</h5>
                        <p>A story told by those who have had problems, and the triumpht of life line</p>
                    </div>
                </div>
                <div className="card col-lg-2 col-md-6 col-sm-12" style={{width: '17%', height:'auto', marginLeft: 25}}>
                    <img src={thanks} class="card-img-top"/>
                    <div className="card-body">
                        <h5>My Story</h5>
                        <p>A story told by those who have had problems, and the triumpht of life line</p>
                    </div>
                </div>
                <div className="card col-lg-2 col-md-6 col-sm-12" style={{width: '17%', height:'auto', marginLeft: 25}}>
                    <img src={thanks}/>
                    <div className="card-body">
                        <h5>My Story</h5>
                        <p>A story told by those who have had problems, and the triumpht of life line</p>
                    </div>
                </div>
                <div className="card col-lg-2 col-md-6 col-sm-12" style={{width: '17%', height:'auto', marginLeft: 25}}>
                    <img src={thanks}/>
                    <div className="card-body">
                        <h5>My Story</h5>
                        <p>A story told by those who have had problems, and the triumpht of life line</p>
                    </div>
                </div>
                <div className="card col-lg-2 col-md-6 col-sm-12" style={{width: '17%', height:'auto', marginLeft: 25}}>
                    <img src={thanks}/>
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