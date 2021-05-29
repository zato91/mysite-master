import { Route } from "react-router-dom";
// import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Home from './pages/home/Home.js';
import Footer from "./components/Footer";
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <div id="background-main">
      <NavBar />
      <Route exact path="/" component={Home} />
      </div>
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Footer />
      {/* <Portfolio/>
      <Contact />
      */}
    </div>
  );
}

export default App;
