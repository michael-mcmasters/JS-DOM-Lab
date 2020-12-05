const button = document.getElementById("calculate-btn");
const dropDown = document.getElementById("dropdownMenu2");
const dropDownItems = document.getElementsByClassName("dropdown-item");

// Object for spelling and to ensure there is always a space after. This makes the arrow look nicer in the dropdown menu.
let Temperatures = {
  Fahraenheit: "Fahrenheit ",
  Celsius: "Celsius ",
  Kelvin: "Kelvin ",
  Rankine: "Rankine ",
}





button.addEventListener("click", () => {
  calculate();
});

document.body.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    calculate();
  } else if (event.key === "F" || event.key === "f") {
    setDropDownText(Temperatures.Fahraenheit);
  } else if (event.key === "C" || event.key === "c") {
    setDropDownText(Temperatures.Celsius);
  } else if (event.key === "K" || event.key === "k") {
    setDropDownText(Temperatures.Kelvin);
  } else if (event.key === "R" || event.key === "r") {
    setDropDownText(Temperatures.Rankine);
  }
});

for (let i = 0; i < dropDownItems.length; i++) {
  dropDownItems[i].addEventListener("click", (event) => {
    setDropDownText(event.target.innerText);
  })
}




function calculate() {
  const valueElement = document.getElementById("value");
  const convertFrom = dropDown.innerText;
  const degrees = parseFloat(valueElement.value);

  const fara = convertToFahrenheit(convertFrom, degrees);
  const celsius = convertToCelsius(convertFrom, degrees);
  const kelvin = convertToKelvin(convertFrom, degrees);
  const rankine = convertToRankine(convertFrom, degrees);

  updateTemperatureDisplays(fara, celsius, kelvin, rankine);
}

function convertToFahrenheit(convertFrom, d) {
  if (convertFrom === Temperatures.Fahraenheit) {
    return d;
  } else if (convertFrom === Temperatures.Celsius) {
    return d * 1.8 + 32;
  } else if (convertFrom === Temperatures.Kelvin) {
    return d * 1.8 - 459.67;
  } else if (convertFrom === Temperatures.Rankine) {
    return d - 459.67;
  }
  console.error("Could not find conversion");
}

function convertToCelsius(convertFrom, d) {
  if (convertFrom === Temperatures.Fahraenheit) {
    return (d - 32) / 1.8;
  } else if (convertFrom === Temperatures.Celsius) {
    return d;
  } else if (convertFrom === Temperatures.Kelvin) {
    return d - 273.15;
  } else if (convertFrom === Temperatures.Rankine) {
    return (d - 32 - 459.67) / 1.8;
  }
  console.error("Could not find conversion");
}

function convertToKelvin(convertFrom, d) {
  if (convertFrom === Temperatures.Fahraenheit) {
    return (d + 459.67) / 1.8;
  } else if (convertFrom === Temperatures.Celsius) {
    return d + 273.15;
  } else if (convertFrom === Temperatures.Kelvin) {
    return d;
  } else if (convertFrom === Temperatures.Rankine) {
    return d / 1.8;
  }
  console.error("Could not find conversion");
}

function convertToRankine(convertFrom, d) {
  if (convertFrom === Temperatures.Fahraenheit) {
    return d + 459.67;
  } else if (convertFrom === Temperatures.Celsius) {
    return d * 1.8 + 32 + 459.67;
  } else if (convertFrom === Temperatures.Kelvin) {
    return d * 1.8;
  } else if (convertFrom === Temperatures.Rankine) {
    return d;
  }
  console.error("Could not find conversion");
}

function updateTemperatureDisplays(fara, celsius, kelvin, rankine) {
  document.getElementById("fahrenheit-num").innerText = fara + " F";
  document.getElementById("celsius-num").innerText = celsius + " C";
  document.getElementById("kelvin-num").innerText = kelvin + " K";
  document.getElementById("rankine-num").innerText = rankine + " R";
}

function setDropDownText(dropDownOption) {
  dropDown.innerText = dropDownOption;
}