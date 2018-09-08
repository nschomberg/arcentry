const ObjectModel = class {
  constructor(client) {
    this._client = client;
  }

  static generateSelector(array) {
    return encodeURI(JSON.stringify(array));
  }

  get client() {
    return this._client;
  }

  // https://arcentry.com/api-docs/#list-all-objects-for-a-document
  list(documentId) {
    return this.client.get(`/doc/${documentId}/obj`);
  }

  // https://arcentry.com/api-docs/#get-properties-for-an-object
  get(documentId, objectId) {
    return this.client.get(`/doc/${documentId}/obj/${objectId}`);
  }

  // https://arcentry.com/api-docs/meta-data/#how-to-search-for-metadata
  getWhere(documentId, selector) {
    return this.client.get(
      `/doc/${documentId}/obj/where/${ObjectModel.generateSelector(selector)}`
    );
  }

  // https://arcentry.com/api-docs/#create-a-new-object
  create(documentId, body) {
    return this.client.post(`/doc/${documentId}/obj`, body);
  }

  // https://arcentry.com/api-docs/#set-properties-for-an-object
  update(documentId, objectId, body) {
    return this.client.post(`/doc/${documentId}/obj/${objectId}`, body);
  }

  // https://arcentry.com/api-docs/meta-data/#how-to-search-for-metadata
  /* eslint-disable class-methods-use-this, no-unused-vars */
  updateWhere(documentId, selector, body) {
    throw new Error('Not implemented yet.');
  }
  /* eslint-enable */

  // https://arcentry.com/api-docs/#delete-an-object
  delete(documentId, objectId) {
    return this.client.post(`/doc/${documentId}/obj/${objectId}/delete`);
  }
};

export default ObjectModel;
