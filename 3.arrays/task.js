function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((item, index) => item === arr2[index])
}

function advancedFilter(arr) {
  return arr.filter(item => item >= 0).filter(item => item % 3 === 0).map(item => item * 10);
}
