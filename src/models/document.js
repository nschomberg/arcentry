const DocumentModel = class {
  constructor(client) {
    this._client = client;
  }

  get client() {
    return this._client;
  }

  // https://arcentry.com/api-docs/#list-all-documents
  list() {
    return this.client.get('/doc');
  }

  // https://arcentry.com/api-docs/#get-details-for-a-document
  get(documentId) {
    return this.client.get(`/doc/${documentId}`);
  }
};

export default DocumentModel;
