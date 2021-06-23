import Header from "../components/Header"


function Aboutus() {
    return (
        <div className="container">



            <Header />

            <h1> Helping Hand</h1>
            <p>Lifeline Nothern Cape is a non-profit organization that focuses on emotional wellness.The organisation offers counselling ,training and community servives.</p>
            <div className=" row ">
                <div class="card" style={{ width: '18rem' }}>
                    <img src="https://picsum.photos/200" class="card-img-top" alt="..." style={{ height: '200px' }} />
                    <div class="card-body">
                        <h5 class="card-title">Counselling</h5>
                        <p class="card-text">Our aim is to give adive to people on a social or personal level. In assisting and guiding clients, especially by a trained person on a proffessional basis, to resolve especially personal,social,or pysychological problems and difficulties.</p>

                    </div>
                </div>


                <div class="card" style={{ width: '18rem' }}>
                    <img src="https://picsum.photos/200" class="card-img-top" alt="..." style={{ height: '200px' }} />
                    <div class="card-body">
                        <h5 class="card-title">Training </h5>
                        <p class="card-text">Training is teaching ,or developing in oneself or others , any skills and knowledge or fitness that relates to a specific ueseful competencies. Training is the process of learning the skills that you need for a particular job or activity.</p>

                    </div>
                </div>

                <div class="card" style={{ width: '18rem' }}>
                    <img src="https://picsum.photos/200" class="card-img-top" alt="..." style={{ height: '200px' }} />
                    <div class="card-body">
                        <h5 class="card-title"> Community Services</h5>
                        <p class="card-text">Community services is unpaid work performed by a person or group of people for the benefit and betterment of their community without any form of compensation.</p>

                    </div>
                </div>

            </div>






        </div>
    )


}

export default Aboutus