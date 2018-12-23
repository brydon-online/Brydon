import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
import "./style.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [{
        route: "/",
        name: "Home"
      }, {
        route: "/about",
        name: "About"
      }, {
        route: "/provisions",
        name: "Provisions"
      }, {
        route: "/find-us",
        name: "Fins us"
      }]
    };
  }
  render() {
    const {pages} = this.state;

    return (
      <div className="ui-header">
        <AppBar position="static" color="default">
          <Toolbar className="header-toolbar">
            <Grid container justify="center">
              <Grid item md={8}>
                <Grid container justify="center" alignItems="center">
                  {
                    pages.map((page) => (
                      <Grid item key={page.route}>
                        <NavLink to={page.route} className="page-link">
                          {page.name}
                        </NavLink>
                      </Grid>
                    ))
                  }
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
