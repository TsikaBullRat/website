import { Home } from './components/Home';
import AboutUs from './components/AboutUs';
import { Programmes } from './components/Programmes';
import { Contacts } from './components/Contacts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Pieces/Header';
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
          <Route path="/about" component={AboutUs} />
          <Route path="/programmes" component={Programmes} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
