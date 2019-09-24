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
    this.props.onFetchEventDates(this.props.token);
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
    this.setState({
      updatedError: "",
      updatedForm: null
    });
  };

  render() {
    let data = null,
      formMessage = null,
      formError = null,
      displayData = null;

    let dates = {
      ...this.props.eventDates
    };

    if (!this.state.updatedForm) {
      data = {
        ...this.props.rsvpData
      };

      if (data.id) {
        if (this.props.error) {
          formError = true;
          formMessage = this.props.error;
        } else {
          if (this.props.success) {
            formError = false;
            if (data.attend === "yes") {
              formMessage = "Thank you for attending the wedding";
            } else {
              formMessage = "Sorry that you won't be attending";
            }
          }
        }
      } else {
        formError = true;

        formMessage = "Guest missing.  Please contact Amanda/Ashley";
      }
    } else {
      data = this.state.updatedForm;
      if (this.state.updatedError) {
        formError = true;
        formMessage = this.state.updatedError;
      }
    }

    if (this.props.loading) {
      displayData = <Spinner />;
    }

    if (!this.props.loading) {
      displayData = (
        <div style={{ textAlign: "center" }} className={classes.RSVP}>
          <p>{formMessage}</p>
          <h1> RSVP </h1>
          <h2> Kindly reply by {dates.rsvpDate} </h2>
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
          <button disabled={formError} onClick={this.updateRsvpHandler}>
            SUBMIT
          </button>
        </div>
      );
    }
    return displayData;
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps", state.rsvp.eventDates);
  return {
    token: state.auth.token,
    email: state.auth.email,
    eventDates: state.rsvp.eventDates,
    rsvpData: state.rsvp.rsvpData,
    loading: state.rsvp.loading,
    error: state.rsvp.error,
    success: state.rsvp.updateSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRSVP: (token, email) => dispatch(actions.fetchRSVP(token, email)),
    onFetchEventDates: token => dispatch(actions.fetchEventDates(token)),
    onUpdateRSVP: (token, updatedData) =>
      dispatch(actions.updateRSVP(token, updatedData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RSVP);
