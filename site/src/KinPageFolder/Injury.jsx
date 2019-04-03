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

class Injury extends Component {
  state = {};
  render() {
    return (
      <div className="Injury">
        <div className="InjuryName">
          <Header>{"Name: " + this.props.name} </Header>
        </div>
        <div className="InjuryTitles">
          <Header size="small">Discription:</Header>
        </div>
        <div className="InjuryTreatment">
          <Header size="tiny">{this.props.Discription}</Header>
        </div>
        <div className="InjuryTitles">
          <Header size="small">Usual Causes:</Header>
        </div>
        <div className="InjuryTreatment">
          <Header size="tiny">{this.props.UsualCauses}</Header>
        </div>
        <div className="InjuryTitles">
          <Header size="small">Treatment:</Header>
        </div>
        <div className="InjuryTreatment">
          <Header size="tiny">{this.props.Treatment}</Header>
        </div>
        <div className="InjuryTitles">
          <Header size="small">Prevention:</Header>
        </div>
        <div className="InjuryTreatment">
          <Header size="tiny">{this.props.Prevention}</Header>
        </div>
      </div>
    );
  }
}

export default Injury;
