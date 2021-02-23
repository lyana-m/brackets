module.exports = function check(str, bracketsConfig) {
  let checker = true;
  while (checker) {
    checker = false;
    for (let subArr of bracketsConfig) {
      let concat = subArr[0] + subArr[1];
      if (str.includes(concat)) {
        let index = str.indexOf(concat);
        str = str.slice(0, index) + str.slice(index + 2);
        checker = true;
      }
    }
  }
  return str.length == 0;
}