import http from "../http-common";

class FormResponseDataService {
  send(formId, data) {
    return http.post("/data/formsResponse?formId="+formId, data);
  }
}

export default new FormResponseDataService();
