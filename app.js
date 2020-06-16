const currencyFrom = document.getElementById("currencyFrom");
const currencyTo = document.getElementById("currencyTo");
const amountElement = document.getElementById("amount");
const currency = new Currency("USD","USD");
const ui = new UI(currencyFrom,currencyTo);

eventListeners();

function eventListeners(){

    amountElement.addEventListener("input",changeCurrency);
    currencyFrom.onchange = function(){
        currency.changeCurrencyFrom(currencyFrom.options[currencyFrom.selectedIndex].textContent);
        ui.changeFirst();
        changeCurrency();
    };

    currencyTo.onchange = function(){
        currency.changeCurrencyTo(currencyTo.options[currencyTo.selectedIndex].textContent);
        ui.changeSecond();
        changeCurrency();
    };

}

function changeCurrency(){
    currency.changeAmount(amountElement.value);
        currency.exchange()
        .then(result=>ui.displayResult(result))
        .catch(err=>console.error(err));


}