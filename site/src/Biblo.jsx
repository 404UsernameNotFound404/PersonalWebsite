import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button,
  Header
} from "semantic-ui-react";

class Biblo extends Component {
  state = {};
  render() {
    return (
      <div className="InjuryFullPage" id="InjuryPage">
        <div className="layerInjury">
          <div className="muscleTitleContainer">
            <Header className="muscleTitle">Biblo</Header>
          </div>
          <div>
              <Header></Header>
          </div>
        </div>
      </div>
    );
  }
}

export default Biblo;
