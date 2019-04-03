import React, { Component } from "react";
import HomePage from "./homePage";
import Muscles from "./Muscles";
import InjuryPage from "./InjuryPage";
import Movement from "./Movement";
import Tweet from "../tweet";

class KinPage extends Component {
  state = {};
  render() {
    return (
      <div className="App" id="KinPage">
        <HomePage />
        <Muscles />
        <Movement />
        <InjuryPage />
        <Tweet />
      </div>
    );
  }
}

export default KinPage;
