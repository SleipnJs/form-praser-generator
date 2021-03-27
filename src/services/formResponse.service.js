import http from "../http-common";

class FormDataService {
  create(data) {
    return http.post("/data/forms", data);
  }
}

export default new FormDataService();
