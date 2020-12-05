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
    //console.log(event.target);
    setDropDown(event.target);
  })
}




function calculate() {
  const valueElement = document.getElementById("value");
  const convertFrom = dropDown.innerText.trim();
  const celcius = convertToFahrenheit(convertFrom, valueElement.value);
  updateTempDisplays(celcius);
}
//return (degrees - 32) * 5 / 9;

function convertToFahrenheit(convertFrom, degrees) {
  if (convertFrom === Temperatures.Celsius) {
      return (degrees - 32) / 1.8;
  } else if (convertFrom === Temperatures.Kelvin) {
      return ((degrees - 32) / 1.8) + 273.15;
  } else if (convertFrom === Temperatures.Rankine) {
    return -1;
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
  document.getElementById("celsius-num").innerText = fara;
  document.getElementById("kelvin-num").innerText = fara;
  document.getElementById("rankine-num").innerText = fara;
}

function setDropDown(selectedItem) {
  dropDown.innerText = selectedItem.innerText;
}