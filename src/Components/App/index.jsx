import React from "react";
import Header from "../Header";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
