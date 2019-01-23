// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const myLilClosure = (noun, adj, cb) => {
  cb(noun, adj);
};

const very = (noun, adj) => {
  console.log(`I think ${noun} is very ${adj}.`);
};

myLilClosure("coding", "fun", very);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return (uptick = () => {
    console.log((counter += 1));
  });
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
const newerCounter = counter(); // Shows that multple counters can be created
newCounter(); // expect 1
newCounter(); // expect 2
newCounter(); // expect 3
newerCounter(); // expect 1 - Shows that each created counter is independent of any others
newerCounter(); // expect 2
newCounter(); // expect 4

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  return {
    counter: 0,
    // I Included a repeat parameter with a default of 1 for the inc and dec methods.
    inc: function(repeat = 1) {
      for (i = 0; i < repeat; i++) {
        this.counter += 1;
      }
      return this.counter;
    },
    dec: function(repeat = 1) {
      for (i = 0; i < repeat; i++) {
        this.counter -= 1;
      }
      return this.counter;
    }
  };
};

const lovelyCounter = counterFactory();

console.log(lovelyCounter); // expect lovelyCounter object
console.log(lovelyCounter.counter); // expect 0
lovelyCounter.dec();
lovelyCounter.dec(2); // Used an argument of 2 for repeat parameter to decrement 2 times.
console.log(lovelyCounter.counter); // expect -3
lovelyCounter.inc(5);
console.log(lovelyCounter.counter); // expect 2
