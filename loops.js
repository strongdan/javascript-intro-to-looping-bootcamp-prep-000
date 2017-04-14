var forLoop = function(array) {
  for (let i = 0; i < 25; i++) {
      if (i === 1) {
        array.push("I am 1 strange loop.");
      } else {
        array.push("I am ${i} strange loops.");
      }
  }
return array;
};

var whileLoop = function(n) {
    while (n > 0) {
      console.log(n);
      n -= 1;
    }
    return 'done';
};

function maybeTrue() {
  return Math.random() >= 0.5
}

var doWhileLoop = function(array) {
  do {
    array.pop();
  } while (maybeTrue());
  return array;
};
