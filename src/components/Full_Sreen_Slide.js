import limping_hand from '../assets/limping_hand.jpg';
import grainy from '../assets/grainy.jpg';
import the_children from '../assets/the_children.jpg';
/*import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';*/

console.log(limping_hand, grainy,the_children)

function Full_Screen_Slide(){
    return(
        <div id="carousel_with_indicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel_with_indicators" data-slide-to="0" className="active"></li>
                <li data-target="#carousel_with_indicators" data-slide-to="1"></li>
                <li data-target="#carousel_with_indicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={limping_hand} alt="First Slide"/>
                </div>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img className="d-block w-100" src={grainy} alt="Second Slide"/>
                </div>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img className="d-block w-100" src={the_children} alt="Third Slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="carousel_with_indicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">prev</span>
            </a>
            <a className="carousel-control-next" href="carousel_with_indicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">next</span>
            </a>
        </div>
    );
}

export default Full_Screen_Slide;