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

class Tweet extends Component {
  state = {};
  nextPage = () => {
    document.getElementById("InjuryPage").scrollIntoView();
  };
  render() {
    return (
      <div className="InjuryFullPage" id="tweet">
        <div className="muscleTitleContainer">
          <Header className="TweetPageTitle">Reviews</Header>
        </div>
        <div className="layerInjury">
          <div className="tweetContainer">
            <img
              src="http://www.prankmenot.com/images/27-03-2019/ZUgEL1.png"
              border="0"
              alt="Fake iPhone Text Generator iOS"
              className="tweet"
            />
            <img
              src="http://www.prankmenot.com/images/27-03-2019/H91Uvx.png"
              border="0"
              alt="Fake iPhone Text Generator iOS"
              className="tweet"
            />
          </div>
          <div className="buttonForTweet">
            <Button
              size="massive"
              fluid
              color="black"
              icon
              labelPosition="right"
              onClick={this.nextPage}
            >
              <Icon name="up arrow" />
              <div>
                <Header inverted>Click Here To Go Back.</Header>
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
