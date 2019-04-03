import React, { Component } from "react";
import image from "../../Img/0.jpg";
import "./AboutMe.css";
import paraForAct from "../../paraForAct.json";
import paraAthle from "../../paraForAthle.json";
import paraAcad from "../../paraForAcad.json";

import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button,
  Popup
} from "semantic-ui-react";

class aboutMe extends Component {
  state = {
    Act: false,
    Ath: true,
    Aca: false
  };
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <div className="forAboutMeTextContainer">
            <div className="forAboutMeText">
              <img src={image} />
              <div className="forAboutMeTextActuallyText">
                <h1 className="ui header large ">I Believe In Balance.</h1>
                <h4 className="ui header medium ">
                  I Believe in the three A's. The three A's are Academics,
                  Activism, and Athletics. This has made me a balanced person in
                  life. I take care of my body with athletics. I take care of my
                  mind with academics. This may sounds cheesy, but I take care
                  of my soul with activism.
                </h4>
              </div>
            </div>
            <div className="threeAAAContainer">
              <Button fluid color="teal" onClick={this.Actvism}>
                Activism
              </Button>
              <Button fluid color="teal" onClick={this.Atletics}>
                Athletics
              </Button>
              <Button fluid color="teal" onClick={this.Academic}>
                Academics
              </Button>
            </div>
            <div className="threeAAATextContainer">
              <div className="threeAAATitle">
                <h1 className="ui header massive">{this.titleToDisplay()}</h1>
              </div>
              <div className="threeAAAPara">
                <h4 className="ui header large">{this.textToDisplay()}</h4>
              </div>
            </div>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <div className="forAboutMeTextContainer">
            <div className="forAboutMeTextMobile">
              <img src={image} />
              <div className="forAboutMeTextActuallyText">
                <h1 className="ui header large ">I Believe In Balance.</h1>
                <h4 className="ui header medium ">
                  I Believe in the three A's. The three A's are Academics,
                  Activism, and Athletics. This has made me a balanced person in
                  life. I take care of my body with athletics. I take care of my
                  mind with academics. This may sounds cheesy, but I take care
                  of my soul with activism.
                </h4>
              </div>
            </div>
            <div className="threeAAAContainer">
              <Button fluid color="teal" onClick={this.Actvism}>
                Activism
              </Button>
              <Button fluid color="teal" onClick={this.Atletics}>
                Atheltics
              </Button>
              <Button fluid color="teal" onClick={this.Academic}>
                Academics
              </Button>
            </div>
            <div className="threeAAATextContainer">
              <div className="threeAAATitle">
                <h1 className="ui header massive">{this.titleToDisplay()}</h1>
              </div>
              <div className="threeAAAPara">
                <h4 className="ui header large">{this.textToDisplay()}</h4>
              </div>
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
  textToDisplay = () => {
    console.log("running");
    let displayText = "";
    let textFromJson = "Hellow World 404";
    if (this.state.Aca == true) {
      textFromJson = JSON.stringify(paraAcad);
    }
    if (this.state.Act == true) {
      textFromJson = JSON.stringify(paraForAct);
    }
    if (this.state.Ath == true) {
      textFromJson = JSON.stringify(paraAthle);
    }
    for (var x = 9; x < textFromJson.length - 2; x++) {
      displayText += textFromJson.charAt(x);
      console.log(textFromJson.charAt(x));
    }
    return displayText;
  };
  Academic = () => {
    this.setState({
      Act: false,
      Ath: false,
      Aca: true
    });
  };
  Actvism = () => {
    this.setState({
      Act: true,
      Ath: false,
      Aca: false
    });
  };
  Atletics = () => {
    this.setState({
      Act: false,
      Ath: true,
      Aca: false
    });
  };
  titleToDisplay = () => {
    if (this.state.Aca == true) {
      return "Academics";
    }
    if (this.state.Act == true) {
      return "Activism";
    }
    if (this.state.Ath == true) {
      return "Atheltics";
    }
  };
}
export default aboutMe;
