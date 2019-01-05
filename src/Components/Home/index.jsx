import React, {Component} from "react";
import {
  Button,
  Grid,
  GridList,
  GridListTile,
  Collapse,
  Radio
} from "@material-ui/core";
import HomeCarousel1 from "../../Assets/Images/home-carousel-1.jpg";
import HomeCarousel2 from "../../Assets/Images/home-carousel-2.jpg";
import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselIndex: 0,
      productIndex: ''
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   let {carouselIndex} = this.state;
    //   carouselIndex += 1;
    //   this.setState({
    //     carouselIndex: carouselIndex % 2
    //   });
    // }, 5000);
  }

  handleCarouselChange = (event, index) => {
    this.setState({
      carouselIndex: index
    });
  }

  handleProductChange = (event, index) => {
    this.setState({
      productIndex: index
    });
  }

  render() {
    const {
      carouselIndex,
      productIndex
    } = this.state;

    return (
      <Grid container className="ui-home">
        <Grid item>
          {
            carouselIndex === 0
            && <img className="carousel-image animated fadeIn" src={HomeCarousel1} />
          }
          {
            carouselIndex === 1
            && <img className="carousel-image animated fadeIn" src={HomeCarousel2} />
          }
          <Grid container
            className="carousel-select-container"
            justify="center">
            <Grid item>
              <Radio
                checked={carouselIndex === 0}
                onChange={(event) => this.handleCarouselChange(event, 0)}
                value={0}
                color="default"
                className={`carousel-select ${carouselIndex === 0 ? 'checked' : ''}`}
              />
            </Grid>
            <Grid item>
              <Radio
                checked={carouselIndex === 1}
                onChange={(event) => this.handleCarouselChange(event, 1)}
                value={0}
                color="default"
                className={`carousel-select ${carouselIndex === 1 ? 'checked' : ''}`}
              />
            </Grid>
          </Grid>
          <Grid container
            className="home-description-container"
            justify="center">
            <Grid item xs={12} sm={8} md={4}>
              <Grid container className="home-description" justify="center">
                <Grid item xs={12}>
                  <h1 className="home-title">
                    BRYDON
                  </h1>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6}>
                      <p className="home-brief">
                        Banana Chips
                      </p>
                    </Grid>
                    <Grid item xs={6}>
                      <p className="home-navigation">Start Shopping</p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <p className="home-heading">
                - OUR SPECIAL RECOMMENDATIONS -
              </p>
            </Grid>
          </Grid>
          <Grid container justify="center" className="home-products">
            <Grid item xs={11} sm={10} md={9}>
              <GridList cellHeight={400} cols={3} spacing={16}>
                <GridListTile cols={1}>
                  <img
                    onMouseOver={(event) => this.handleProductChange(event, 0)}
                    onMouseOut={(event) => this.handleProductChange(event, "")}
                    src={HomeCarousel1} />
                </GridListTile>
                <GridListTile cols={1}>
                  <img
                    onMouseOver={(event) => this.handleProductChange(event, 1)}
                    onMouseOut={(event) => this.handleProductChange(event, "")}
                    src={HomeCarousel1} />
                </GridListTile>
                <GridListTile cols={1}>
                  <img
                    onMouseOver={(event) => this.handleProductChange(event, 2)}
                    onMouseOut={(event) => this.handleProductChange(event, "")}
                    src={HomeCarousel1} />
                </GridListTile>
              </GridList>
              <Grid container spacing={16}>
                <Grid item xs={4} sm={4} md={4}>
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
                <Grid item xs={4} sm={4} md={4}>
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
                <Grid item xs={4} sm={4} md={4}>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
