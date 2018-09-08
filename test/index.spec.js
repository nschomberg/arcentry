/* global describe, it, before */

import chai from 'chai';
import Arcentry from '../src';
import Client from '../src/client';

chai.expect();

const { expect } = chai;

let subject;

describe('Arcentry', () => {
  before(() => {
    subject = new Arcentry({
      apiKey: 'my-key'
    });
  });

  context('when instantiated', () => {
    it('should be an instance of client', () => {
      expect(subject).to.be.an.instanceof(Client);
    });
  });
});
