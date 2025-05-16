import axios from 'axios';

const __API__ = 'https://cdn.jsdelivr.net/npm/@fawazahmed0';

export const $api = axios.create({
  baseURL: __API__,
});
