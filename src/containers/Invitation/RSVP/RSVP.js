import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./RSVP.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import * as actions from "../../../store/actions/index";

class RSVP extends Component {
  state = {
    updatedForm: null,
    selected: null,
    updatedError: null
  };

  componentDidMount() {
    this.props.onFetchRSVP(this.props.token, this.props.email);
  }

  radioChangeHandler = (attend, data) => {
    data.attend = attend;
    if (attend === "no") {
      data.rsvpCount = "";
      this.setState({
        updatedError: ""
      });
    }
    this.setState({
      updatedForm: data
    });
  };

  rsvpChangeHandler = (event, data) => {
    event.preventDefault();
    if (event.target.value > data.guestCount || event.target.value < 0) {
      this.setState({
        updatedError: "rsvp Count must be > 0 and <= " + data.guestCount
      });
    } else {
      this.setState({
        updatedError: ""
      });
    }
    data.rsvpCount = event.target.value;
    this.setState({
      updatedForm: data
    });
  };

  updateRsvpHandler = event => {
    event.preventDefault();
    this.props.onUpdateRSVP(this.props.token, this.state.updatedForm);
  };

  render() {
    let data = null,
      errorMessage = null,
      displayData = null;

    if (!this.state.updatedForm) {
      data = {
        ...this.props.rsvpData
      };
      if (data.id) {
        errorMessage = this.props.error;
      } else {
        // errorMessage = "Guest missing.  Please contact Amanda/Ashley";
        errorMessage = "";
      }
    } else {
      data = this.state.updatedForm;
      errorMessage = this.state.updatedError;
    }

    if (this.props.loading) {
      displayData = <Spinner />;
    }

    if (!this.props.loading) {
      displayData = (
        <div style={{ textAlign: "center" }} className={classes.RSVP}>
          <p>{errorMessage}</p>
          <h1> RSVP </h1>
          <h2> Kindly reply by 1/31/2020 </h2>
          <h4>{this.state.dummy}</h4>
          <h3> Name: {data.name} </h3>
          <ul>
            <input
              type="radio"
              checked={data.attend === "yes"}
              onChange={() => this.radioChangeHandler("yes", data)}
            />
            Accepts gladly | Number Attending:{" "}
            <input
              type="text"
              size="1"
              disabled={data.attend !== "yes" ? true : false}
              onChange={e => this.rsvpChangeHandler(e, data)}
              value={data.rsvpCount}
            />{" "}
            of {data.guestCount}
          </ul>
          <ul>
            <input
              type="radio"
              checked={data.attend === "no"}
              onChange={() => this.radioChangeHandler("no", data)}
            />
            Declines Regretfully
          </ul>
          <button disabled={errorMessage} onClick={this.updateRsvpHandler}>
            SUBMIT
          </button>
        </div>
      );
    }
    return displayData;
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    email: state.auth.email,
    rsvpData: state.rsvp.rsvpData,
    loading: state.rsvp.loading,
    error: state.rsvp.error,
    success: state.rsvp.updateSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRSVP: (token, email) => dispatch(actions.fetchRSVP(token, email)),
    onUpdateRSVP: (token, updatedData) =>
      dispatch(actions.updateRSVP(token, updatedData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RSVP);
