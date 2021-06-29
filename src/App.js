import './App.css';
import logo  from './logo.svg'
import Home from './components/Home';
import Header from './components/Header';
import Aboutus from './components/Aboutus';
import Ourimpacts from './components/Ourimpacts';
import Contacts from './components/Contacts';
import Full_Screen_Slide from './components/Full_Sreen_Slide';
import Hero from './components/hero';


function App() {
  return (
    <div className="container-fluid">
      {/*<Header/>*/}
      <Contacts/>
      {/*<Ourimpacts/>*/}
      {/*<Aboutus/>*/}
      {/*<Full_Screen_Slide/>*/}
    </div>
  );
}

export default App;
