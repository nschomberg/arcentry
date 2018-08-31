/* global describe, it, before */

import chai from 'chai';
import Arcentry from '../lib/arcentry';

chai.expect();

const { expect } = chai;

let lib;

describe('Given an instance of my Arcentry library', () => {
  before(() => {
    lib = Arcentry;
  });

  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib).to.deep.equal({});
    });
  });
});
