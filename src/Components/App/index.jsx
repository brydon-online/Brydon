import React from "react";
import Header from "../Header";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        My App
      </div>
    );
  }
}

export default App;
