let Temperature = {
  Fahraenheit: "Fahrenheit",
  Celcius: "Celcius",
  Kelvin: "Kelvin",
  Rankine: "Rankine",
}

const button = document.getElementById("calculate-btn");
const dropDown = document.getElementById("dropdownMenu2");
const dropDownItems = document.getElementsByClassName("dropdown-item");




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
  const convertFrom = dropDown.innerText.trim();
  const celcius = convertToFahrenheit(convertFrom, valueElement.value);
  setValue(celcius);
}

function convertToFahrenheit(temperature, value) {
  if (temperature === Temperature.Fahraenheit) {
    return (value - 32) * 5/9;
  } else if (temperature === Temperature.Celcius) {
    
  } else if (temperature === Temperature.Kelvin) {
    
  } else if (temperature === Temperature.Rankine) {
    
  } else {
    console.error("Could not find conversion");
  }
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
  dropDown.innerText = "Fahraenheit";
}