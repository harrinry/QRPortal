import { it, describe } from 'mocha';
import { assert } from 'chai';
import MultiQuery from '../../../server/lib/multiqueryurl';
describe('MultiQuery Module ', () => {
  it('should take multiple urls and combine them to form a correct query string for the server', () => {
    const urls = [
      'technologies/1050571.json',
      'technologies/-2.json',
      'technologies/-3.json',
      'technologies/138385.json'
    ];

    const qString = MultiQuery(...urls );

    assert.equal( qString, 'technologies/1050571.json+technologies/-2.json+technologies/-3.json+technologies/138385.json' );
  });
});