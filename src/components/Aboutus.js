import { Headline } from './Headline';
import Footer from './Footer';
import Header from './Header'

export const Aboutus = () => {
    return (

        <div>
            <Header />
            <div className="container">

                <Headline headline="Helping Hand" />

                <p>Lifeline Nothern Cape is a non-profit organization that focuses on emotional wellness.The organisation offers counselling ,training and community servives.</p> <br></br>
                <div className=" row ">
                    <div className="card ml-3 mt-4" style={{ width: '21rem' }}>
                        <img src="https://picsum.photos/200" className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Counselling</h5> <br></br>
                            <p className="card-text">Our aim is to give adive to people on a social or personal level. In assisting and guiding clients, especially by a trained person on a proffessional basis, to resolve especially personal,social,or pysychological problems and difficulties.</p>

                        </div>
                    </div>


                    <div className="card ml-3 mt-4" style={{ width: '21rem' }}>
                        <img src="https://picsum.photos/200" className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Training </h5> <br></br>
                            <p className="card-text">Training is teaching ,or developing in oneself or others , any skills and knowledge or fitness that relates to a specific ueseful competencies. Training is the process of learning the skills that you need for a particular job or activity.</p>

                        </div>
                    </div>

                    <div className="card ml-3 mt-4 " style={{ width: '21rem' }}>
                        <img src="https://picsum.photos/200" className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title"> Community Services</h5> <br></br>
                            <p className="card-text">Community services is unpaid work performed by a person or group of people for the benefit and betterment of their community without any form of compensation. Community services is not always performed on a voluntary basis and may be compulsory per situation.</p>

                        </div>
                    </div>

                </div>
            </div>


            <Footer ></Footer>




        </div>
    )


}

/*export default Aboutus;*/