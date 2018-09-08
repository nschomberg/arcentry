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

  // https://arcentry.com/api-docs/#retrieve-objects-by-selector
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

  // https://arcentry.com/api-docs/#update-multiple-objects-matching-a-selector
  updateWhere(documentId, selector, body) {
    return this.client.post(`/doc/${documentId}/obj/where`, { ...body, selector });
  }

  // https://arcentry.com/api-docs/#delete-an-object
  delete(documentId, objectId) {
    return this.client.post(`/doc/${documentId}/obj/${objectId}/delete`);
  }
};

export default ObjectModel;
