console.log('starting');

setTimeout(() => console.log('timing out '), 1000);
setTimeout(() => console.log('timing out 2 '), 0);

console.log('finishing');