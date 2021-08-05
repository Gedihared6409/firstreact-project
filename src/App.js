
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navbar />
    
              <Cards />
           
         
        <Footer/>
  </Router>
  );
}

export default App;
