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

describe('Document', () => {
  beforeEach(() => {
    mock = new MockAdapter(axios);
    subject = new Client({ apiKey: 'my-key' });
  });

  afterEach(() => {
    mock.restore();
  });

  describe('list', () => {
    beforeEach(() => {
      mock.onGet('/doc').reply(200, 'success-response');
      promise = subject.document.list();
    });

    it('should send out the right request', () =>
      promise.then(res => {
        expect(res.data).to.equal('success-response');
      }));
  });

  describe('get', () => {
    beforeEach(() => {
      mock.onGet('/doc/<my-id>').reply(200, 'success-response');
      promise = subject.document.get('<my-id>');
    });

    it('should send out the right request', () =>
      promise.then(res => {
        expect(res.data).to.equal('success-response');
      }));
  });
});
