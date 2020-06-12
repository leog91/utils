const multiply = a => {
  return b => {
    return c => {
      return a * b * c;
    };
  };
};

//const multiply = a => b => c => a * b * c;

console.log(multiply(2)(2)(3)); // 12
