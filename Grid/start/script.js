let header = document.getElementById("header");
console.log(header.value);

let nums = document.querySelectorAll(".num");
console.log(nums);

nums.forEach((element) => {
  element.addEventListener("click", () => {
    header.value += element.innerText;
  });
});

let operator = "";

let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  header.value = "";
});
let sum = document.getElementById("sum");
sum.addEventListener("click", () => {
  if (header.value.includes("+")) {
    return;
  } else {
    header.value += "+";
    operator = "+";
  }
});
let mul = document.getElementById("mul");
mul.addEventListener("click", () => {
  header.value += "*";
  operator = "*";
});
let result = document.getElementById("result");
result.addEventListener("click", () => {
  let numeri = header.value.split(operator);
  header.value = eval(numeri[0] + operator + numeri[1]);
});
