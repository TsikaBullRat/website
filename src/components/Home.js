import Footer from './Footer'
import Summary from './Summary'
import ImpactSum from './impactSummary'
import Loader from 'react-spinners/HashLoader';
import React, { useState, useEffect } from 'react'


export const Home = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },
    []
  );
  return (
    <>

      {
        loading ? (
          <div className="text-center" style={{ marginTop: 300 }}><Loader size={300} color={"#27394a"} loading={loading} /></div>
        ) : (<>
          <div className="jumbotron">

            <h1 className="display-4 pt-5 font-weight-bold">Reach One Teach One</h1>
            <h3 className="lead">The mission of the ROTO centre is to help special
              needs children and their families improve and
              maintain a healthy and independent lifestyle; to
              improve their quality of life.
            </h3>
            <a className="btn btn-lg ml-3 my_button_jumbotron mb-3" href="#" role="button">Make a difference</a>
            <a className="btn btn-lg ml-3 my_button_jumbotron mb-3" href="#" role="button">Give a hand</a>

          </div>

          <Summary />
          <ImpactSum />
          <Footer />
        </>
        )}
    </>
  );
}

/*export default Home*/
