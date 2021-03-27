import http from "../http-common";

class FormDataService {
  send(data) {
    alert(data)
    return http.post("/", data);
  }
}

export default new FormDataService();
