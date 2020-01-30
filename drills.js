const LL = require("./LinkedList.js");

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
// mergeSort(data);
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

//last item as pivot
//1st
//10, 17, 13, 15, 19, 14, 3, 16, 9, 12

//2nd
//10, 3, 13, 15, 19, 14, 17, 16, 9, 12

//3rd
//10, 3, 9, 15, 19, 14, 17, 16, 13, 12
//              j

//first item as pivot
//14, 17, 13, 15, 19, 10, 3, 16, 9, 12
//1st
//13, 17, 14, 15, 19, 10, 3, 16, 9, 12
//2nd
//13, 10, 14, 15, 19, 17, 3, 16, 9, 12

//implementation

/*  33,
45,
72,
56,
44,
21,
88,
27,
68,
15,
62,
93,
98,
73,
28,
16,
46,
87,
28,
65,
38,
67,
16,
85,
63,
23,
69,
64,
91,
9,
70,
81,
27,
97,
82,
6,
88,
3,
7,
46,
13,
11,
64,
76,
31,
26,
38,
28,
13,
17,
69,
90,
1,
6,
7,
64,
43,
9,
73,
80,
98,
46,
27,
22,
87,
49,
83,
6,
39,
42,
51,
54,
84,
34,
53,
78,
40,
14,
5
*/
const arr = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14
];
function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    console.log(array);
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

// qSort(arr);

//4
// mergeSort(arr);

//5
const newLL = new LL();

newLL.insertLast(8);
newLL.insertLast(10);
newLL.insertLast(1);
newLL.insertLast(5);
newLL.insertLast(9);
newLL.insertLast(2);
newLL.insertLast(4);
newLL.insertLast(3);
// console.log(newLL.mergeSort());

// mergeSort(newLL);


//6 Bucket sort
const bucket = [50, 7, 17, 22, 3, 48, 38, 35, 40]


//while arr[i] is > low, then swap and i++
//while arr[j] is < j, then swap and j--

//low = 3, high = 50
function sort(arr, low, high) {
  let i = 0;
  let j = arr.length - 1;

  while (j > i) {
    while (arr[i] > low && j > i) {
      i++;
    }
    while (arr[j] < high && j > i) {
      j--;
    }
    if (arr[i] > arr[j]) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  console.log(arr);
  return arr;
}

// sort(bucket, 3, 50);

//7 Sort in place
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// console.log(shuffle(arr));


//8 Sorting Books
function bookSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let current = array[i];
    let next = array[i + 1];
    if (current.localeCompare(next) >= 0) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bookSort(array);
  }
  console.log(array);
  return array;
}
const library = [
  'The REXX Language',
  'Teach Yourself C++ In 21 Days',
  'The C++ Programming Language',
  'JavaScript: The Good Parts',
  'JavaScript: The Definitive Guide',
  'Windows Vista for Dummies',
  'NIV Study Bible',
  'Janes Fighting Ships',
  'The Official Chuck Norris Fact Book'
];
bookSort(library);