// Binary Search
// Q: What's the runtime? A: O(logN)

const binarySearch = (arr, target) => {
  console.log(`Remaining elements to search: ${arr.length}`);

  const midpoint = Math.floor(arr.length / 2);
  const middle = arr[midpoint];

  const found = middle === target ? target : false;

  if (arr.length <= 1 || found) {
    return found;
  } else {
    if (middle >= target) {
      // search first half
      return binarySearch(arr.slice(0, midpoint), target);
    } else {
      // search second half
      return binarySearch(arr.slice(midpoint), target);
    }
  }
};

// Linear Search
// Q: What's the runtime? A: O(n)

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Remaining elements to search: ${arr.length - i}`);

    const elem = arr[i];
    if (elem === target) {
      return target;
    }
  }
  return false;
};
