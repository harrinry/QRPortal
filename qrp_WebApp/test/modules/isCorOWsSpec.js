import { it, describe } from 'mocha';
import { assert } from 'chai';
import isStandard from '../../src/modules/isCISQorOWASP';

describe('CISQ or OWASP', () => {
  it('should check if the url provided is pointing to BC or QS', () => {
    const urls = [
        'quality-standards/OWASP/OWASP-2013.json',
        'business-criteria/60012.json',
        'quality-standards/CISQ/CISQ-Performance-Efficiency.json'
      ],
      results = [false, true, false];
 
    urls.forEach((url, index) => assert.equal(isStandard(url), results[index]) );
  });
});