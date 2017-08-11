import 'whatwg-fetch';

export default class ApiService {
  constructor() {}

  /**
   * API service function for getting data
   *
   * @param  {string} url [endpoint to get data from]
   * @method get
   */
  get(url, catchCallback) {
    const headers = new Headers();
    const token = localStorage.getItem('token');

    headers.append('Content-Type', 'application/json');

    return fetch(
      url,
      {
        'headers': headers,
      }
    )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    .catch(error => {
      catchCallback(error);
      if (!error.response) return;
      console.error(error.response.statusText);
    });
  }

  /**
   * API service function for posting data
   *
   * @param  {string} url [endpoint to post data to]
   * @method post
   */
  post(url, options, catchCallback) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allowed-Headers', '*');
    return fetch(
      url,
      {
        'method': 'POST',
        'headers': headers,
        'mode': 'cors',
        'cache': 'default',
        'body': JSON.stringify(options)
      }
    )
    .then((response) => {
      // verify that status is OK or success
      if (response.ok) {
        return response;
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then((response) => {
      // return JSON from post
      return response.json();
    })
    .catch((error) => {
      catchCallback(error);
      if (!error.response) return;
      console.error(error.response.statusText);
    });
  }
}
