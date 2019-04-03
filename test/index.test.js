/* eslint-disable no-undef */
const expect = require('chai').expect;
const add = require('../src/index');

describe('hello-npm-script', () => {
    describe('#add', () => {
        it('add() should return 0', () => {
            expect(add()).to.equal(0);
        });
        it('add(1) should return 1', () => {
            expect(add(1)).to.equal(1);
        });
        it('add(1, 2) should return 3', () => {
            expect(add(1, 2)).to.equal(3);
        });
        it('add(1, 2, 3) should return 6', () => {
            expect(add(1, 2, 3)).to.equal(6);
        });
    });
});

