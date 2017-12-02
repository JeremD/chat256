import 'whatwg-fetch'

const parseJSON = (response) => response.json()

/**
* Checks if a network request came back fine, and throws an error if not
*
* @param  {object} response   A response from a network request
*
* @return {object|undefined} Returns either the response, or throws an error
*/
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
* Requests a URL, returning a promise
*
* @param  {string} url       The URL we want to request
* @param  {object} [options] The options we want to pass to "fetch"
*
* @return {object}           The response data
*/
const request = (url, options) => {
  let baseApiPath = 'http://localhost:3000/api'

  return fetch(`${baseApiPath}${url}`, options)
    .then(checkStatus)
    .then(parseJSON)
}

export default request
