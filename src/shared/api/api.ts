import axios from 'axios';

export const __BASE_FAKE_API__ = 'http://localhost:8000';
const __API__ = 'https://cdn.jsdelivr.net/npm/@fawazahmed0';

export const $api = axios.create({
  baseURL: __API__,
});
