import { Home } from './components/Home';
import { Aboutus } from './components/Aboutus';
import { Ourimpacts } from './components/Ourimpacts';
import { Contacts } from './components/Contacts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
