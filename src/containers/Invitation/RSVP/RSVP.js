import React, { Component } from "react";
import { connect } from "react-redux";

import Spinner from "../../../components/UI/Spinner/Spinner";
import * as actions from "../../../store/actions/index";

class RSVP extends Component {
  state = {
    updatedForm: null,
    selected: null,
    updatedError: null,
    changed: false
  };

  componentDidMount() {
    this.props.onFetchEvent(this.props.token);
    this.props.onFetchRSVP(this.props.token, this.props.email);
  }

  radioChangeHandler = (attend, data) => {
    data.attend = attend;
    if (attend === "no") {
      data.rsvpCount = "0";
      this.setState({
        updatedError: ""
      });
    } else {
      if (data.rsvpCount === "" || data.rsvpCount === "0") {
        this.setState({
          updatedError: "Must be more than 0"
        });
      }
    }
    this.setState({
      updatedForm: data,
      changed: true
    });
  };

  rsvpChangeHandler = (event, data) => {
    event.preventDefault();
    if (event.target.value > data.guestCount) {
      this.setState({
        updatedError: "Guest count exceeded"
      });
    } else if (event.target.value < 1) {
      this.setState({
        updatedError: "Invalid guest count"
      });
    } else {
      this.setState({
        updatedError: ""
      });
    }

    data.rsvpCount = event.target.value;
    this.setState({
      updatedForm: data,
      changed: true
    });
  };

