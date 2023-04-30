let input = document.getElementById("input");
let button = document.getElementById("button");
let list = document.getElementById("list");

button.addEventListener("click", calculation);

function calculation() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  if (input.value > 0 && input.value < 100) {
    for (let i = 1; i <= input.value; i++) {
      var newNumber = document.createElement("li");
      newNumber.innerText = i;
      list.appendChild(newNumber);
      if (i % 2 == 0) {
        newNumber.classList.remove("background2");
        newNumber.classList.add("background1");
      } else {
        newNumber.classList.remove("background1");
        newNumber.classList.add("background2");
      }
    }
  }
}
