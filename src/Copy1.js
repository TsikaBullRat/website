import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import React, { useState, useEffect } from 'react'
import { Home } from './components/Home';
import { Aboutus } from './components/Aboutus';
import { Ourimpacts } from './components/Ourimpacts';
import { Contacts } from './components/Contacts';
import Header from './components/Header';
//import Loader from 'react-spinners/CircleLoader';

export const Copy1 = () => {

  /*const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  },
    []
  );*/

  return (
    <div>
      {/*{
        loading ? (
          <Loader size={200} color={"#fa8701"} loading={loading} />
        ) : (*/}
        
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={Aboutus} />
          <Route path="/impacts" component={Ourimpacts} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>

        {/*)
        }*/}
    </div>
  )
}