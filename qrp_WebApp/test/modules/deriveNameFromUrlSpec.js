import { it, describe } from 'mocha';
import { assert } from 'chai';
import deriveNameFromURL from '../../src/modules/urlCategory';

describe('deriveNameFromURL module', () => {
  it('should return the extention name', () => {
    const url = 'extensions/com.castsoftware.nosqldotnet/1.0.0-alpha6.json';
    deriveNameFromURL( url, ( name ) => assert.equal(name, 'NoSQL .NET Analyzer 1.0.0 Alpha 6'), () => assert.equal(true, false) );
  });
  it('should return the name of the parent technology', () =>{
    const url = '/mlturl/?u=technologies/-3.json&u=technologies/-2.json&u=technologies/1050571.json&f=id';
    deriveNameFromURL( url, ( name ) => console.log(name), err => {
      console.error( 'for testing set Url to include full http request field' );
    });
  });
  it('should return the name of the parent business criteria', () =>{
    const url = 'business-criteria/66031.json';
    deriveNameFromURL( url, ( name ) => console.log(name), err => {
      console.error( 'for testing set Url to include full http request field' );
    });
  });
  it('should return the quality standard name based on url', () => {
    const url = 'quality-standards/CISQ/CISQ-Reliability.json';
    deriveNameFromURL( url, ( name ) => assert.equal(name, 'CISQ-Reliability'), () => assert.equal(true, false) );
  });
  it('should return the CAST AIP name based on url', () => {
    const url = 'CAST_AIP/8.1.4_1506.json';
    deriveNameFromURL( url, ( name ) => assert.equal(name, 'CAST AIP 8.1.4'), () => assert.equal(true, false) );
  });
});