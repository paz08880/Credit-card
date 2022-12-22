

let form = document.querySelector("form");

let cardNumberInput = document.getElementById('cardNumberInput');
let month = document.getElementById('month');
let year = document.getElementById('year');
let holderNameInput = document.getElementById('holderNameInput');
let cvvInput = document.getElementById('cvvInput');

let date = document.getElementById('date');
let cvv = document.getElementById('cvv');
let holderCardName = document.getElementById('holderCardName');


let correctAll = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    cheackInputs();
})

function cheackInputs(){
    const cardNumberInputValue = cardNumberInput.value;
    const monthInput = month.value;
    const yearInput = year.value;
    const holderNameInputValue = holderNameInput.value;
    const cvvValue = cvvInput.value;
 
    if(cardNumberInputValue == "" || cvvValue == "" || holderNameInputValue == "" || yearInput == "" || monthInput == ""){
        alert("please fill all the labels");
        
        return;
    }else{
        date.innerText = monthInput + "/" + yearInput;
        holderCardName.innerText = holderNameInputValue;
        cvv.innerText = cvvValue;
    }

}