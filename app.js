const button = document.getElementById("calculate-btn");
button.addEventListener("click", () => {
  console.log("jfdksl");
});

const dropDownMenu = document.getElementById("dropdownMenu2");
dropDownMenu.innerText = "Fahraenheit";


const dropDownItems = document.getElementsByClassName("dropdown-item");
for (let i = 0; i < dropDownItems.length; i++) {
  dropDownItems[i].addEventListener("click", (event) => {
    console.log(event.target);
  })
}