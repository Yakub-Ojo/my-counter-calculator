const addingButton = document.querySelector(".adding-button");
const subButton = document.querySelector(".sub-button");
let initialValue = document.querySelector("#initial-value");
Number("initialValue.innerText");
addingButton.addEventListener("click", () => {
    
    initialValue.innerText++;
});
subButton.addEventListener("click", () => {
    initialValue.innerText--;
});

//Calculator Application
const input = document.querySelector('.cal-val');
let content = Number(input.textContent);
let base = 2;
let base2 = 0;
console.log((base));

const plus = document.querySelector('.plus');
plus.addEventListener('click', e => {
    base += base2;
    console.log(content);
})

const one = document.querySelector('.one');
let oneContent = Number(one.textContent);
one.addEventListener('click', () => {
    base += oneContent;
    //console.log((content));
    //console.log(base)
})

const two = document.querySelector('.two');
let twoContent = Number(two.textContent)
two.addEventListener('click', () => {
    base += twoContent;
    //console.log((content));
})

console.log(base)

let a = ["1", "+", "2"];
a.forEach(item => {
    Number(item);
    console.log(item);
})
//console.log(a)