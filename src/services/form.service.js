import http from "../http-common";

class FormDataService {
  getForm(id, stage) {
    return http.get("/data/forms?id="+id+"&stage="+stage);
  }
  create(data) {
    return http.post("/data/forms", data);
  }
}

export default new FormDataService();
