import React, {Component} from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./style.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
