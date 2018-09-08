/* global describe, it, before */

import chai from 'chai';

import Client from '../src/client';
import Object from '../src/models/object';
import Document from '../src/models/document';

chai.expect();

const { expect } = chai;

let subject;

describe('Client', () => {
  describe('new', () => {
    context('when instantiated without an apiKey', () => {
      it('should throw an error', () => {
        expect(() => new Client()).to.throw("Cannot read property 'apiKey' of undefined");
      });
    });

    context('when instantiated with an apiKey', () => {
      beforeEach(() => {
        subject = new Client({ apiKey: 'my-key' });
      });

      it('should have an apiKey', () => {
        expect(subject.apiKey).to.equal('my-key');
      });
    });
  });

  describe('.client', () => {
    beforeEach(() => {
      subject = new Client({ apiKey: 'my-key' });
    });

    it('should set the baseURL', () => {
      expect(subject.client.defaults.baseURL).to.equal('https://arcentry.com/api/v1');
    });

    it('should set bearer token on client headers', () => {
      expect(subject.client.defaults.headers.common.Authorization).to.equal('Bearer my-key');
    });

    it('should set content-type on client headers', () => {
      expect(subject.client.defaults.headers.common['Content-Type']).to.equal('application/json');
    });
  });

  describe('.document', () => {
    beforeEach(() => {
      subject = new Client({ apiKey: 'my-key' });
      subject._cache.client = 'my-client';
    });

    it('should be an instance of Document', () => {
      expect(subject.document).to.be.an.instanceof(Document);
    });

    it('should have been passed in the client', () => {
      expect(subject.document.client).to.equal('my-client');
    });
  });

  describe('.object', () => {
    beforeEach(() => {
      subject = new Client({ apiKey: 'my-key' });
      subject._cache.client = 'my-client';
    });

    it('should be an instance of Object', () => {
      expect(subject.object).to.be.an.instanceof(Object);
    });

    it('should have been passed in the client', () => {
      expect(subject.object.client).to.equal('my-client');
    });
  });
});
