import React, {Component} from "react";
import {
  Button,
  Collapse,
  Grid,
  GridList,
  GridListTile
} from "@material-ui/core";
import HomeCarousel1 from "../../Assets/Images/home-carousel-1.jpg";
import "./style.scss";

class Provisions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productIndex: ''
    };
  }

  handleProductChange = (event, index) => {
    this.setState({
      productIndex: index
    });
  }

  render() {
    const {productIndex} = this.state;

    return (
      <Grid container justify="center" className="ui-provisions">
        <Grid item xs={11} sm={8} md={6}>
          <Grid container className="provisions-head">
            <Grid item xs={12}>
              <h1 className="provisions-title">
                BRYDON
              </h1>
            </Grid>
            <Grid item xs={12}>
              <p className="provisions-brief">
                Repacking and Resale of Banana chips
              </p>
            </Grid>
          </Grid>
          <Grid container className="provisions-title" justify="center">
            <Grid item>
              <p className="provisions-heading">
                - SHOP WITH US -
              </p>
            </Grid>
          </Grid>
          <Grid container className="provisions-title" justify="center">
            <Grid item>
              <p className="provisions-description">
                I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container justify="center" className="provisions-products">
            <Grid item xs={11} sm={10} md={9}>
              <GridList cellHeight={400} cols={4} spacing={16}>
                <GridListTile cols={1}>
                  <img
                    className="product-image"
                    onMouseOver={(event) => this.handleProductChange(event, 0)}
                    onMouseOut={(event) => this.handleProductChange(event, '')}
                    src={HomeCarousel1} />
                </GridListTile>
                <GridListTile cols={1}>
                  <img
                    className="product-image"
                    onMouseOver={(event) => this.handleProductChange(event, 1)}
                    onMouseOut={(event) => this.handleProductChange(event, '')}
                    src={HomeCarousel1} />
                </GridListTile>
                <GridListTile cols={1}>
                  <img
                    className="product-image"
                    onMouseOver={(event) => this.handleProductChange(event, 2)}
                    onMouseOut={(event) => this.handleProductChange(event, '')}
                    src={HomeCarousel1} />
                </GridListTile>
                <GridListTile cols={1}>
                  <img
                    className="product-image"
                    onMouseOver={(event) => this.handleProductChange(event, 3)}
                    onMouseOut={(event) => this.handleProductChange(event, '')}
                    src={HomeCarousel1} />
                </GridListTile>
              </GridList>
              <Grid container spacing={16}>
                <Grid className="product-details" item xs={3} sm={3} md={3}
                  onMouseOver={(event) => this.handleProductChange(event, 0)}
                  onMouseOut={(event) => this.handleProductChange(event, '')}>
                  <Collapse in={productIndex === 0} mountOnEnter unmountOnExit>
                    <Grid container className="product-details-container"
                      justify="center" alignItems="center">
                      <Grid item>
                        <Button variant="outlined" className="view-details">
                          VIEW DETAILS
                        </Button>
                      </Grid>
                    </Grid>
                  </Collapse>
                  <Collapse in={productIndex !== 0} mountOnEnter unmountOnExit>
                    <div>
                      <p className="product-name">Banana Chips</p>
                      <p className="product-price">123.23 INR</p>
                    </div>
                  </Collapse>
                </Grid>
                <Grid className="product-details" item xs={3} sm={3} md={3}
                  onMouseOver={(event) => this.handleProductChange(event, 1)}
                  onMouseOut={(event) => this.handleProductChange(event, '')}>
                  <Collapse in={productIndex === 1} mountOnEnter unmountOnExit>
                    <Grid container className="product-details-container"
                      justify="center" alignItems="center">
                      <Grid item>
                        <Button variant="outlined" className="view-details">
                          VIEW DETAILS
                        </Button>
                      </Grid>
                    </Grid>
                  </Collapse>
                  <Collapse in={productIndex !== 1} mountOnEnter unmountOnExit>
                    <div>
                      <p className="product-name">Banana Chips</p>
                      <p className="product-price">123.23 INR</p>
                    </div>
                  </Collapse>
                </Grid>
                <Grid className="product-details" item xs={3} sm={3} md={3}
                  onMouseOver={(event) => this.handleProductChange(event, 2)}
                  onMouseOut={(event) => this.handleProductChange(event, '')}>
                  <Collapse in={productIndex === 2} mountOnEnter unmountOnExit>
                    <Grid container className="product-details-container"
                      justify="center" alignItems="center">
                      <Grid item>
                        <Button variant="outlined" className="view-details">
                          VIEW DETAILS
                        </Button>
                      </Grid>
                    </Grid>
                  </Collapse>
                  <Collapse in={productIndex !== 2} mountOnEnter unmountOnExit>
                    <div>
                      <p className="product-name">Banana Chips</p>
                      <p className="product-price">123.23 INR</p>
                    </div>
                  </Collapse>
                </Grid>
                <Grid className="product-details" item xs={3} sm={3} md={3}
                  onMouseOver={(event) => this.handleProductChange(event, 3)}
                  onMouseOut={(event) => this.handleProductChange(event, '')}>
                  <Collapse in={productIndex === 3} mountOnEnter unmountOnExit>
                    <Grid container className="product-details-container"
                      justify="center" alignItems="center">
                      <Grid item>
                        <Button variant="outlined" className="view-details">
                          VIEW DETAILS
                        </Button>
                      </Grid>
                    </Grid>
                  </Collapse>
                  <Collapse in={productIndex !== 3} mountOnEnter unmountOnExit>
                    <div>
                      <p className="product-name">Banana Chips</p>
                      <p className="product-price">123.23 INR</p>
                    </div>
                  </Collapse>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Provisions;
