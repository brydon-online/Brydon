import React from "react";
import {
  AppBar,
  Grid,
  Toolbar
} from "@material-ui/core";
import "./style.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="ui-footer">
        <AppBar position="static" color="default">
          <Toolbar className="header-toolbar">
            <Grid container justify="center">
              <Grid item className="footer-text">
                © 2018 Copyright Brydon
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Footer;
