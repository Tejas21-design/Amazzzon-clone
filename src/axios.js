import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-d879b.cloudfunctions.net/api",
  //'http://localhost:5001/clone-d879b/us-central1/api'
});

export default instance;
