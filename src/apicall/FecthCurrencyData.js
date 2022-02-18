import { currencyDataLoading, setCurrencyData } from '../actions/index'


function FetchCurrencyData() {

    return function (dispatch) {
        console.log(`https://api.coincap.io/v2/assets`)
        dispatch(currencyDataLoading())
        
        fetch(`https://api.coincap.io/v2/assets`)
        .then(res => {
          
            return res.json()
        })
        .then(data=>{
          
            
            dispatch(setCurrencyData(data))
        })
        
    }
}

export default FetchCurrencyData