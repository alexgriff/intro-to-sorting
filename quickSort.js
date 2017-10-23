const quickSort = arr => {
  return recQuickSort(arr, 0, arr.length - 1);
};

const recQuickSort = (arr, start, stop) => {
  if (stop > start) {
    const pivot = partition(arr, start, stop);
    recQuickSort(arr, start, pivot - 1);
    recQuickSort(arr, pivot + 1, stop);
    return arr;
  }
};

const partition = (arr, start, stop) => {
  const pivot = arr[start];
  let lh = start;
  let rh = stop;

  while (true) {
    while (lh < rh && arr[rh] >= pivot) rh--;
    while (lh < rh && arr[lh] < pivot) lh++;
    if (lh === rh) break;
    swap(arr, lh, rh);
  }

  if (arr[lh] >= pivot) return start;
  swap(arr, start, lh);
  return lh;
};
