const addingButton = document.querySelector(".adding-button");
const subButton = document.querySelector(".sub-button");
let initialValue = document.querySelector("#initial-value");
Number("initialValue.innerText");
console.log(initialValue.innerText);
addingButton.addEventListener("click", () => {
    
    initialValue.innerText++;
    console.log(initialValue.innerText)
})
subButton.addEventListener("click", () => {
    initialValue.innerText--;
})