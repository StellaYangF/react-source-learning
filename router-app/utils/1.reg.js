const pathToExp = require('path-to-regexp').pathToRegexp;

let params = [];
let path = '/user/:age/name/:name';
let pathname = '/user/1/name/stella';
let regexp = pathToExp(path, params, { end: false });
let result = pathname.match(regexp);
result = result.slice(1,3);
params = params.map(param => param.name);
params = params.map((param, index) => ({ [param]: result[index] }));
// console.log(result, '---result');
// console.log(regexp, '---regexp');
// console.log(params, '---params');
console.log(params);