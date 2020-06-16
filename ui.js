class UI{

    constructor(currencyFrom, currencyTo){
        this.currencyFrom = currencyFrom;
        this.currencyTo = currencyTo;

        this.outputFrom = document.getElementById("fromLabel").firstChild;
        this.outputTo = document.getElementById("toLabel").firstChild;
        this.outputResult = document.getElementById("result");

    }

    changeFirst(){
        this.outputFrom.textContent = this.currencyFrom.options[this.currencyFrom.selectedIndex].textContent;
    }

    changeSecond(){
        this.outputTo.textContent = this.currencyTo.options[this.currencyTo.selectedIndex].textContent;
    }

    displayResult(result){
        this.outputResult.value = result;
    }

}