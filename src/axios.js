import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-rsvp-amanda-ashley.firebaseio.com/"
});

export default instance;
