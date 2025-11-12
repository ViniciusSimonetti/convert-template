// Cotacao das moedas
const USD_PRICE = 5.16;
const EUR_PRICE = 6.16;
const GBP_PRICE = 7.00;

// Obtendo os elementos do DOM 
const form = document.querySelector("form");
const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency"); 
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result"); 

// Manipulando o input (Envio de formulario) para receber somente numeros 
amountInput.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amountInput.value = amountInput.value.replace(hasCharactersRegex, "");

    if(amountInput.value === "0"){
        alert("Por favor insira um valor maior que zero");
        amountInput.value = "";
    }
});

// Captando o evento de submit (enviar) do formulario 
form.onsubmit = (event) => {
    event.preventDefault(); // Evita o envio do formulário
    
    switch(currencySelect.value){
        case "USD":
            convertCurrency(amountInput.value, USD_PRICE, "U$");
            break;
        case "EUR":
            convertCurrency(amountInput.value, EUR_PRICE, "€");
            break;
        case "GBP":
            convertCurrency(amountInput.value, GBP_PRICE, "£");
            break;
    }
}

//Funcao para converter a moeda 
function convertCurrency(amount, price , symbol){
  try {
    //exibindo a cotacao da moeda selecionada 
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //calculando o valor total da conversao
    let total = amount * price;

    //exibindo o resultado da conversao 
    result.textContent = total;

    //aplica a classe css que exibe o footer (resultado da conversao)
    footer.classList.add("show-result");


  } catch (error) {
    //remove a classe css que exibe o footer (resultado da conversao)
    footer.classList.remove("show-result");

    console.error("__ERRO__", error);
    alert("Ocorreu um erro ao converter a moeda. Por favor, tente novamente.");
  }
}

//formata a moeda em Real Brasileiro (BRL)  
function formatCurrencyBRL(value){
    // Converte o numero para utilizar o toLocaleString com as configuracoes de moeda do Brasil (pt-BR) , padrao (R$ 00.00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
