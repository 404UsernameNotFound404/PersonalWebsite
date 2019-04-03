import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button
} from "semantic-ui-react";

class codingProgects extends Component {
  state = {};
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <div className="codingProgectsFullPage">
            {/* <div className="codingProgectsFullProgectConatiner1">
          <div className="codingProgectsFullProgectConatiner1TextContainer">
            <div className="codingProgectsFullProgectConatiner1Text">
              <h1 className="ui header inverted massive">Programing Humour</h1>
              <h1 className="ui header inverted large">
                Programing Humour is a reddit page. My and a friend built this
                website togehter. I was the one who did most of the disgn and
                styling well he did alot of the navigation. However I fully
                understand how to use that technolgy(Shown with this website
                working).
              </h1>
            </div>
          </div>
        </div> */}
            {/* Another progect */}
            <div className="codingProgectsFullProgectConatiner2">
              <div className="codingProgectsFullProgectConatiner2TextContainer">
                <div className="codingProgectsFullProgectConatiner1Text">
                  <h1 className="ui header inverted massive">Turtle Zone</h1>
                  <h1 className="ui header inverted medium">
                    This is an app I made with JA(Junior Achievement) at my
                    school. I was one of three programers on this game. I was
                    one of three programers on this game. I was responsible for
                    the generation of clouds, garbage, coins, and waves. I was
                    also responsible for music and sound effects. I did not
                    write the movement scripts, but I helped develop the idea of
                    pseudo code for it. The game was made to raise awareness
                    about garbage in the ocean. I did this through playing as
                    turtle floating through the ocean having the turtle avoid
                    garbage, and when eventually you get hit enough times by
                    garbage you get sucked up into the wave and it is game over.
                    The game helps raise awareness by giving a fact about
                    turtles or garbage in the ocean every time you have a game
                    over. The game also donates 100% of its add revenue to
                    charity.
                  </h1>
                </div>
              </div>
            </div>
            {/* Another progect */}
            <div className="codingProgectsFullProgectConatiner3">
              <div className="codingProgectsFullProgectConatiner1TextContainer">
                <div className="codingProgectsFullProgectConatiner1Text">
                  <h1 className="ui header inverted massive">This website</h1>
                  <h1 className="ui header inverted large">
                    I know it sounds silly, but I did not use wix or wordpress.
                    I built this website from the ground up using react,
                    semantic ui and css. I made this website to model who I am.
                    Simple and to the point no nonsense, but it still looks damn
                    good.
                  </h1>
                </div>
              </div>
            </div>
            {/* Another progect */}
            <div className="codingProgectsFullProgectConatiner4">
              <div className="codingProgectsFullProgectConatiner1TextContainer">
                <div className="codingProgectsFullProgectConatiner1Text">
                  <h1 className="ui header inverted massive">My GitHub</h1>
                  <h1 className="ui header inverted large">
                    This is my github. There are some video game I have created
                    on there and high school projects. All the projects on there
                    are entirely made by me, but I have also worked in a group
                    for other projects as you can see with my many commits to
                    other repositories.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <div className="codingProgectsFullPage">
            <div className="codingProgectsFullProgectConatiner2Mobile">
              <div className="codingProgectsFullProgectConatiner2TextContainerMobile">
                <div className="codingProgectsFullProgectConatiner1Text">
                  <h1 className="ui header inverted massive">Turtle Zone</h1>
                  <h1 className="ui header inverted medium">
                    This is an app I made with JA(Junior Achievement) at my
                    school. I was one of three programers on this game. I was
                    one of three programers on this game. I was responsible for
                    the generation of clouds, garbage, coins, and waves. I was
                    also responsible for music and sound effects. I did not
                    write the movement scripts, but I helped develop the idea of
                    pseudo code for it. The game was made to raise awareness
                    about garbage in the ocean. I did this through playing as
                    turtle floating through the ocean having the turtle avoid
                    garbage, and when eventually you get hit enough times by
                    garbage you get sucked up into the wave and it is game over.
                    The game helps raise awareness by giving a fact about
                    turtles or garbage in the ocean every time you have a game
                    over. The game also donates 100% of its add revenue to
                    charity.
                  </h1>
                </div>
              </div>
            </div>
            {/* Another progect */}
            <div className="codingProgectsFullProgectConatiner3Mobile">
              <div className="codingProgectsFullProgectConatiner2TextContainerMobile">
                <div className="codingProgectsFullProgectConatiner1Text">
                  <h1 className="ui header inverted massive">This website</h1>
                  <h1 className="ui header inverted medium">
                    I know it sounds silly, but I did not use wix or wordpress.
                    I built this website from the ground up using react,
                    semantic ui and css. I made this website to model who I am.
                    Simple and to the point no nonsense, but it still looks damn
                    good.
                  </h1>
                </div>
              </div>
            </div>
            {/* Another progect */}
            <div className="codingProgectsFullProgectConatiner4Mobile">
              <div className="codingProgectsFullProgectConatiner2TextContainerMobile">
                <div className="codingProgectsFullProgectConatiner1Text">
                  <h1 className="ui header inverted massive">My GitHub</h1>
                  <h1 className="ui header inverted medium">
                    This is my github. There are some video game I have created
                    on there and high school projects. All the projects on there
                    are entirely made by me, but I have also worked in a group
                    for other projects as you can see with my many commits to
                    other repositories.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
}

export default codingProgects;
