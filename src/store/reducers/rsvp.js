import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  rsvpData: null,
  loading: false,
  updateSuccess: false
};

const RSVPStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchRSVPSuccess = (state, action) => {
  return updateObject(state, {
    rsvpData: action.rsvpData,
    error: null,
    loading: false
  });
};

const updateRSVPSuccess = (state, action) => {
  return updateObject(state, {
    updateSuccess: true,
    loading: false
  });
};

const RSVPFail = (state, action) => {
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
    default:
      return state;
  }
};

export default reducer;
