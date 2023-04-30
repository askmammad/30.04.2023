let buttonAdd = document.getElementById("addFruits");
let buttonNumber = document.getElementById("numberFruits");
let buttonShow = document.getElementById("showFruits");
let input = document.getElementById("inputFruits");
let list = document.getElementById("list");
let number = document.getElementById("number");
let numberofFruits = document.getElementById("numberofFruits");
let count = 0;

buttonAdd.addEventListener("click", function1);
buttonNumber.addEventListener("mouseover", function2);
buttonNumber.addEventListener("mouseout", function3);
buttonShow.addEventListener("click", function4);

function function1() {
  if (input.value.toLowerCase() == "apple") {
    count++;
    var newElement = document.createElement("li");
    newElement.innerText = "Apple🍎";
    list.appendChild(newElement);
  } else if (input.value.toLowerCase() == "banana") {
    count++;
    var newElement = document.createElement("li");
    newElement.innerText = "Banana🍌";
    list.appendChild(newElement);
  } else if (input.value.toLowerCase() == "kiwi") {
    count++;
    var newElement = document.createElement("li");
    newElement.innerText = "Kiwi🥝";
    list.appendChild(newElement);
  }
}
function function2() {
  number.classList.remove("hidden");
  numberofFruits.innerText = count;
}
function function3() {
  number.classList.add("hidden");
}
function function4() {
  if (list.classList.contains("hidden") && count > 0) {
    list.classList.remove("hidden");
    buttonShow.innerHTML = "Hide Fruits";
  } else if (count > 0) {
    list.classList.add("hidden");
    buttonShow.innerText = "Show Fruits";
  }
}
