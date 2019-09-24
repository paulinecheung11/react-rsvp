import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  rsvpData: null,
  loading: false
};

const RSVPStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchRSVPSuccess = (state, action) => {
  return updateObject(state, {
    rsvpData: action.rsvpData,
    error: null,
    updateSuccess: null,
    loading: false
  });
};

const updateRSVPSuccess = (state, action) => {
  return updateObject(state, {
    rsvpData: action.rsvpData,
    updateSuccess: true,
    error: false,
    loading: false
  });
};

const RSVPFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const fetchEventDatesStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchEventDatesSuccess = (state, action) => {
  return updateObject(state, {
    eventDates: action.eventDates,
    error: null,
    updateSuccess: null,
    loading: false
  });
};

const fetchEventDatesFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RSVP_START:
      return RSVPStart(state, action);
    case actionTypes.FETCH_RSVP_SUCCESS:
      return fetchRSVPSuccess(state, action);
    case actionTypes.UPDATE_RSVP_SUCCESS:
      return updateRSVPSuccess(state, action);
    case actionTypes.RSVP_FAIL:
      return RSVPFail(state, action);
    case actionTypes.FETCH_EVENT_DATES_START:
      return fetchEventDatesStart(state, action);
    case actionTypes.FETCH_EVENT_DATES_SUCCESS:
      return fetchEventDatesSuccess(state, action);
    case actionTypes.FETCH_EVENT_DATES_FAIL:
      return fetchEventDatesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
