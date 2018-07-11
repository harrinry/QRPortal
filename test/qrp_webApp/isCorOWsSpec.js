import { it, describe } from 'mocha';
import { assert } from 'chai';
import isStandard from '../../qrp_WebApp/src/modules/isCISQorOWASP';

describe('CISQ or OWASP', () => {
  it('should check if the url provided is pointing to BC or QS', () => {
    const urls = [
        'AIP/quality-standards/OWASP/categories/OWASP-2013',
        'AIP/business-criteria/60014/quality-rules',
        'AIP/quality-standards/CISQ/categories/CISQ-Reliability'
      ],
      results = [false, true, false];
 
    urls.forEach((url, index) => assert.equal(isStandard(url), results[index]) );
  });
});