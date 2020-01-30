//1 merge sorting

const data = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

//   0   1  2   3   4   5   6  7  8   9   10  11  12  13  14   15

function mergeSort(array) {
  // console.log(array);
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2); // 8
  let left = array.slice(0, middle); //21, 1, 26, 45, 29, 28, 2, 9
  let right = array.slice(middle, array.length); //16, 49, 39, 27, 43, 34, 46, 40

  left = mergeSort(left); //2
  right = mergeSort(right); //9
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0; //
  let outputIndex = 0; //
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      //
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++]; // 1
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  console.log(array);
  return array; // [1,21] [26,45] [28, 29] [2,9] [16,49] [27,39] [34,43] [40,46]
} // [1,21,26,45]   [2,9,28,29]   [16,27,39,49]   [34,40,43,46]
mergeSort(data);
//What is the resulting list that will be sorted after 3 recursive calls to mergesort?   [21]
//What is the resulting list that will be sorted after 16 recursive calls to mergesort?  [2,9]
//What are the first 2 lists to be merged?  [1] [21]
//Which two lists would be merged on the 7th merge? [ 1, 2, 9, 21, 26, 28, 29, 45 ]

//2 QuickSort

//3 9 1 14 17 24 22 20

//The pivot could have been 17, but could not have been 14    FALSE! you can have a pivot anywhere

//The pivot could have been either 14 or 17                   TRUE. Pivot only establishes a partition

//Neither 14 nor 17 could have been the pivot.                FALSE, either one could be the pivot

//The pivot could have been 14, but could not have been 17.   FALSE, see all the answers above

//14, 17, 13, 15, 19, 10, 3, 16, 9, 12

//after the second partitioning
//1st
//10, 17, 13, 15, 19, 14, 3, 16, 9, 12

//2nd
//10, 3, 13, 15, 19, 14, 17, 16, 9, 12

//10, 3, 9, 15, 19, 14, 17, 16, 13, 12
 //            j
