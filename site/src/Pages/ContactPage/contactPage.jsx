import React, { Component } from "react";
import "./ContactPageStyle.css";
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

class contactPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <div className="forWholeContactPage">
            <div className="forContactText">
              <h1 className="ui header large forContactText">Contact</h1>
            </div>
            <div className="forContactTextMargins">
              {/* <h1 className="ui header large forContactText">
            Feel free to contact me through email, facebook messenger, instagram
            messenger, and you can try to reach me through linkedin, but I may
            take a while to get back to you.
          </h1> */}
            </div>
            <div className="contianerForAllButtons">
              <div className="containerForButtons">
                <Popup
                  content="2001HenryMorris@gmail.com"
                  id="123"
                  position="bottom center"
                  on="click"
                  size="huge"
                  trigger={<Button icon="mail large" size="huge" circular />}
                />
                <div className="forMarginLeft">
                  <h1>2001henrymorris@gmail.com</h1>
                </div>
              </div>
              <div className="containerForButtons">
                <form action="https://www.facebook.com/henry.morris.56614">
                  <button
                    className="ui button icon huge facebook circular"
                    target="_blank"
                    href="https://www.facebook.com/henry.morris.56614"
                    type="submit"
                  >
                    <Icon className="facebook large icon" />
                  </button>
                </form>
                <div className="forMarginLeft">
                  <h1>https://www.facebook.com/henry.morris.56614</h1>
                </div>
              </div>
              <div className="containerForButtons">
                <form
                  action="https://www.linkedin.com/in/henry-morris-ba11b9167/"
                  className="forContactButtonsR"
                >
                  <button
                    className="ui button icon huge linkedin circular "
                    target="_blank"
                    href="https://www.linkedin.com/in/henry-morris-ba11b9167/"
                  >
                    <Icon className="linkedin large icon " />
                  </button>
                </form>
                <div className="forMarginLeft">
                  <h1>https://www.linkedin.com/in/henry-morris-ba11b9167/</h1>
                </div>
              </div>
              {/* <div className="containerForButtons">
            <form
              action="https://www.instagram.com/henry_jorris/"
              className="forContactButtonsL"
            >
              <button
                className="ui button icon huge instagram circular forContactButtonsL"
                target="_blank"
                href="https://www.instagram.com/henry_jorris/"
              >
                <Icon className="instagram large icon" />
              </button>
            </form>
            <div className="forMarginLeft">
              <h1>https://www.instagram.com/henry_jorris/</h1>
            </div>
          </div> */}
            </div>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <div className="forWholeContactPage">
            <div className="forContactText">
              <h1 className="ui header large forContactText">Contact</h1>
            </div>
            <div className="forContactTextMargins">
              {/* <h1 className="ui header large forContactText">
            Feel free to contact me through email, facebook messenger, instagram
            messenger, and you can try to reach me through linkedin, but I may
            take a while to get back to you.
          </h1> */}
            </div>
            <div>
              <div className="containerForButtons">
                <Popup
                  content="2001HenryMorris@gmail.com"
                  id="123"
                  position="bottom center"
                  on="click"
                  size="huge"
                  trigger={<Button icon="mail large" size="huge" circular />}
                />
                <div className="forMarginLeftMobile">
                  <h1 className="ui header medium">
                    2001henrymorris@gmail.com
                  </h1>
                </div>
              </div>
              <div className="containerForButtons">
                <form action="https://www.facebook.com/henry.morris.56614">
                  <button
                    className="ui button icon huge facebook circular"
                    target="_blank"
                    href="https://www.facebook.com/henry.morris.56614"
                    type="submit"
                  >
                    <Icon className="facebook large icon" />
                  </button>
                </form>
                <div className="forMarginLeftMobile">
                  <h1 className="ui header medium">
                    https://www.facebook.com/ henry.morris.56614
                  </h1>
                </div>
              </div>
              <div className="containerForButtons">
                <form
                  action="https://www.linkedin.com/in/henry-morris-ba11b9167/"
                  className="forContactButtonsR"
                >
                  <button
                    className="ui button icon huge linkedin circular "
                    target="_blank"
                    href="https://www.linkedin.com/in/henry-morris-ba11b9167/"
                  >
                    <Icon className="linkedin large icon " />
                  </button>
                </form>
                <div className="forMarginLeftMobile">
                  <h1 className="ui header medium">
                    https://www.linkedin.com/in/ henry-morris-ba11b9167/
                  </h1>
                </div>
              </div>
              {/* <div className="containerForButtons">
            <form
              action="https://www.instagram.com/henry_jorris/"
              className="forContactButtonsL"
            >
              <button
                className="ui button icon huge instagram circular forContactButtonsL"
                target="_blank"
                href="https://www.instagram.com/henry_jorris/"
              >
                <Icon className="instagram large icon" />
              </button>
            </form>
            <div className="forMarginLeft">
              <h1>https://www.instagram.com/henry_jorris/</h1>
            </div>
          </div> */}
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
}

export default contactPage;
