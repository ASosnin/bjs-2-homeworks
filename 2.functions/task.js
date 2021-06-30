// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  avg = sum / arr.length;
  return {min: min, max: max, avg: avg.toFixed(2)};
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i += 1) {
    let result = func(arrOfArr[i])
    if (max < result) {
      max = result;
    }
  }
  return max
}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i += 1) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return max - min
}
