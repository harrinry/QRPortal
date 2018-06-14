import { it, describe } from 'mocha';
import { assert } from 'chai';
import QueryStringParser from '../../qrp_WebApp/src/modules/queryStringParser';
describe('Query String Parser Module ', () => {
  
  it('should take a query string and split it based on 3 paramters', () => {
    const qString = '?rlH=technologies/-3.json&rlName=C/C++&rlDH=quality-rules/588.json';

    const out = QueryStringParser( qString );
    assert.deepEqual(out, {
      rlH: 'technologies/-3.json',
      rlName: 'C/C++',
      rlDH: 'quality-rules/588.json'
    });
  });
  
  it('should take a multi-url query string and split it based on 3 paramters', () => {
    const qString = '?rlH=/mlturl/?u=technologies/-3.json&u=technologies/1050571.json&u=technologies/-2.json&rlName=C/C++&rlDH=quality-rules/588.json';

    const out = QueryStringParser( qString );

    assert.deepEqual(out, {
      rlH: '/mlturl/?u=technologies/-3.json&u=technologies/1050571.json&u=technologies/-2.json',
      rlName: 'C/C++',
      rlDH: 'quality-rules/588.json'
    });
  });

  it('should take a query string and split it based on 2 paramters', () => {
    const qString = '?rlH=technologies/-3.json&rlName=C/C++';

    const out = QueryStringParser( qString );
    assert.deepEqual(out, {
      rlH: 'technologies/-3.json',
      rlName: 'C/C++',
    });
  });

  it('should take a multi-url query string and split it based on 3 paramters', () => {
    const qString = '?rlH=/mlturl/?u=technologies/-3.json&u=technologies/1050571.json&u=technologies/-2.json&rlName=C/C++';

    const out = QueryStringParser( qString );

    assert.deepEqual(out, {
      rlH: '/mlturl/?u=technologies/-3.json&u=technologies/1050571.json&u=technologies/-2.json',
      rlName: 'C/C++',
    });
  });
});