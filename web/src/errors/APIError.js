export default class APIError extends Error {
  constructor(data, response) {
    super();

    this.name = 'APIError';
    this.response = response;
    this.data = data;
    this.message = data?.error || `${response.status} (${response.statusText})`;
  }
}
