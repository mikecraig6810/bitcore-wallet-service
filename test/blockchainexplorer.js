'use strict';

var _ = require('lodash');
var chai = require('chai');
var sinon = require('sinon');
var should = chai.should();
var BlockchainExplorer = require('../lib/blockchainexplorer');

describe('Blockchain explorer', function() {
  describe('#constructor', function() {
    it('should return a blockchain explorer with basic methods', function() {
      var exp = BlockchainExplorer({
        provider: 'insight',
        network: 'testnet',
      });
      should.exist(exp);
      exp.should.respondTo('broadcast');
      exp.should.respondTo('getTransactions');
      exp.should.respondTo('getUnspentUtxos');
      exp.should.respondTo('initSocket');
      var exp = BlockchainExplorer({
        provider: 'insight',
        network: 'livenet',
      });
      should.exist(exp);
    });
    it('should fail on unsupported provider', function() {
      (function() {
        var exp = BlockchainExplorer({
          provider: 'dummy',
        });
      }).should.throw('not supported');
    });
  });
});