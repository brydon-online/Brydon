import React, {Component} from "react";
import {
  Collapse,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Hidden,
  IconButton,
  Radio
} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {ShoppingCart} from "@material-ui/icons";
import HomeCarousel1 from "../../Assets/Images/home-carousel-1.jpg";
import HomeCarousel2 from "../../Assets/Images/home-carousel-2.jpg";
import Product100 from "../../Assets/Images/product-100.jpg";
import Product200 from "../../Assets/Images/product-200.jpg";
import Product500 from "../../Assets/Images/product-500.jpg";
import BrydonLogo from "../../Assets/Images/brydon-logo.png";
import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselIndex: 0,
      products: [{
        name: "Banana Chips - 100 gm",
        image: Product100,
        link: "https://www.instamojo.com/brydon/nendran-spicy-banana-chips-100gm/?ref=store",
        mrp: "65.00 INR",
        price: "45.00 INR"
      }, {
        name: "Banana Chips - 200 gm",
        image: Product200,
        link: "https://www.instamojo.com/brydon/nendran-spicy-banana-chips-200gm/?ref=store",
        mrp: "120.00 INR",
        price: "90.00 INR"
      }, {
        name: "Banana Chips - 500 gm",
        image: Product500,
        link: "https://www.instamojo.com/brydon/nendran-spicy-banana-chips-500gm/?ref=store",
        mrp: "290.00 INR",
        price: "225.00 INR"
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

  getProduct = (product, index) => (
    <GridListTile key={index} cols={1}>
      <img className="product-image" src={product.image} />
      <GridListTileBar
        actionIcon={
          <IconButton href={product.link} className="product-details">
            <ShoppingCart />
          </IconButton>
        }
        title={
          <span className="product-name">{product.name}</span>
        }
        subtitle={
          <div>
            <span className="product-price mrp-price">{product.mrp}</span>
            <span className="product-price">{product.price}</span>
          </div>
        } />
    </GridListTile>
  )

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
                  <div className="home-logo-container">
                    <img className="home-logo" src={BrydonLogo} />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6}>
                      <p className="home-brief">Banana <br/>Chips</p>
                    </Grid>
                    <Grid item xs={6}>
                      <NavLink exact to="/provisions" className="home-navigation">
                        Start <br/>Shopping
                      </NavLink>
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
            <Grid item xs={11} sm={11} md={9}>
              <Hidden xsDown>
                <GridList cellHeight={500} cols={3} spacing={16}>
                  {
                    products.map((product, index) => (
                      this.getProduct(product, index)
                    ))
                  }
                </GridList>
              </Hidden>
              <Hidden smUp>
                <GridList cellHeight={500} cols={1} spacing={16}>
                  {
                    products.map((product, index) => (
                      this.getProduct(product, index)
                    ))
                  }
                </GridList>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
