import React, {Component} from "react";
import {
  Grid,
  Paper
} from "@material-ui/core";
import AmazonLogo from "../../Assets/Images/amazon-logo.png";
import NilgirisLogo from "../../Assets/Images/nilgiris-logo.jpg";
import DelhiveryLogo from "../../Assets/Images/delhivery-logo.jpg";
import PaytmLogo from "../../Assets/Images/paytm-logo.png";
import "./style.scss";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [{
        label: "Our E-Commerce site partner",
        image: AmazonLogo
      }, {
        label: "Our Retail shops partner",
        image: NilgirisLogo
      }, {
        label: "Our Delivery partner",
        image: DelhiveryLogo
      }, {
        label: "Our Payment partner",
        image: PaytmLogo
      }]
    };
  }

  render() {
    const {partners} = this.state;

    return (
      <Grid container justify="center" className="ui-clients">
        <Grid item xs={11} sm={8} md={6}>
          <Grid container className="clients-head">
            <Grid item xs={12}>
              <h1 className="clients-title">
                BRYDON
              </h1>
            </Grid>
            <Grid item xs={12}>
              <p className="clients-brief">
                Repacking and Resale of Banana chips
              </p>
            </Grid>
          </Grid>
          <Grid container className="clients-title" justify="center">
            <Grid item>
              <p className="clients-heading">
                - OUR CLIENTS -
              </p>
            </Grid>
          </Grid>
          {
            partners.map((partner, index) => (
              <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                  <Paper elevation={0} className="client-partners">
                    <p className="partners-title">
                      {partner.label}
                    </p>
                    <img className="partners-image"
                      src={partner.image} />
                  </Paper>
                </Grid>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    );
  }
}

export default Clients;
