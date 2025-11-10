//Obtendo os elementos do DOM 

const form = document.querySelector("form");
const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency"); 

// Manipulando o input para receber somente numeros 
amountInput.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amountInput.value = amountInput.value.replace(hasCharactersRegex, "");

    if(amountInput.value === "0"){
        alert("Por favor insira um valor maior que zero");
        amountInput.value = "";
    }
});

//captando o evento de submit (enviar)do formulario 
form.onsubmit = (event) => {
    event.preventDefault(); // Evita o envio do formulário
    console.log(currencySelect.value); 
}