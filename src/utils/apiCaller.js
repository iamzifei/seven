import config from "config";

export const REQUEST_GET = "get";
export const REQUEST_POST = "post";
export const REQUEST_DELETE = "delete";
export const REQUEST_PUT = "put";

const API_URL = config.baseUrl;

// convert object to request string for GET request
const stringtifyRequestBody = body => {
  const ar = [];
  Object.keys(body).forEach(propName => {
    ar.push(`${propName}=${body[propName]}`);
  });
  return ar.length ? `?${ar.join("&")}` : "";
};

export const callApi = (
  endpoint,
  method = REQUEST_GET,
  body,
  headers,
  isJsonResponse = true
) => {
  const reqParam =
    method === REQUEST_GET && body ? stringtifyRequestBody(body) : "";
  let fetchData = { method };
  if (method === REQUEST_POST || method === REQUEST_PUT) {
    if (body) {
      fetchData = { ...fetchData, body };
    }
  }
  if (headers) {
    fetchData = { ...fetchData, headers };
  }
  return fetch(`${API_URL}/${endpoint}${reqParam}`, fetchData)
    .then(response => {
      if (isJsonResponse) {
        return response.json();
      }
      return response;
    })
    .then(
      response => response,
      error => {
        const err = {
          message: (error && error.message) || error
        };
        return { error: err };
      }
    );
};

export default callApi;
