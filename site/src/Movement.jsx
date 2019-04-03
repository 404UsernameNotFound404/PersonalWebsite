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

class Movement extends Component {
  state = {};
  nextPage = () => {
    document.getElementById("InjuryPage").scrollIntoView();
  };
  backPage = () => {
    document.getElementById("musclePage").scrollIntoView();
  };
  render() {
    return (
      <div className="MovementPage" id="Movement">
        <div className="layerMuscle">
          <div className="muscleTitleContainer">
            <Header inverted className="muscleTitle">
              Muscles Articulating the Joint
            </Header>
          </div>
          <div className="row1Move">
            <div className="boxForMove">
              <Header inverted size="large">
                Extension
              </Header>
              <Header inverted size="large">
                Posterior deltoid, latissimus dorsi and teres major.
              </Header>
            </div>
            <div className="boxForMove">
              <Header inverted size="large">
                Flexion
              </Header>
              <Header inverted size="large">
                Done with Pectoralis major, anterior deltoid and
                coracobrachialis. Biceps brachii weakly assists in forward
                flexion.
              </Header>
            </div>
            <div className="boxForMove">
              <Header inverted size="large">
                Abduction
              </Header>
              <Header inverted>
                The first 15 degrees of abduction are completed by the
                supraspinatus. The middle fibres of the deltoid are used until
                around 90 degrees. Past 90 degrees, the scapula is rotated to
                increase abduction – this is done by the trapezius and serratus
                anterior.
              </Header>
            </div>
          </div>
          <div className="row1Move">
            <div className="boxForMove">
              <Header inverted size="large">
                Adduction
              </Header>
              <Header inverted size="large">
                Pectoralis major, latissimus dorsi and teres major.
              </Header>
            </div>
            <div className="boxForMove">
              <Header inverted size="large">
                Internal Rotation
              </Header>
              <Header inverted size="large">
                Subscapularis, pectoralis major, latissimus dorsi, teres major
                and anterior deltoid.
              </Header>
            </div>
            <div className="boxForMove">
              <Header inverted size="large">
                External rotation
              </Header>
              <Header inverted size="large">
                Done by the infraspinatus and teres minor.
              </Header>
            </div>
          </div>
          <div className="twoButtonContainer">
            <div className="twoButtonButtonR">
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
                  <Header inverted>Click Here To Continue Learning!</Header>
                </div>
              </Button>
            </div>
            <div className="twoButtonButtonL">
              <Button
                size="massive"
                fluid
                color="black"
                icon
                labelPosition="right"
                onClick={this.backPage}
              >
                <Icon name="up arrow" />
                <div>
                  <Header inverted>Click Here To Go Back.</Header>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movement;
