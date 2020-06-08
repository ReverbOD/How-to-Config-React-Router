import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

// This is the dashboard page

class Dashboard extends React.Component {
  
  render() {
    return (
      <React.Fragment>
      	<div style={{ textAlign: "center" }}>
      		This is the Dashboard screen
      		<li>
      			Navigate to <Link to="/user" replace={true}>User</Link>
        	</li>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
      	</div>
      </React.Fragment>
    );
  }
}

export default Dashboard;