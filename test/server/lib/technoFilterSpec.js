import { it, describe } from 'mocha';
import { assert } from 'chai';
import filter from '../../../server/lib/filters';
import technos from '../../../rest/AIP/technologies';
describe('filter module for technologies', () => {
  it('should return a new array with merged values', () => {
    const cpp = [technos.find( i => i.id === -2 ), technos.find( i => i.id === -3 ), technos.find( i => i.id === 1050571 ), ],
      rePackagedCppData = filter( cpp );

    assert.deepEqual(rePackagedCppData, [{id:1050571,name:'C/C++',href:'AIP/technologies/-2/quality-rules+AIP/technologies/-3/quality-rules+AIP/technologies/1050571/quality-rules',glob:[{id:-2,name:'C',href:'AIP/technologies/-2'},{id:-3,name:'C++',href:'AIP/technologies/-3'},{id:1050571,name:'C/C++',href:'AIP/technologies/1050571'}]}]);
  });
});