import React, {Component} from "react";
import {
  Grid
} from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import "./style.scss";

class FindUs extends Component {
  render() {
    return (
      <Grid container justify="center" className="ui-findus">
        <Grid item xs={11} sm={8} md={6}>
          <Grid container className="findus-title" justify="center">
            <Grid item>
              <p className="findus-heading">
                - FIND US -
              </p>
            </Grid>
          </Grid>
          <Grid container className="findus-title" justify="center">
            <Grid item>
              <p className="findus-address">
                No:5/25A Block A, A2,
                Om Builders Malargal Appartments,
                Sree Sumathinath residency Extension,
                Nanmangalam, Chennai 600129
              </p>
            </Grid>
          </Grid>
          <Grid container className="findus-map" justify="center">
            <Grid item style={{ height: '300px', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyC41_v2EG4B1hZI4yOFFiwgT2uktGVXQwM'}}
                defaultCenter={{lat: 13.09, lng: 80.27}}
                defaultZoom={11}></GoogleMapReact>
            </Grid>
          </Grid>
          <Grid container className="findus-title" justify="center">
            <Grid item>
              <p className="findus-heading">
                - CONTACT US -
              </p>
            </Grid>
          </Grid>
          <Grid container className="findus-title" justify="center">
            <Grid item>
              <p className="findus-address">
                For questions about any of our products, or help with placing
                your order, don't hesitate to contact us:
              </p>
              <p className="findus-address">
                Email:  info.brydononline@gmail.com  /  Phone:  +91-9840607329
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default FindUs;
