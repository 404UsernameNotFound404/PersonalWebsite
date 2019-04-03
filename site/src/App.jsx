import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./navBar";
import Footer from "./footer";
import AboutMe from "./aboutMe";
import CodingProgects from "./codingProgects";
import Contact from "./contactPage";
import KinPage from "./KinPage";

import {
  withRouter,
  Route,
  Redirect,
  Switch,
  BrowserRouter
} from "react-router-dom";

class App extends Component {
  changeRoute = route => {
    const { history } = this.props;
  };
  OverFlow = () => {
    console.log("OVERFLOW");

    document.getElementById("BODY").style.overflow = "visible";
  };
  noOverFlow = () => {
    console.log("No Overflow");
    document.getElementById("BODY").style.overflow = "hidden";
  };
  render() {
    return (
      <div>
        {/* <div>
          <NavBar changeRoute={this.changeRoute} />
        </div> */}
        <BrowserRouter>
          <Switch>
            <Route
              path="/AboutMe"
              exact
              render={() => {
                return (
                  <div>
                    {this.OverFlow()}
                    <NavBar changeRoute={this.changeRoute} />
                    <AboutMe />
                    <Footer />
                  </div>
                );
              }}
            />
            <Route
              path="/Contact"
              exact
              render={() => {
                return (
                  <div>
                    {this.OverFlow()}
                    <NavBar changeRoute={this.changeRoute} />
                    <Contact />
                    <Footer />
                  </div>
                );
              }}
            />
            <Route
              path="/CodingProgects"
              exact
              render={() => {
                return (
                  <div>
                    {this.OverFlow()}
                    <NavBar changeRoute={this.changeRoute} />
                    <CodingProgects />
                    <Footer />
                  </div>
                );
              }}
            />
            <Route
              path="/KinPage"
              exact
              render={() => {
                return (
                  <div>
                    {this.noOverFlow()}
                    <KinPage />
                  </div>
                );
              }}
            />
            <Route path="/" render={() => <Redirect to="/AboutMe" />} />
          </Switch>
        </BrowserRouter>
        {/* <div>
          <Footer />
        </div> */}
      </div>
    );
  }
}

export default App;
