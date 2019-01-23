import React, { Component } from "react";

import ClampText from "react-clamp-text";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Resize the window smaller to see the "Show More" link.</div>
        <div style={{ border: "1px solid #000", padding: 16 }}>
          <ClampText>
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
