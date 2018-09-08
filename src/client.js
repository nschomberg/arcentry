import axios from 'axios';

import DocumentModel from './models/document';
import ObjectModel from './models/object';

const Client = class {
  constructor({ apiKey }) {
    if (!apiKey) {
      throw new Error('Missing or invalid options');
    }
    this._apiKey = apiKey;
    this._cache = {};
  }

  get client() {
    if (!this._cache.client) {
      const client = axios.create({
        baseURL: 'https://arcentry.com/api/v1'
      });

      client.defaults.headers.common.Authorization = `Bearer ${this.apiKey}`;
      client.defaults.headers.common['Content-Type'] = 'application/json';

      this._cache.client = client;
    }

    return this._cache.client;
  }

  get apiKey() {
    return this._apiKey;
  }

  get document() {
    if (!this._cache.document) {
      this._cache.document = new DocumentModel(this.client);
    }

    return this._cache.document;
  }

  get object() {
    if (!this._cache.object) {
      this._cache.object = new ObjectModel(this.client);
    }

    return this._cache.object;
  }
};

export default Client;
