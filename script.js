let form = document.querySelector("form");

let cardNumberInput = document.getElementById('cardNumberInput');
let month = document.getElementById('month');
let year = document.getElementById('year');
let holderNameInput = document.getElementById('holderNameInput');
let cvvInput = document.getElementById('cvvInput');

cardNumberInput.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  });

let date = document.getElementById('date');
let cvv = document.getElementById('cvv');
let holderCardName = document.getElementById('holderCardName');
let cardNumber = document.getElementById('cardNumber');


$('#js-tilt').tilt({
    glare: true,
    maxGlare: .1
})


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

    if(cardNumberInputValue.trim().length != 19){
        alert("Error, Please enter a valid card");
        return;
    }

    
    if(cvvValue.length != 3){
        alert("Error, Please enter a valid cvv");
        return;
    }
 
    if(cardNumberInputValue == "" || cvvValue == "" || holderNameInputValue == "" || yearInput == "" || monthInput == ""){
        alert("please fill all the labels");
        
        return;
    }else{
        date.innerText = monthInput + "/" + yearInput;
        holderCardName.innerText = holderNameInputValue;
        cvv.innerText = cvvValue;
        cardNumber.innerText = cardNumberInputValue.trim();
    }

}