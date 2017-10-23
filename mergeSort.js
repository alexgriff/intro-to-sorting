const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  } else {
    const midpoint = Math.floor(arr.length / 2);
    return merge(
      mergeSort(arr.slice(0, midpoint)),
      mergeSort(arr.slice(midpoint))
    );
  }
};

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
};
