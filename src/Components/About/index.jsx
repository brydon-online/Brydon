import React, {Component} from "react";
import {
  Button,
  Grid,
  Paper
} from "@material-ui/core";
import AboutDescription from "../../Assets/Images/about-description.jpg";
import "./style.scss";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: [{
        title: "Brydon Products",
        content: `Brydon has a delicious,spicy and crispy "Banana Chips"
          that are packaged and sold in many retail, bakery and
          E-commerce site (Amazon). Nendran Banana Chips are
          prepared fresh with Selective Unripe Nendran  Banana,
          which is sliced, processed and fried with fresh and Pure
          Groundnut oil and the spicy black pepper and red chilli
          are added along with the adequate salt.`
      }, {
        title: "Our Mission",
        content: `We aim to deliver value to our consumers, employees and
        society. Through continuous innovation and research, we
        look forward to creating an ever-growing range of
        appealing snack products and reach our cherished
        consumers without compromising the quality of snacks.`
      }, {
        title: "Our Vision",
        content: `We aim to deliver value to our consumers, employees and
          society. Through continuous innovation and research, we
          look forward to creating an ever-growing range of
          appealing snack products and reach our cherished
          consumers without compromising the quality of snacks.`
      }]
    };
  }
  render() {
    const {about} = this.state;

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
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container justify="center">
            <Grid item xs={11} sm={10} md={9}>
              <Grid container justify="space-around" spacing={16}>
                {
                  about.map((info, index) => (
                    <Grid key={index} item xs={12} sm={4} md={4}>
                      <Paper elevation={0} className="about-brief">
                        <p className="brief-title">
                          {info.title}
                        </p>
                        <p className="brief-description">
                          {info.content}
                        </p>
                      </Paper>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default About;
