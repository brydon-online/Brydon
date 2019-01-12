import React, {Component} from "react";
import {
  Collapse,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
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

  render() {
    const {products} = this.state;

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

export default Provisions;
