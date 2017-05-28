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
          <Link to="/charts"> <i className="fa fa-fw fa-bar-chart-o" />
            Charts
          </Link>
        </li>
        <li>
          <Link to="/tables">
            <i className="fa fa-fw fa-bar-chart-o" /> Tables
          </Link>
        </li>
        <li>
          <Link to="/settings" >
            <span> Settings </span>
          </Link>
        </li>
        <li>
          <Link to="/marquee/ScottIsDumb" >
            <span> Scott is dumb! </span>
          </Link>
        </li>

        <li>
          <Link to="/marquee/WereFucked" >
            <span> We're Fucked. </span>
          </Link>
        </li>
        <li>
          <Link to="/wall" >
            <i className="fa fa-fw fa-bar-chart-o" /> Wall
          </Link>
        </li>
      </ul>
    </div>);
}

export default SideNav;
