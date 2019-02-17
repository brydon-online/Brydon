import React, {Component} from "react";

class Messenger extends Component {
  componentDidMount() {
    window.fbAsyncInit = () => {
      FB.init({
        xfbml: true,
        version: 'v3.2'
      });
    };

    // Load the SDK asynchronously
    ((d, s, id) => {
      const fjs = d.getElementsByTagName(s)[0];
      let js;
      if (d.getElementById(id)) {return;}
      js = d.createElement(s);
      js.id = id;
      js.src = `//connect.facebook.net/en_US/sdk/xfbml.customerchat.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebookchat-jssdk');
  }

  render() {
    return (
      <div className="ui-messenger">
        <div id="fb-root"></div>
        <div
          className="fb-customerchat"
          page_id="422199175185434">
        </div>
      </div>
    );
  }
}

export default Messenger;
