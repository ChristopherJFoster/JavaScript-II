// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// function invocation:
getLength(items, function(result) {
  console.log(result); // expect 4
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
// function invocation:
last(items, function(result) {
  console.log(result); // explect Gum
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
// function invocation:
sumNums(3, 4, function(result) {
  console.log(result); // expect 7
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
// function invocation:
multiplyNums(3, 4, function(result) {
  console.log(result); // expect 12
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));
}
// function invocations:
contains("Notebook", items, function(result) {
  console.log(result); // expect true
});
contains("Walkman", items, function(result) {
  console.log(result); // expect false
});

/* STRETCH PROBLEM */

const someDuplicates = [
  "Shovel Knight",
  "Dark Souls",
  "Dark Souls",
  "Enter the Gungeon",
  "Shovel Knight",
  "SUPERHOT"
];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const noDuplicates = [];
  array.forEach((currentValue, index) => {
    absent = true;
    for (i = 0; i < noDuplicates.length; i++) {
      if (currentValue === noDuplicates[i]) {
        absent = false;
      }
    }
    if (absent) {
      noDuplicates.push(currentValue);
    }
  });
  cb(noDuplicates);
}

removeDuplicates(someDuplicates, function(result) {
  console.log(result); // expect [ 'Shovel Knight', 'Dark Souls', 'Enter the Gungeon', 'SUPERHOT' ]
});
