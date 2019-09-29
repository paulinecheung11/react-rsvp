import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchRSVPSuccess = rsvpData => {
  return {
    type: actionTypes.FETCH_RSVP_SUCCESS,
    rsvpData: rsvpData
  };
};

export const updateRSVPSuccess = rsvpData => {
  return {
    type: actionTypes.UPDATE_RSVP_SUCCESS,
    rsvpData: rsvpData
  };
};

export const RSVPFail = error => {
  return {
    type: actionTypes.RSVP_FAIL,
    error: error
  };
};

export const RSVPStart = () => {
  return {
    type: actionTypes.RSVP_START
  };
};

export const fetchEventStart = () => {
  return {
    type: actionTypes.FETCH_EVENT_START
  };
};

export const fetchEventSuccess = event => {
  return {
    type: actionTypes.FETCH_EVENT_SUCCESS,
    event: event
  };
};

export const fetchEventFail = error => {
  return {
    type: actionTypes.FETCH_EVENT_FAIL,
    error: error
  };
};

export const fetchRSVP = (token, email) => {
  return dispatch => {
    dispatch(RSVPStart());
    const queryParams =
      "?auth=" + token + '&orderBy="email"&equalTo="' + email + '"';
    axios
      .get("/guests.json" + queryParams)
      .then(res => {
        const fetchedRsvp = [];
        for (let key in res.data) {
          fetchedRsvp.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchRSVPSuccess(fetchedRsvp[0]));
      })
      .catch(err => {
        dispatch(RSVPFail(err.response.data.error));
      });
  };
};

export const fetchEvent = token => {
  return dispatch => {
    dispatch(fetchEventStart());
    axios
      .get("/event.json?auth=" + token)
      .then(res => {
        dispatch(fetchEventSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchEventFail(err.response.data.error));
      });
  };
};

export const updateRSVP = (token, updatedData) => {
  return dispatch => {
    dispatch(RSVPStart());

    const data = {
      ...updatedData
    };

    const id = data.id;
    const updatedForm = {
      name: data.name,
      email: data.email,
      password: data.password,
      guestCount: data.guestCount,
      attend: data.attend,
      rsvpCount: data.rsvpCount,
      initialEmailDate: data.initialEmailDate,
      followUpEmailDate: data.followUpEmailDate,
      message: data.message
    };

    axios
      .put("/guests/" + id + ".json?auth=" + token, updatedForm)
      .then(res => {
        dispatch(updateRSVPSuccess(updatedData));
      })
      .catch(err => {
        dispatch(RSVPFail(err.response.data.error));
      });
  };
};
