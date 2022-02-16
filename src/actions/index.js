
export const setCurrencyData=(data)=>{
     return {
         type:"SETCURRENCYDATA",
         payload:data
     }
}

export const currencyDataLoading=()=>{
    return{
        type: "CURRENCYDATALOADING"
    }
}