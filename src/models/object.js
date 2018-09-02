const Object = class {
  constructor(client) {
    this._client = client;
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

  // https://arcentry.com/api-docs/#create-a-new-object
  create(documentId, body) {
    return this.client.post(`/doc/${documentId}/obj`, body);
  }

  // https://arcentry.com/api-docs/#set-properties-for-an-object
  update(documentId, objectId, body) {
    return this.client.post(`/doc/${documentId}/obj/${objectId}`, body);
  }

  // https://arcentry.com/api-docs/#delete-an-object
  delete(documentId, objectId) {
    return this.client.post(`/doc/${documentId}/obj/${objectId}/delete`);
  }
};

export default Object;