  messageChangeHandler = (event, data) => {
    event.preventDefault();
    data.message = event.target.value;
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

  logoutHandler = event => {
    this.props.history.push("/logout");
  };

  render() {
    let formMessage = null,
      formError = null,
      displayData = null,
      eventInfo = null,
      isOpenInvite = "is-open",
      isOpenRSVP = "is-open",
      rsvpForm = null;

    let data = {
      attend: " ",
      rsvpCount: "0",
      message: " "
    };

    if (this.props.isAuthenticated) {
      eventInfo = {
        ...this.props.event
      };
    }

    if (!this.state.updatedForm) {
      if (this.props.rsvpData) {
        data = {
          ...this.props.rsvpData
        };
      }

      isOpenInvite = "is-open";
      isOpenRSVP = "is-open";

      if (data.id) {
        if (this.props.error) {
          formError = true;
          formMessage = this.props.error;
        }
      } else {
        formError = true;
        formMessage = "Guest missing. Please contact Amanda/Ashley";
      }
    } else {
      data = this.state.updatedForm;
      if (this.state.updatedError) {
        formMessage = this.state.updatedError;
      }
    }

    if (!this.props.success) {
      rsvpForm = (
        <div
          className={`${isOpenRSVP} rsvp card--alt d-flex flex-items-center flex-justify-center text-center`}
          id="js-rsvp"
        >
          <div className="h1 text-edmondsans text-uppercase text-spacing">
            R.S.V.P.
          </div>
          <div className="f4 text-serif text-italic">
            Kindly respond by {eventInfo.rsvpDate}
          </div>
          <form>
            <div className="py-2">
              <div className="d-flex flex-justify-center">
                <span className="px-2 f2 d-flex flex-items-center">
                  <input
                    disabled={formError}
                    checked={data.attend === "yes" ? true : false}
                    onChange={() => this.radioChangeHandler("yes", data)}
                    type="radio"
                    name="attending"
                    value="accept"
                    id="attending-accept"
                  />
                  <label className="px-1 text-serif" htmlFor="attending-accept">
                    Accept
                  </label>
                </span>
                <span className="px-2 f2 d-flex flex-items-center">
                  <input
                    disabled={formError}
                    checked={data.attend === "no" ? true : false}
                    onChange={() => this.radioChangeHandler("no", data)}
                    type="radio"
                    name="attending"
                    value="decline"
                    id="attending-decline"
                  />
                  <label
                    className="px-1 text-serif"
                    htmlFor="attending-decline"
                  >
                    Decline
                  </label>
                </span>
              </div>
              <div className="f3">
                <input
                  disabled={data.attend !== "yes" ? true : false || formError}
                  onChange={e => this.rsvpChangeHandler(e, data)}
                  value={
                    data.rsvpCount === "" ? data.guestCount : data.rsvpCount
                  }
                  min="0"
                  max={data.guestCount}
                  className="form-number text-nunito"
                  type="number"
                  name="guest-number"
                  id="guest-number"
                />
                <label className="text-serif" htmlFor="guest-number">
                  of {data.guestCount} guests attending
                </label>
              </div>
            </div>
            <div className="py-2">
              <label className="d-flex f4 text-serif" htmlFor="more">
                Anything else you’d like to add? Please let
                <br />
                us know of any dietary requirements.
              </label>
              <textarea
                disabled={formError}
                onChange={e => this.messageChangeHandler(e, data)}
                value={data.message}
                className="form-textarea col-12 text-nunito"
                rows="2"
                name="message"
                id="message"
              ></textarea>
            </div>
            <div>
              <button
                disabled={
                  formError || !this.state.changed || this.state.updatedError
                }
                onClick={this.updateRsvpHandler}
                className="form-submit text-uppercase text-spacing text-edmondsans"
              >
                Submit
              </button>
              <div className="mx-auto"></div>
              <p className="form-error text-center">{formMessage}</p>
            </div>
          </form>
        </div>
      );
    } else {
      formError = false;
      if (data.attend === "yes") {
        rsvpForm = (
          <div
            className={`${isOpenRSVP} rsvp card--alt d-flex flex-items-center flex-justify-center text-center`}
            id="js-rsvp"
          >
            <div className="h1 text-edmondsans text-uppercase text-spacing">
              Thank you
            </div>
            <div className="f3 text-serif col-8">
              Can’t wait! We will be sending you an email shortly with more
              details.
            </div>
          </div>
        );
      } else {
        rsvpForm = (
          <div
            className={`${isOpenRSVP} rsvp card--alt d-flex flex-items-center flex-justify-center text-center`}
            id="js-rsvp"
          >
            <div className="h1 text-edmondsans text-uppercase text-spacing">
              Thank you
            </div>
            <div className="f3 text-serif col-8">
              Sorry that you won’t be able to make it. We’ll also be having a
              reception in Boston and will be sending out invitations
              separately.
            </div>
          </div>
        );
      }
    }

    if (this.props.loading) {
      displayData = <Spinner />;
    }

    if (!this.props.loading) {
      displayData = (
        <div>
          <div className="frame__header col-12 d-flex flex-items-center flex-justify-center">
            <span className="f2 text-nunito text-cream text-bold">
              Hi {data.name}!
            </span>
            <button
              className="f4 frame__exit text-pink text-edmondsans text-bold text-uppercase"
              onClick={this.logoutHandler}
            >
              <span>Sign Out</span> →
            </button>
          </div>
          <div
            className={`${isOpenInvite} invitation card--alt d-flex flex-items-center flex-justify-center text-center`}
            id="js-invitation"
          >
            <div className="f4 text-italic text-serif">
              Together with their families
            </div>
            <div className="h1 text-edmondsans text-uppercase">
              Ashley Ramsay
            </div>
            <svg
              className="invitation__and py-1"
              viewBox="0 0 29 32"
              height="1em"
              width="1em"
            >
              <title>AND</title>
              <path d="M8.46 22.923l1.537-0.134-3.907-9.252-1.537 0.134-2.241 9.79 1.551-0.136 0.558-2.708 3.019-0.264zM4.701 19.277l0.607-2.931c0.087-0.419 0.155-0.891 0.164-1.097l0.048 0.176c0.043 0.144 0.105 0.337 0.18 0.54l1.231 3.117z"></path>
              <path d="M23.974 18.139c2.652-0.232 4.361-2.163 4.088-5.278-0.287-3.278-2.296-4.473-5.316-4.209l-2.652 0.232 0.833 9.521zM23.834 16.849l-1.564 0.137-0.606-6.923 1.197-0.105c2.19-0.192 3.529 0.541 3.745 3.017 0.198 2.258-0.882 3.709-2.772 3.875z"></path>
              <path d="M17.176 10.853l0.833 9.521-1.401 0.123-0.203-2.326-3.729-4.265c-0.13-0.158-0.239-0.318-0.252-0.348l0.056 0.319c0.011 0.068 0.021 0.141 0.030 0.212l0.589 6.715-1.374 0.12-0.833-9.521 1.401-0.123 3.604 4.221 0.13 0.169c0.104 0.141 0.191 0.27 0.213 0.308l-0.058-0.396c-0.008-0.067-0.016-0.136-0.022-0.2l-0.386-4.407z"></path>
              <path d="M0.883 10.324c-0.221 0.083-0.332 0.329-0.249 0.55s0.329 0.332 0.55 0.249l21.561-8.116c0.464-0.175 0.307-0.868-0.188-0.824-2.971 0.26-5.755-0.254-8.36-1.542-0.211-0.104-0.467-0.018-0.572 0.193s-0.018 0.467 0.193 0.572c1.85 0.915 3.789 1.46 5.813 1.635l0.508 0.036z"></path>
              <path d="M26.971 21.93c0.221-0.083 0.332-0.329 0.249-0.55s-0.329-0.332-0.55-0.249l-21.561 8.116c-0.464 0.175-0.307 0.868 0.188 0.824 2.971-0.26 5.755 0.254 8.36 1.542 0.211 0.104 0.467 0.018 0.572-0.193s0.018-0.467-0.193-0.572c-1.85-0.915-3.789-1.46-5.813-1.635l-0.508-0.036z"></path>
            </svg>
            <div className="h1 text-edmondsans text-uppercase">
              Amanda Cheung
            </div>
            <div className="py-3 f3 text-serif lh-condensed">
              Invite you to celebrate
              <br />
              their marriage
            </div>
            <svg
              className="invitation__spacer"
              id="icon-invitation-spacer"
              viewBox="0 0 171 32"
              height="1em"
              width="1em"
            >
              <path d="M131.865 17.764c0 1.964-1.592 3.556-3.556 3.556s-3.556-1.592-3.556-3.556c0-1.964 1.592-3.556 3.556-3.556s3.556 1.592 3.556 3.556z"></path>
              <path d="M167.421 17.764c0 1.964-1.592 3.556-3.556 3.556s-3.556-1.592-3.556-3.556c0-1.964 1.592-3.556 3.556-3.556s3.556 1.592 3.556 3.556z"></path>
              <path d="M42.977 17.764c0 1.964-1.592 3.556-3.556 3.556s-3.556-1.592-3.556-3.556c0-1.964 1.592-3.556 3.556-3.556s3.556 1.592 3.556 3.556z"></path>
              <path d="M7.421 17.764c0 1.964-1.592 3.556-3.556 3.556s-3.556-1.592-3.556-3.556c0-1.964 1.592-3.556 3.556-3.556s3.556 1.592 3.556 3.556z"></path>
              <path d="M97.672 0.877c-4.939-2.206-11.387-0.171-13.745 4.537-0.022 0.057-0.089 0.057-0.112 0-2.358-4.708-8.806-6.742-13.745-4.537-5.308 2.377-7.856 8.434-3.665 15.599 2.906 4.96 7.979 8.72 16.763 15.279 0.402 0.309 0.983 0.309 1.386 0 8.784-6.56 13.857-10.331 16.763-15.279 4.202-7.165 1.665-13.222-3.643-15.599z"></path>
            </svg>
            <div className="f1 text-serif lh-condensed">
              {eventInfo.weddingDate}
            </div>
            <div className="f3 text-serif lh-condensed">
              at 3 in the afternoon
            </div>
            <div className="py-3 f4 text-serif text-italic">
              Sea to Sky Gondola | Squamish, Canada
            </div>
          </div>
          {rsvpForm}
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
    isAuthenticated: state.auth.token !== null,
    event: state.rsvp.event,
    rsvpData: state.rsvp.rsvpData,
    loading: state.rsvp.loading,
    error: state.rsvp.error,
    success: state.rsvp.updateSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRSVP: (token, email) => dispatch(actions.fetchRSVP(token, email)),
    onFetchEvent: token => dispatch(actions.fetchEvent(token)),
    onUpdateRSVP: (token, updatedData) =>
      dispatch(actions.updateRSVP(token, updatedData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RSVP);
