import React, { Component } from "react";

import ClampText from "react-clamp-text";

export default class App extends Component {
  render() {
    const classes = {
      text: {
        fontWeight: 200
      },

      button: {
        display: 'block',
        marginTop: 16,
        textDecoration: "none"
      }
    };
    return (
      <div>
        <p>Resize the window smaller to see the "Show More" link.</p>
        <div className="container">
          <ClampText
            line={4}
            showMoreText="Expand"
            showLessText="Collapse"
            className="text"
            classes={classes}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ClampText>
        </div>
      </div>
    );
  }
}
