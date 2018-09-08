/* global describe, it, before */

import chai from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Client from '../src/client';

chai.expect();

const { expect } = chai;

let subject;
let mock;
let promise;

describe('Object', () => {
  beforeEach(() => {
    mock = new MockAdapter(axios);
    subject = new Client({ apiKey: 'my-key' });
  });

  afterEach(() => {
    mock.restore();
  });

  describe('list', () => {
    beforeEach(() => {
      mock.onGet('/doc/<my-doc-id>/obj').reply(200, 'success-response');
      promise = subject.object.list('<my-doc-id>');
    });

    it('should send out the right request', () =>
      promise.then(res => {
        expect(res.data).to.equal('success-response');
      }));
  });

  describe('get', () => {
    beforeEach(() => {
      mock.onGet('/doc/<my-doc-id>/obj/<my-obj-id>').reply(200, 'success-response');
      promise = subject.object.get('<my-doc-id>', '<my-obj-id>');
    });

    it('should send out the right request', () =>
      promise.then(res => {
        expect(res.data).to.equal('success-response');
      }));
  });

  describe('getWhere', () => {
    beforeEach(() => {
      mock
        .onGet('/doc/<my-doc-id>/obj/where/%5B%22key%22,%22eq%22,%22value%22%5D')
        .reply(200, 'success-response');
      promise = subject.object.getWhere('<my-doc-id>', ['key', 'eq', 'value']);
    });

    it('should send out the right request', () =>
      promise.then(res => {
        expect(res.data).to.equal('success-response');
      }));
  });

  describe('create', () => {
    beforeEach(() => {
      mock
        .onPost('/doc/<my-doc-id>/obj', { props: { text: 'my-text ' } })
        .reply(200, 'success-response');
      promise = subject.object.create('<my-doc-id>', { props: { text: 'my-text ' } });
    });

    it('should send out the right request', () =>
      promise.then(res => {
        expect(res.data).to.equal('success-response');
      }));
  });

  describe('update', () => {
    beforeEach(() => {
      mock
        .onPost('/doc/<my-doc-id>/obj/<my-obj-id>', { props: { text: 'my-text ' } })
        .reply(200, 'success-response');
      promise = subject.object.update('<my-doc-id>', '<my-obj-id>', {
        props: { text: 'my-text ' }
      });
    });

    it('should send out the right request', () =>
      promise.then(res => {
        expect(res.data).to.equal('success-response');
      }));
  });

  describe('updateWhere', () => {
    it('should throw error', () => {
      expect(() => subject.object.updateWhere()).to.throw('Not implemented yet.');
    });
  });

  describe('delete', () => {
    beforeEach(() => {
      mock.onPost('/doc/<my-doc-id>/obj/<my-obj-id>/delete').reply(200, 'success-response');
      promise = subject.object.delete('<my-doc-id>', '<my-obj-id>');
    });

    it('should send out the right request', () =>
      promise.then(res => {
        expect(res.data).to.equal('success-response');
      }));
  });
});
