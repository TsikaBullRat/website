import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Aboutus} from './components/Aboutus';
import {Ourimpacts} from './components/Ourimpacts';
import {Contacts} from './components/Contacts';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header/>
      </Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={Aboutus}/>
        <Route path="/impacts" component={Ourimpacts}/>
        <Route path="/contacts" component={Contacts}/>
      </Switch>
    </div>
  );
}

export default App;
