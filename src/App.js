import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Charts from "./components/Charts";
import Dashboard from "./components/Dashboard";
// import MarqueeContainer from "./containers/MarqueeContainer";
import Marquee from "./components/Marquee";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import SideNav from "./components/SideNav";
import Tables from "./components/Tables";
import TopNav from "./components/TopNav";
import Wall from "./components/Wall";
import Profiles from "./components/Profiles";


function App() {
  return (
    <Router>
      <div>
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{backgroundColor: "white"}}>
            <Route path="/charts" component={Charts} />
            <Route path="/marquee/:text" component={Marquee} />
            <Route path="/profile/:id" component={Profile} />
            {/* <Route path="/profiles" component={Profiles} /> */}
            <Route path="/settings" component={Settings} />
            <Route path="/tables" component={Tables} />
            <Route path="/wall" component={Wall} />
            <Route exact path="/" component={Dashboard} />

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
