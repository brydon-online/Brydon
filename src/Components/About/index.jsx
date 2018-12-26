import React, {Component} from "react";
import {
  Grid
} from "@material-ui/core";
import AboutDescription from "../../Assets/Images/about-description.jpg";
import "./style.scss";

class About extends Component {
  render() {
    return (
      <Grid container justify="center" className="ui-about">
        <Grid item xs={11} sm={8} md={6}>
          <Grid container className="about-head">
            <Grid item xs={12}>
              <h1 className="about-title">
                BRYDON
              </h1>
            </Grid>
            <Grid item xs={12}>
              <p className="about-brief">
                Repacking and Resale of Banana chips
              </p>
            </Grid>
          </Grid>
          <Grid container className="about-title" justify="center">
            <Grid item>
              <p className="about-heading">
                - ABOUT US -
              </p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <img className="about-image" src={AboutDescription} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <p className="about-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default About;
