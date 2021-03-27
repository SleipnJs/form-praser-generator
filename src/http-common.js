import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/post-listener/",
  headers: {
    "Content-type": "application/json"
  }
});
