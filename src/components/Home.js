import Footer from './Pieces/Footer'
import Summary_1 from './Pieces/Summary_1'
import Summary_2 from './Pieces/Summary_2'
import Loader from 'react-spinners/HashLoader';
import { Jumbotron } from './Pieces/Jumbotron';
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
        ) : (
        <>  
          <Jumbotron/>
          <Summary_1 />
          <Summary_2 />
          <Footer />
        </>
        )
      }
    </>
  );
}
