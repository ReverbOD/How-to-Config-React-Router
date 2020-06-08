import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

// This is the user page

class User extends React.Component {
  
  render() {
    return (
      <React.Fragment>
      	<div style={{ textAlign: "center" }}>
      		This is the User screen
      		<li>
      			Navigate to <Link to="/" replace={true}>Dashboard</Link>
        	</li>
          <header className="App-header" style={{ backgroundColor: "#ffffff" }}>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
      	</div>
      </React.Fragment>
    );
  }
}

export default User;