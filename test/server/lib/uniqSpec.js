import { it, describe } from 'mocha';
import { assert } from 'chai';
import uniq from '../../../server/lib/uniq';

describe('Uniq Array server module', () => {
  it('should compare elements of an array and return a new array of uniq elements', () => {
    const dirtyArr = [1,1,1,2,3,4,4,5,4,1,8,9,10,2,0,3];

    const clearArr = uniq(dirtyArr);

    assert.deepEqual(clearArr, [1,2,3,4,5,8,9,10,0]);
  });

  it('should compare elements of an array and return a new array of uniq elements using cmpFunction', () => {
    const dirtyArr = [
      {id: 578, name:'cpp'},
      {id: 585, name:'c'},
      {id: 578, name:'cpp'},
      {id: 585, name:'c'},
      {id: 55, name:'cspp'},
      {id: 556, name:'cpsp'},
    ];

    const clearArr = uniq(dirtyArr, e => e.id);

    assert.deepEqual(clearArr, [
      {id: 578, name:'cpp'},
      {id: 585, name:'c'},
      {id: 55, name:'cspp'},
      {id: 556, name:'cpsp'},
    ]);
  });
});