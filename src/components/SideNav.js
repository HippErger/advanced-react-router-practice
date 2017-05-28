import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/charts">
            Charts
          </Link>
        </li>
        <li>
          <Link to="/tables">
            Tables
          </Link>
        </li>
        <li>
          <Link to="/settings" >
            Settings
          </Link>
        </li>
        <li>
          <Link to="/marquee/scottisdumb" >
            Scott is dumb
          </Link>
        </li>
        <li>
          <Link to="/wall" >
            Wall
          </Link>
        </li>
      </ul>
    </div>);
}

export default SideNav;
