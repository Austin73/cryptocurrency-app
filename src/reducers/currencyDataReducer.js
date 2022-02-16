const currencyDataReducer=(state={
    currencyData:{},
    isLoading:false
},action) =>{

    switch(action.type)
    {
        case 'SETCURRENCYDATA':
            return {
                currencyData:action.payload,
                isLoading:false
            }
        case "CURRENCYDATALOADING":
            return{
                ...state,
                isLoading:true
            }
        default:
            return state
    }
}

export default currencyDataReducer