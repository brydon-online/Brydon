import React, {Component} from "react";
import {
  Grid,
  Radio
} from "@material-ui/core";
import HomeCarousel1 from "../../Assets/Images/home-carousel-1.jpg";
import HomeCarousel2 from "../../Assets/Images/home-carousel-2.jpg";
import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselIndex: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      let {carouselIndex} = this.state;
      carouselIndex += 1;
      this.setState({
        carouselIndex: carouselIndex % 2
      });
    }, 5000);
  }

  handleCarouselChange = (event, index) => {
    this.setState({
      carouselIndex: index
    });
  }

  render() {
    const {carouselIndex} = this.state;

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
        </Grid>
      </Grid>
    );
  }
}

export default Home;
