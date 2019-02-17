import React, {Component} from "react";
import {
  Button,
  Chip,
  Grid,
  TextField
} from "@material-ui/core";
import {
  init as EmailInit,
  send as EmailSend
} from "emailjs-com";
import "./style.scss";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: ""
    };
  }

  componentDidMount() {
    EmailInit("user_9bEV6ZmgcLLKtNg6Mj5oK");
  }

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    EmailSend(
      "gmail",
      "brydon_online",
      {
        from_name: this.state.name,
        from_email: this.state.email,
        message_html: "<p>" + this.state.message + "</p>"
      }
    );
    this.setState({
      sent: true
    });
    setTimeout(() => {
      this.setState({
        name: "",
        email: "",
        message: "",
        sent: false
      });
    }, 3000);
  }

  render() {
    const {
      name,
      email,
      message,
      sent
    } = this.state;

    return (
      <Grid container justify="center" className="ui-contact">
        <Grid item xs={11} sm={8} md={6}>
          <Grid container justify="center">
            <Grid item>
              <p className="contact-heading">
                - CONTACT US -
              </p>
            </Grid>
          </Grid>
          <form onSubmit={this.handleSubmit}>
            <Grid container direction="column">
              <Grid item>
                <TextField
                  label="Name"
                  autoFocus
                  required
                  value={name}
                  onChange={(event) => this.handleChange(event, "name")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  />
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  required
                  value={email}
                  type="email"
                  onChange={(event) => this.handleChange(event, "email")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  />
              </Grid>
              <Grid item>
                <TextField
                  label="Message"
                  required
                  multiline
                  rows="4"
                  value={message}
                  onChange={(event) => this.handleChange(event, "message")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  />
              </Grid>
              <Grid item>
                <Grid container justify="flex-end">
                  <Grid item>
                    {
                      sent &&
                      <Button variant="contained" color="primary">
                        Your Enquiry is sent!!!
                      </Button>
                    }
                    {
                      !sent &&
                      <Button type="submit" variant="contained" color="primary">
                        Submit
                      </Button>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default Contact;
