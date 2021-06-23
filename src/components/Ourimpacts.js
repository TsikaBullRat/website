import Header from './Header'
import grainy from '../assets/grainy.jpg';

console.log(grainy);

function Ourimpacts(){
    return(
        <div className="container">
            <Header/>
            <div className="our_impacts">
                <div className="impacts_text_box">
                    <h1>Hello</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Massa tincidunt dui ut ornare lectus sit amet. Diam sit amet nisl suscipit adipiscing. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Ipsum dolor sit amet consectetur. Mauris augue neque gravida in. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Morbi tristique senectus et netus et. Ut diam quam nulla porttitor. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Blandit cursus risus at ultrices mi. Urna id volutpat lacus laoreet non curabitur gravida. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Nascetur ridiculus mus mauris vitae ultricies leo.</h5>
                </div>
                <div className="impacts_picture_box"><img src={grainy} alt=""/></div>
            </div>
        </div>
    );
}

export default Ourimpacts;