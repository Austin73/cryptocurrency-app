import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { useState } from 'react'

// import { change_city, set_city } from '../actions'
// import '../styles/InputContainer.css'
import { useEffect } from 'react'
import FetchCurrencyData from '../apicall/FecthCurrencyData'
import DisplayCurrency from './DisplayCurrency'
import { useDispatch } from 'react-redux'


const styles = {
    input: {
        marginLeft: "20%",
        marginRight: "20%",
        width: "40%",
        fontFamily: "Georgia",
        border: "5px solid black",
        background: "yellow",
        lineHeight: "2",

    }
}
function InputContainer() {

    // const [city, setcity] = useState("")
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("")
    // const currencyData = useSelector(state => state.currencyData)
    // const changecity=useSelector(state=>state.changecity)
    const currencyData = useSelector(state => state.currencyData)
    //// const isLoading =useSelector(state=>state.isLoading)
    console.log(currencyData.currencyData.data);
    // console.log(isLoading);

    console.log(searchTerm)
    useEffect(() => {

        dispatch(FetchCurrencyData())
    }, [])


    return (
        <div>


            <input type="search"

                name='currency'
                placeholder='Search currency'
                autoFocus
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
                style={styles.input}
            />
            <DisplayCurrency searchTerm={searchTerm} />
        </div>
    )
}

export default InputContainer
