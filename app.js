const button = document.getElementById("calculate-btn");
button.addEventListener("click", () => {
  const valueElement = document.getElementById("value");
  const celcius = calculate(valueElement.value);
  setValue(celcius);
});

const dropDownItems = document.getElementsByClassName("dropdown-item");
for (let i = 0; i < dropDownItems.length; i++) {
  dropDownItems[i].addEventListener("click", (event) => {
    console.log(event.target);
  })
}

function setDropDown() {
  const dropDownMenu = document.getElementById("dropdownMenu2");
  dropDownMenu.innerText = "Fahraenheit";
}

function calculate(value) {
  return (value - 32) * 5/9;
}

function setValue() {
  console.log(celcius);
}