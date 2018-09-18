import { it, describe } from 'mocha';
import { assert } from 'chai';
import { compareOnId, compareOnJSON } from '../../../server/compare/lib/compare';

describe('compare arrays functionality', () => {
  it('should return a new array where each element is marked as present in either array or both, based on ID', () => {
    const testArray1 = [{ name: 'test5', id: 6, randomValue: 45 }, { name: 'test6', id: 9, randomValue: 34 },{name: 'test3', id: -3, randomValue: 22 }, { name: 'test7',id: 21,randomValue: 555}],
      testArray2 = [{ name: 'test1', id: 1, randomValue: 45 }, { name: 'test2', id: 4, randomValue: 33 },{name: 'test3', id: -3, randomValue: 22 }, { name: 'test4',id: 2,randomValue: 15}],
      comparedArray = compareOnId( testArray1, testArray2, 'Array 1', 'Array 2' );

    assert.deepEqual(comparedArray, [
      { name: 'test5', id: 6, randomValue: 45, parent: 'Array 1'}, 
      { name: 'test6', id: 9, randomValue: 34, parent: 'Array 1'},
      { name: 'test3', id: -3, randomValue: 22, parent: 'Both'}, 
      { name: 'test7', id: 21,randomValue: 555, parent: 'Array 1'},
      { name: 'test1', id: 1, randomValue: 45, parent: 'Array 2'}, 
      { name: 'test2', id: 4, randomValue: 33, parent: 'Array 2'},
      { name: 'test4', id: 2,randomValue: 15, parent: 'Array 2'}
    ]);
  });

  it('should return a new array where each element is marked as present in either array or both, based on JSON', () => {
    const testArray1 = [{ name: 'test5', id: 6, randomValue: 45 }, { name: 'test6', id: 9, randomValue: 34 },{name: 'test3', id: -3, randomValue: 22 }, { name: 'test7',id: 21,randomValue: 555}],
      testArray2 = [{ name: 'test5', id: 6, randomValue: 45 },{ name: 'test1', id: 1, randomValue: 45 }, { name: 'test2', id: 4, randomValue: 33 },{name: 'test3', id: -3, randomValue: 22 }, { name: 'test4',id: 2,randomValue: 15}],
      comparedArray = compareOnJSON( testArray1, testArray2, 'Array 1', 'Array 2' );

    assert.deepEqual(comparedArray, [
      { name: 'test5', id: 6, randomValue: 45, parent: 'Both'}, 
      { name: 'test6', id: 9, randomValue: 34, parent: 'Array 1'},
      { name: 'test3', id: -3, randomValue: 22, parent: 'Both'}, 
      { name: 'test7', id: 21,randomValue: 555, parent: 'Array 1'},
      { name: 'test1', id: 1, randomValue: 45, parent: 'Array 2'}, 
      { name: 'test2', id: 4, randomValue: 33, parent: 'Array 2'},
      { name: 'test4', id: 2,randomValue: 15, parent: 'Array 2'},
    ]);
  });
});