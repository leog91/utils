const _ = require("lodash");

const main = {
  a: 2,
  b: 3,
  c: [1, 2, 3, 4, 5],
  d: { a: 0, b: { a: { p: "end" } } }
};

console.log("main =>", main);

console.log("main 2 =>", JSON.stringify(main));

const simpleCopy = { ...main };

console.log("simpleCopy =>", JSON.stringify(simpleCopy));

console.log("clone ", _.clone(main));

console.log("cloneDeep =>", _.cloneDeep(main));
