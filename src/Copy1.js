import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Aboutus } from './components/Aboutus';
import { Ourimpacts } from './components/Ourimpacts';
import { Contacts } from './components/Contacts';
import { Quick_donate } from './components/Quick_donate';

export const Copy1 =() =>{
    return(
    <div>
      {/*<Quick_donate />*/}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about" component={Aboutus} />
          <Route path="/impacts" component={Ourimpacts} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
    )
}