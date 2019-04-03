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
import Injury from "./Injury";

class InjuryPage extends Component {
  state = {};
  nextPage = () => {
    document.getElementById("tweet").scrollIntoView();
  };
  backPage = () => {
    document.getElementById("Movement").scrollIntoView();
  };
  render() {
    return (
      <div className="InjuryFullPage" id="InjuryPage">
        <div className="layerInjury">
          <div className="InjuryPageTitleContainer">
            <Header className="InjuryPageTitle">Common Injuries</Header>
          </div>
          <div className="injuryContainer">
            <Injury
              name={" Rotator Cuff Tears"}
              Discription={
                "This injury is not always the same muscle in the rotator cuff, but the result is the same. The bursa a sack of synovial fluid (a lubricant in the joint of acromion of the humerus and rotator cuff) in the shoulder becomes inflamed, and causes a lot of pain, and reduces movement."
              }
              UsualCauses={
                "This injury is not caused by one trauma, most commonly it is from overuse of the rotator cuff. The movement that causes the overuse is any movement above the shoulders with your arms. This is why the most commonly affected people are those who compete in sports, or there  job requires arm movements above the shoulder."
              }
              Treatment={
                "This injury rarely ever requires surgery for the average person. Because with physiotherapy and pain medication you can regain most of your movement. However if you need a full range of motion, surgery is your best option. For the option of no surgery there are many things you can do. The first priority should be pain relief which means anti-inflammatory drugs. The next is strengthening the shoulder which should be instructed by a physiotherapist, but if that is not a option then you should strengthen your rotator cuff with exercises like reverse fly and high to low rows. This should improve your range of motion to the point where it would not affect the average person."
              }
              Prevention={
                "The simple solution is avoid arm movements above the shoulder. However if you have to repeatedly do that motion then make sure to add shoulder strengthening, and specifically rotary cuff strengthening exercises to your routine. The last thing you can do is practice proper posture."
              }
            />
            <Injury
              name={"Shoulder Instability"}
              Discription={
                "This is when the integrity of the shoulder structure (Bones, muscles, ligaments, tendons) is lessened and the humerus isn’t held sufficiently to the socket. This decrease the shoulder’s functionality and cause pain. It is important to strengthen the shoulder because of it’s high degree of mobility and therefore low level of stability."
              }
              UsualCauses={
                "An unstable shoulder is typically caused by an injury (trauma) that has damaged the ligaments. This isn’t at all rare because of the shoulder’s high degree of mobility, resulting in a lessened degree of mobility. Other significant contributions include genetic and congenital predisposition as well as repetitive strain (Stress)."
              }
              Treatment={
                " Almost always non-surgical, typically done with physiotherapy and muscle specific strengthening exercises, although several months are necessary for noticeable progress. Other treatment options include anti-inflammatory injections (Cortisone). Surgical repair can include ligament tightening (eg. Bankart Repair)"
              }
              Prevention={
                "The main suggestion is to properly exercise the shoulder and upper body in order to strengthen the fixators and synergists in the shoulder. Regular visits to one’s physiotherapist are also recommended. Surgical operations can be done in order to prevent instability by strengthening the ligaments that maintain the shoulder’s position in the joint."
              }
            />
            {/* <Injury
              name={"Name 3"}
              Discription={
                "D3 blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
              }
              UsualCauses={
                "U3 blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
              }
              Treatment={
                "T3 blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
              }
              Prevention={
                "P3 blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
              }
            /> */}
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
    );
  }
}

export default InjuryPage;
