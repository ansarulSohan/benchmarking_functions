function generateArray(length, min = 1, max = 100) {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found at index mid
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}

function getRandomInteger(min = 1000, max = 999999) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped, the array is already sorted
    if (!swapped) break;
  }

  return arr;
}

module.exports = { generateArray, binarySearch, getRandomInteger, bubbleSort };
