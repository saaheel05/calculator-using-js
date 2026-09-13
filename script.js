let input = document.getElementById("input_box");
let buttons = document.querySelectorAll("button");

let values = "";

let inputArray = Array.from(buttons);
inputArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      values = eval(values);
      input.value = values;
    } else if (e.target.innerHTML === "AC") {
      values = "";
      input.value = values;
    } else if (e.target.innerHTML === "DEL") {
      values = values.slice(0, -1);
      input.value = values;
    } else if (e.target.innerHTML === "%") {
      values = values / 100;
      input.value = values;
    } else {
      values += e.target.innerHTML;
      input.value = values;
    }
  });
});
