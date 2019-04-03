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

class Muscles extends Component {
  state = {};
  nextPage = () => {
    document.getElementById("Movement").scrollIntoView();
  };
  backPage = () => {
    document.getElementById("homePage").scrollIntoView();
  };
  render() {
    return (
      <div className="MusclePage" id="musclePage">
        <div className="layerMuscle">
          <div className="muscleTitleContainer">
            <Header inverted className="muscleTitle">
              Muscles Articulating the Joint
            </Header>
          </div>
          <div className="muslceFirstPara">
            <Header inverted size="large">
              The Shoulder “joint” is comprised of two main joinings; the
              glenohumeral joint (Which is where the head of humerus inserts
              into the glenoid fossa) and the acromioclavicular joint (The
              junction between the acromion and the clavicle, providing more
              support for adduction of the shoulder joint above the shoulder).
            </Header>
          </div>
          <div className="firstImageOnMuscleContainer">
            <div className="secondImageOnMuscle">
              <Image
                size="medium"
                src={require("./img/shoulderAn.jpg")}
                className="border"
              />
            </div>
            <div>
              <Image
                size="medium"
                src={require("./img/AnnotomyOfShoulder.jpg")}
                className="border"
              />
            </div>
          </div>
          <div className="GlenContainer">
            <Header inverted className="Glen">
              The Glenohumeral Joint
            </Header>
          </div>
          <div className="muslceSecondPara">
            <Header inverted size="large">
              The GHJ is a synovial, ball and socket joint, the articulating
              muscles of which include the supraspinatus, infraspinatus, teres
              minor and major, deltoid and subscapularis muscles. The
              supraspinatus, infraspinatus, teres minor and subscapularis work
              as fixators to keep the humerus in the glenoid fossa. The deltoid
              muscle contraction allows for flexion/extension, and abduction.
            </Header>
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

export default Muscles;
