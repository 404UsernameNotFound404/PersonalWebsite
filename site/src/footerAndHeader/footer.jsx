import React, { Component } from "react";
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

class footer extends Component {
  state = {
    emailAdress: "2001HenryMorris@gmail.com"
  };

  copyForPopUp = () => {
    console.log(this.state.emailAdress);
    const pop = document.getElementById("textToCopy");
    console.log(pop.textContent);
    //pop.textContent.select();
    document.execCommand("Copy");
  };
  render() {
    return (
      <div className="forFooter">
        <Button
          icon
          circular
          color="facebook"
          size="large"
          target="_blank"
          href="https://www.facebook.com/henry.morris.56614"
        >
          <Icon className="facebook large icon" />
        </Button>
        <Button
          icon
          circular
          color="linkedin"
          size="large"
          target="_blank"
          href="https://www.linkedin.com/in/henry-morris-ba11b9167/"
        >
          <Icon className="linkedin large icon" />
        </Button>
        <Button
          icon
          circular
          color="black"
          size="large"
          target="_blank"
          href="https://github.com/404UsernameNotFound404"
        >
          <Icon className="github large icon" />
        </Button>
        <Button
          icon
          circular
          color="instagram"
          size="large"
          target="_blank"
          href="https://www.instagram.com/henry_jorris/"
        >
          <Icon className="instagram large icon" />
        </Button>
        <Popup
          content="2001HenryMorris@gmail.com"
          id="123"
          position="bottom center"
          on="click"
          trigger={<Button icon="mail large" size="large" circular />}
        />
        <h1 className="ui header medium">
          A fool thinks himself to be wise, but a wise man knows himself to be a
          fool. - William Shakespeare
        </h1>

        {/* <Popup
          content="2001HenryMorris@gmail.com"
          id="123"
          position="bottom center"
          trigger={
            <Button icon="mail" size="large" circular>
              <div className="forPopup">
                <h4 id="textToCopy" className="forPopupText">
                  2001HenryMorris@gmail.com
                </h4>
                <Icon name="mail" size="large" />
              </div>
            </Button>
          }
          on="click"
          onOpen={this.copyForPopUp}
        /> */}
      </div>
    );
  }
}

export default footer;
