import React, {Component} from "react";
import {
  Collapse,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Radio
} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import HomeCarousel1 from "../../Assets/Images/home-carousel-1.jpg";
import HomeCarousel2 from "../../Assets/Images/home-carousel-2.jpg";
import Product100 from "../../Assets/Images/product-100.jpg";
import Product200 from "../../Assets/Images/product-200.jpg";
import Product500 from "../../Assets/Images/product-500.jpg";
import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselIndex: 0,
      products: [{
        name: "Banana Chips - 100 gm",
        image: Product100,
        price: "65.00 INR"
      }, {
        name: "Banana Chips - 200 gm",
        image: Product200,
        price: "120.00 INR"
      }, {
        name: "Banana Chips - 500 gm",
        image: Product500,
        price: "290.00 INR"
      }]
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
    const {
      carouselIndex,
      products
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
              <GridList cellHeight={500} cols={3} spacing={16}>
                {
                  products.map((product, index) => (
                    <GridListTile key={index} cols={1}>
                      <img className="product-image" src={product.image} />
                      <GridListTileBar
                        actionIcon={
                          <IconButton className="product-details">
                            <ShoppingCart />
                          </IconButton>
                        }
                        title={
                          <span className="product-name">{product.name}</span>
                        }
                        subtitle={
                          <span className="product-price">{product.price}</span>
                        } />
                    </GridListTile>
                  ))
                }
              </GridList>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
