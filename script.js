function swapValues(a, b) {
  [a, b] = [b, a];
}

let x = 10;
let y = 20;

swapValues(x, y);

console.log("x =", x, "y =", y);