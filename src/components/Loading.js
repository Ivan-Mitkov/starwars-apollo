import React from "react";
import { BallBeat } from "react-pure-loaders";

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BallBeat color={"#123abc"} loading={this.state.loading} />
      </div>
    );
  }
}

export default AwesomeComponent;
