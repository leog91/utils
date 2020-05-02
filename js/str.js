const test = () => {
  console.log("test");
};

const strReverse = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

const intersection = (arr1, arr2) => arr1.filter(x => arr2.includes(x));

const smts = str => {
  const newSet = new Set("asdas".split(""));
  const aarr = [...newSet];
  console.log(newSet);
  console.log(aarr);

  //Array.from(set)
};

const printDuplicates = str => {
  const strArray = str.split("");

  const withoutDuplicates = [...new Set(strArray)];

  console.log("strArray", strArray);
  console.log("withoutDuplicates", withoutDuplicates);
  console.log("duplicates =>", intersection(strArray, withoutDuplicates));
};

test();
console.log(strReverse("123456789"));
console.log("==============");

//printDuplicates("asdaswe");
console.log(intersection.name);

console.log("intersect", intersection(["a", "b", "c"], ["a", "b", "c", "d"]));

printDuplicates("asdads");
