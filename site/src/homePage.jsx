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

class homePage extends Component {
  state = {
    homePageAnimation: ""
  };
  nextPage = () => {
    document.getElementById("musclePage").scrollIntoView();
    // document.querySelector('.hello').scrollIntoView({
    //   behavior: 'smooth'
    // });
  };
  render() {
    return (
      <div className="homePageBackground" id="homePage">
        <div className="layer">
          <div className="homePageTitle">
            <Header>The Shoulder</Header>
          </div>
          <div className="sponseredBy">
            <Header size="huge">Sponsored By Anne Hathaway</Header>
          </div>
          <div className="containerForIntro">
            <Header className="introPara" size="huge">
              The part of the human body that is called the shoulder is made up
              of the Clavicle, the Scapula, and the Humerus. Rarely do we give
              proper credit to this highly useful appendage, from baseball,
              rugby and golf to proper rectal hygiene and angry political finger
              pointing; from military salutes to cleaning fish bowls, little
              could be achieved without the gift of the shoulder joint. Please.
              Step into the world of the shoulder...
            </Header>
            <div className="imageForIntro">
              <Image src={require("./img/properIntro.png")} size="medium" />
            </div>
          </div>
          <div className="buttonToStartWebsite">
            <Button
              size="massive"
              fluid
              color="black"
              icon
              labelPosition="right"
              onClick={this.nextPage}
            >
              <Icon name="down arrow" />
              <div>
                <Header inverted>Click Here To Start Learning!</Header>
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default homePage;
