import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Charts from "./components/Charts";
import Dashboard from "./components/Dashboard";
import MarqueeContainer from "./containers/MarqueeContainer";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import SideNav from "./components/SideNav";
import Tables from "./components/Tables";
import TopNav from "./components/TopNav";
import Wall from "./components/Wall";
import Profiles from "./components/Profiles";


function App() {
  return (
    <BrowserRouter>
      <div>
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{backgroundColor: "white"}}>
            {/* PUT YOUR ROUTES HERE */}
            <Route path="/charts" component={Charts} />
            <Route path="/marquee/:text" component={MarqueeContainer} />
            {/* <Route path="/profile/:id" component={Profile} />  */}
            {/* <Route path="/profiles" component={Profiles} /> */}
            <Route path="/settings" component={Settings} />
            <Route path="/tables" component={Tables} />
            <Route path="/wall" component={Wall} />
            <Route path="/" component={Dashboard} />

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

/*
* /              -> Dashboard
* /charts        -> Charts

* /tables        -> Tables

* /settings      -> Settings


* /wall          -> Wall

* /profiles      -> Profiles
<Route path="/profiles" component={Profiles} />

* /marquee/:text -> Marquee
* /profile/:id   -> Profile

*/


export default App;
