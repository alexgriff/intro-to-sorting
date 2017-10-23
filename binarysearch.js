const binarySearch = (arr, target) => {
  // console.log(`binarySearch is called`);
  console.log(`Remaining elements to search: ${arr.length}`);

  const midpoint = Math.floor(arr.length / 2);
  const middle = arr[midpoint];

  if (arr.length <= 1) {
    return middle === target ? target : false;
  }

  if (middle === target) {
    return target;
  } else if (middle >= target) {
    return binarySearch(arr.slice(0, midpoint), target);
  } else if (middle < target) {
    return binarySearch(arr.slice(midpoint), target);
  }
};

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    // console.log(`linearSearch in the loop`);
    console.log(`Remaining elements to search: ${arr.length - i}`);

    const elem = arr[i];
    if (elem === target) {
      return target;
    }
  }
  return false;
};
