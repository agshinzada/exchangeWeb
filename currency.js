class Currency{

    constructor(currencyFrom,currencyTo){
        this.currencyFrom = currencyFrom;
        this.currencyTo = currencyTo;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;

    }

    exchange(){
        return new Promise((resolve,reject)=>{

            fetch(this.url + this.currencyFrom)
            .then(response=>response.json())
            .then(data=>{
                const parity = data["rates"][this.currencyTo];
                const amount2 = Number(this.amount);
                let total = parity*amount2;

                resolve(total);
            })
            .catch(err=>reject(err))

        })
      

        
    }

   changeCurrencyFrom(value){
        this.currencyFrom = value;

    }

    changeCurrencyTo(value){
        this.currencyTo = value;
    }

    changeAmount(value){
        this.amount = value;
    }

}