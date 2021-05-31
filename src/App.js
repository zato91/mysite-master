import { Route, useLocation } from "react-router-dom";
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Home from './pages/home/Home.js';
import Footer from "./components/Footer";
import NavBar from './components/Navbar';


const roadColor = {
  '/contact':"gray",
  '/': "transparent",
  '/portfolio': "#696969",
}


function App() {
  const {pathname} = useLocation();

    
  return (
    <div className="App">
      
    
      <div >
        <NavBar  coloR={{backgroundColor:`${roadColor[pathname]}`}}/>
        <Route exact path="/" component={Home} />
     
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
