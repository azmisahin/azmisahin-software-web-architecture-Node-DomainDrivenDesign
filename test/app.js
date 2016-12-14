'use strict';

/**
 * Modul Requestment And Define
 */
var chai = require('chai');
var expect = chai.expect;
var NodeDDD = require('../');

/**
 * Node Domain Driven Design Application Test
 * 
 */
module.exports = function () {
    it("Application instance create", function () {
        var instance = new NodeDDD();
        expect(instance).to.be.an.instanceof(NodeDDD);
    });
}