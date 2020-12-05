const button = document.getElementById("calculate-btn");
const dropDownItems = document.getElementsByClassName("dropdown-item");

// Enum
let Temperature = {
  Fahraenheit: 1,
  Celcius: 2,
  Kelvin: 3,
  Rankine: 4,
}

button.addEventListener("click", () => {
  calculate();
});

document.body.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    calculate();
  }
});

for (let i = 0; i < dropDownItems.length; i++) {
  dropDownItems[i].addEventListener("click", (event) => {
    console.log(event.target);
  })
}




function calculate() {
  const valueElement = document.getElementById("value");
  const celcius = convertToFahrenheit(Temperature.Fahraenheit, valueElement.value);
  setValue(celcius);
}

function convertToFahrenheit(temperature, value) {
  if (temperature === Temperature.Fahraenheit) {
    return (value - 32) * 5/9;
  }
  console.log(Temperature);
}

function convertToCelsius() {
  
}

function convertToKelvin() {
  
}

function convertToRankine() {
  
}

function setValue(celcius) {
  console.log(celcius);
}

function setDropDown() {
  const dropDownMenu = document.getElementById("dropdownMenu2");
  dropDownMenu.innerText = "Fahraenheit";
}