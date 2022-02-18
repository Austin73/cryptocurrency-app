import React, { useState } from 'react'
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


    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("")
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
