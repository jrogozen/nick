import 'whatwg-fetch';

const requester = function({ endpoint, method, queryParams }) {
  return fetch(endpoint, {
    method: method || 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    }
  })
}

export default requester