import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {
  AppBar,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItemSecondaryAction,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import {Close, Menu} from "@material-ui/icons";
import BrydonLogo from "../../Assets/Images/brydon-logo.png";
import "./style.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
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
        route: "/clients",
        name: "Clients"
      }, {
        route: "/find-us",
        name: "Find us"
      }, {
        route: "/contact",
        name: "Contact"
      }]
    };
  }

  toggleDrawer = (drawer) => {
    this.setState({
      drawer: drawer
    });
  }

  render() {
    const {
      drawer,
      pages
    } = this.state;

    return (
      <div className="ui-header">
        <AppBar position="static" color="default">
          <Toolbar className="header-toolbar">
            <Grid container justify="center">
              <Grid item xs={12} sm={11} md={8}>
                <Grid container justify="center" alignItems="center">
                  <Hidden smUp>
                    <Grid item xs={11}>
                      <NavLink exact to="/" className="home-logo">
                        <img src={BrydonLogo} />
                      </NavLink>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton onClick={() => this.toggleDrawer(true)}>
                        <Menu className="home-mobile-menu"/>
                      </IconButton>
                    </Grid>
                  </Hidden>
                  <Hidden xsDown>
                    <Grid item>
                      <NavLink exact to="/" className="home-logo">
                        <img src={BrydonLogo} />
                      </NavLink>
                    </Grid>
                  </Hidden>
                  {
                    pages.map((page, key) => (
                      <Hidden xsDown key={page.route}>
                        <Grid item>
                          <NavLink exact to={page.route} className="page-link">
                            {page.name}
                          </NavLink>
                        </Grid>
                      </Hidden>
                    ))
                  }
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer className="home-drawer" open={drawer} anchor="top"
          onClose={() => this.toggleDrawer(false)}>
          <List className="home-menu-list">
            <ListItem button>
              <Grid container justify="center">
                <Grid item>
                  <img className="menu-logo" src={BrydonLogo} />
                </Grid>
              </Grid>
              <ListItemSecondaryAction>
                <Close
                  onClick={() => this.toggleDrawer(false)}
                  className="menu-icon" />
              </ListItemSecondaryAction>
            </ListItem>
            {
              pages.map((page, index) => (
                <ListItem button key={index} className="home-menu">
                  <NavLink className="page-link" exact to={page.route}
                    onClick={() => this.toggleDrawer(false)}>
                    {page.name}
                  </NavLink>
                </ListItem>
              ))
            }
          </List>
        </Drawer>
      </div>
    );
  }
}

export default Header;
