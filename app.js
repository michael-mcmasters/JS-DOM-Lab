let Temperatures = {
  Fahraenheit: "Fahrenheit",
  Celsius: "Celsius",
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
    setDropDown(event.target);
  })
}




function calculate() {
  const valueElement = document.getElementById("value");
  const convertFrom = dropDown.innerText.trim();
  
  const fara = convertToFahrenheit(convertFrom, valueElement.value);
  const celsius = convertToCelsius(convertFrom, valueElement.value);
  const kelvin = convertToKelvin(convertFrom, valueElement.value);
  const rankine = convertToRankine(convertFrom, valueElement.value);
  
  updateTempDisplays(fara, celsius, kelvin, rankine);
}

function convertToFahrenheit(convertFrom, d) {
  if (convertFrom === Temperatures.Fahraenheit)
    return d;
  else if (convertFrom === Temperatures.Celsius) {
      return d * 1.8 + 32;
  } else if (convertFrom === Temperatures.Kelvin) {
      return d * 1.8 - 459.67;
  } else if (convertFrom === Temperatures.Rankine) {
    return d - 459.67;
  }
  console.error("Could not find conversion");
}

function convertToCelsius() {
  
}

function convertToKelvin() {
  
}

function convertToRankine() {
  
}

function updateTempDisplays(fara, celsius, kelvin, rankine) {
  document.getElementById("fahrenheit-num").innerText = fara;
  document.getElementById("celsius-num").innerText = celsius;
  document.getElementById("kelvin-num").innerText = kelvin;
  document.getElementById("rankine-num").innerText = rankine;
}

function setDropDown(selectedItem) {
  dropDown.innerText = selectedItem.innerText;
}