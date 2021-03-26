import React, { Component } from "react";
import "./auth-background.css";


class AuthBackground extends Component {
  render() {
    return (
      <>
        <div className="bg-image">
            {this.props.children}
        </div>
      </>
    );
  }
}

export default AuthBackground;
