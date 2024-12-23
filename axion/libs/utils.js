const utils = require('./libs/utils');

// Example of slugifying a string
const slug = utils.slugify("Hello World! This is a test.");
console.log(slug); // Output: "hello-world-this-is-a-test"

// Example of getting a deep value from an object
const obj = { a: { b: { c: 42 } } };
const value = utils.getDeepValue('a.b.c', obj);
console.log(value); // Output: 42

// Example of setting a deep value in an object
const newObj = utils.setDeepValue({ path: 'a.b.d', value: 100, obj });
console.log(newObj); // Output: { a: { b: { c: 42, d: 100 } } }

// Example of checking if a string is a normal integer
console.log(utils.isNormalInteg("123")); // Output: true
console.log(utils.isNormalInteg("-123")); // Output: false