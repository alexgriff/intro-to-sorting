# Sorting

## Resources
* [USF Comparison Sorting Demo](http://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
* [Color Visualizations Gifs](https://imgur.com/gallery/voutF)
* [Youtube Bars & Sound](https://www.youtube.com/watch?v=kPRA0W1kECg)
* [Youtube Color Circle](https://www.youtube.com/watch?v=y9Ecb43qw98)
* [Barack Obama Google Interview](https://www.youtube.com/watch?v=k4RRi_ntQc8)
* [Algorythmics](https://www.youtube.com/watch?v=lyZQPjUT5B4)

## Algorithms

### Selection Sort: Runtime (?)

- Find the minimum (whats the runtime of this?? O(n))
- Move minimum to the front (swap)
- Find minimum of rest
- Move it to the front (now the second position)
- repeat...

- Reliable, will work the same on any input

```js
const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};
```






















### Insertion Sort: Runtime (?)

- Imagine picking up a playing card into your hand
- draw another card, if it's greater than current card, leave it in place
- otherwise, keep moving it down until it's greater than the one below
- each card inserted into it's proper place

- What input is the worst case scenario for this?
  (What would happen if smallest number in last position)
- What input is the best case for this?

- Can perform differently with different inputs















#### Selection and Insertion sorts run in Quadratic Time
- i.e. if we _double_ the size of input, -> _4x_ time
- Boo! ^
- This also means, if we _half_ the size of the input -> _(1/4)x_ time
- Yay! ^
- Can we use this to our advantage?
- If we had two sorted halves, can we produce full sorted result



















## Mergesort: Runtime (?)
- Divide And Conquer
- split in half
- sort each half (recursive step)
- combine (merge step)
- Merge step (arr1, arr2)
  - look at first of each, put min into result
  - continue until one arr is empty

- Easy split (trivial - split in half), Hard join (linear merge step)
- How do we think about calculating runtime??





















#### n * log n is the best we can do






















## Quicksort: Runtime (?)
- Divide and Conquer
- Harder split, Easy join
- determine if elem should go in high half or low half (partitioning)
- move things closer to where they need to go (swap 'em)
- look at sub-section of arr, determine if elem should go in high half or low half, repeat...

- Partition step
  - choose a pivot, all elems greater than pivot in one half, less than in other
  - walk left hand up from bottom, right hand down from top until they cross
  - if the left hand finds something that should be in right half (i.e. > pivot)
  - have the right hand find something that should be in the left half (i.e. < pivot)
  - swap 'em
  - once hands meet swap left hand and pivot,
  - that elem is locked into place, all things to left lower, all things to right higher

- How to choose pivot? (we'll start with choosing first elem, it's in range atleast)
  - what's an ideal pivot choice?
  - what's a bad pivot choice?
