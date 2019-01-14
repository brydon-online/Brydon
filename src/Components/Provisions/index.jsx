import React, {Component} from "react";
import {
  Collapse,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Hidden,
  IconButton
} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import HomeCarousel1 from "../../Assets/Images/home-carousel-1.jpg";
import Product100 from "../../Assets/Images/product-100.jpg";
import Product200 from "../../Assets/Images/product-200.jpg";
import Product500 from "../../Assets/Images/product-500.jpg";
import "./style.scss";

class Provisions extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const {products} = this.state;

    return (
      <Grid container justify="center" className="ui-provisions">
        <Grid item xs={11} sm={8} md={6}>
          <Grid container className="provisions-title" justify="center">
            <Grid item>
              <p className="provisions-heading">
                - SHOP WITH US -
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container justify="center" className="provisions-products">
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

export default Provisions;
