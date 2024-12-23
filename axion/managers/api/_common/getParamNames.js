const getParamNames = require('./managers/api/_common/getParamNames');

function exampleFunction(param1, param2, param3) {
    // This is a comment
    return param1 + param2 + param3;
}

const params = getParamNames(exampleFunction);
console.log(params); // Output: "param1 , param2 , param3"