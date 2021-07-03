import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Components/Views/Home';
import About from './Components/Views/About';
import Contact from './Components/Views/Contact';
import AnimeDetail from './Components/Views/AnimeDetail';
import SearchResult from './Components/Views/SearchResult';
import NoResult from './Components/Views/NoResult';
import Logo2 from './assets/LogoAnimeApp2.png';
import TwitterLogo from './assets/Twitter.png';
import InstagramLogo from './assets/Instagram.png';

import './App.css';

function App() {

  const year = new Date();

  return (
    <Router>
      <div className="nav-menu">
        <div className="row containerCenterNav">          
          <div className="containerLogo col">          
          <Link to={"/"}>
            <img
              src={Logo2}
              alt=""
            />         
          </Link>
          </div>          
          <nav className="container col">
            <ul className="row">
              <li className="col" key="0">
                <Link to="/">Home</Link>
              </li>
              <li className="col" key="1">
                <Link to="/about">About Us</Link>
              </li>
              <li className="col" key="2">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav> 
        </div>
      </div>
      {/*Routes*/}      
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/anime/:id" children={<AnimeDetail />} />          
          <Route path="/search/:searchName" children={<SearchResult />} />          
          <Route>
            <NoResult />
          </Route>
        </Switch>
        <div className="footer">
          <div className="containerLeftFooter">
            <div className="copy" style={{borderLeft: '1px solid white'}}>
              <h5 style={{fontSize: '13pt', margin: '0 0 0 5px'}}>
                <strong>© AnimeApp {year.getFullYear()}</strong> - <span style={{fontWeight: '100'}}> By Miguel Roa </span>
              </h5>              
            </div>
          </div>
          <div className="containerRightFooter">
            <div className="socialMedia">
              <a href="https://twitter.com" className="socialIcon">
                <img src={InstagramLogo} alt="" width={"35px"} height={"35px"}/>  
              </a>
              <a href="https://instagram.com" className="socialIcon">
                <img src={TwitterLogo} alt="" width={"35px"} height={"35px"}/>  
              </a>                            
            </div>            
          </div>
        </div>
    </Router>
  );
}

export default App;
