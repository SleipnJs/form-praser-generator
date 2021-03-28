import http from "../http-common";

class FormResponseDataService {
  send(formId, data) {
    return http.post("/data/formsResponse?formId="+formId, data);
  }

  get(formId) {
    return http.get("/data/formsResponse?id="+formId);
  }
}

export default new FormResponseDataService();
