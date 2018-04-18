import { it, describe } from 'mocha';
import { assert } from 'chai';
import MultiQuery from '../../src/modules/multiURLQueryBuilder';
describe('MultiQuery Module ', () => {
  it('should take multiple urls and combine them to form a correct query string for the server', () => {
    const urls = [
      'technologies/1050571.json',
      'technologies/-2.json',
      'technologies/-3.json',
      'technologies/138385.json'
    ];

    const qString = MultiQuery( ...urls );

    assert.equal( qString, '/mlturl/?u=technologies/1050571.json&u=technologies/-2.json&u=technologies/-3.json&u=technologies/138385.json' );
  });

  it('clean dirty queries', () => {
    const urls = [
      '/mlturl/?u=technologies/1050571.json',
      '/mlturl/?u=technologies/-2.json',
      '/mlturl/?u=technologies/-3.json',
      '/mlturl/?u=technologies/138385.json'
    ];

    const qString = MultiQuery( ...urls );

    assert.equal( qString, '/mlturl/?u=technologies/1050571.json&u=technologies/-2.json&u=technologies/-3.json&u=technologies/138385.json' );
  });
});