// setTimeout // setInterval //clearTimeout //

console.log('.......setTimeout function example..........');
const func = () => {
  console.log('Hello after 4 seconds.');
};
setTimeout(func, 4 * 1000);

const rocks = (who) => {
  console.log(who + ' rocks!');
};
setTimeout(rocks, 4 * 1000, 'Pluralsight');
// Challenge 1
const theOneFunc = (greet) => {
  console.log('Hello after ' + greet);
};
setTimeout(theOneFunc, 4 * 1000, '4 seconds.');
setTimeout(theOneFunc, 8 * 1000, '8 seconds.');

// Same challenge 1 in another way
const theOneFunc1 = (delay) => {
  console.log('Hello after ' + delay + ' seconds');
};
setTimeout(theOneFunc1, 4 * 1000, 4);
setTimeout(theOneFunc1, 8 * 1000, 8);

console.log('.......setTimeInterval function example..........');
setInterval(() => console.log('Hello after 3 seconds'), 3 * 1000);

console.log('.......clearTimeout function example..........');
const timerId = clearTimeout(
  () => console.log('You will not see this statement.'),
  0
);
clearTimeout(timerId);
// Prints Hello world every second! 5 times and terminates
let counter = 0;
const timerId = setInterval(() => {
  console.log('Hello world every second!');
  counter++;
  if (counter === 5) {
    console.log('Done!');
    clearInterval(timerId);
  }
}, 1 * 1000);
