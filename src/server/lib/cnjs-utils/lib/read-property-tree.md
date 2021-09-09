# Read Property Tree

The role of this function is to explore an object or array of any depth and recover a value without requiring null checks on potentially invalid or non existing properties or indexes.

```js
const { rpt } = require("cnjs-utils/lib");

const obj = {
    a: {
      b: {
        d: "hello",
        c: {
          a:{
            a: {
              d: [
                {
                  a: "a" // value that will be returned
                },
                {
                  b: "b"
                }
              ]
            }
          }
        }
      }
    },
    b: "b"
  };

rpt( obj, "a.b.gone|c.b|a!.a.d.0.a", { default: false } ); // this will return the value "a" in the end
// alternate path definition
// [ "a", "b", "gone|c", "b|a!", "a", "d", 0, "a" ]
```

## Path Search Syntax

### Path definition
Path can be defined as a string or an array.

```js
const stringExample = "a.b.gone.0.a";
const arrayExample = [ "a", "b", "gone", 0, "a" ];
```

When path declaration is done via the use of a string, `. (DOT)` is used as a property delimiter, instead in array form declarations each array value defines the property seperation.

### Options

```js
const { rpt } = require("cnjs-utils/lib");

const rptOptions = {
  default: false, // any type value, default undefined
  returnLast: true | false, // Boolean type value, default false
}
```

- `Default` is used to define the return value of the function when the search path fails.
- `returnLast` when set to TRUE, will return the last value property value as the default when the search path fails to resolve the desired value.

### Search Path Indicators

- `!` bang symbol is used as the end of a property to indicate that the search should stop at the property.
- `|` OR/VerticalBar symbol  is used to indicate a test condition, conditions are tested in order of left to right, the first condition that returns a valid value will conclude the conditional check

Bang Example:
```js
const obj = { c: [ 0, 2, 3, { a: 0 } ]};
const conditionalPath = "c.3!.a";
// this translates to the following statement when it's being tested

if( obj.c ){
  if( obj.c[3] ) return obj.c[3]; // BANG will cause a premature return this can be very powerful in combinations with conditionals

  return obj.c[3].a;
}
```

Conditional Example:
```js
const obj = { c: 4, d: 20 };
const conditionalPath = "a|b|c|d";
// this translates to the following statement when it's being tested

if( obj.a ) return obj.a;
else if( obj.b ) return obj.b;
else if( obj.c ) return obj.c; // return will occur here! 
else if( obj.d ) return obj.d; // this value will not be checked since a valid return was found prior

// keep this in mind when defining conditional check order.
```

Combined Example:
```js
const obj = { c: [ 0, 2, [ 0, 2, [ 0 ] ], [ 3 ] ], d: 20 };;
const conditionalPath = "c|d.3|1!|2.0";

// this translates to the following statement when it's being tested
if( obj.c ){
  if( obj.c[3] ){
    if( obj.c[3][0] ) return obj.c[3][0];
  } else if( obj.c[1] ){
    return obj.c[1]; // this is the value that will be returned in the end based on the demo "obj"
  } else if( obj.c[2] ){
    if( obj.c[2][0] ) return obj.c[2][0];
  }
} else if (obj.d){
  if( obj.c[3] ){
    if( obj.c[3][0] ) return obj.c[3][0];
  } else if( obj.c[1] ){
    return obj.c[1];
  } else if( obj.c[2] ){
    if( obj.c[2][0] ) return obj.c[2][0];
  }
}
```
