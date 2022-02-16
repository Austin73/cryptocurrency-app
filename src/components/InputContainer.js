import React from 'react'
import { useSelector } from 'react-redux'
// import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { change_city, set_city } from '../actions'
// import '../styles/InputContainer.css'
import { useEffect } from 'react'
import FetchCurrencyData from '../apicall/FecthCurrencyData'

function InputContainer() {

    // const [city, setcity] = useState("")
    const dispatch = useDispatch()
    
    const currencyData = useSelector(state => state.currencyData)
    // const changecity=useSelector(state=>state.changecity)
  
    

    useEffect(() => {
        
        dispatch(FetchCurrencyData())
    }, [])

    return (
        <div>
            <input type="search"
                name='city'
                placeholder='Enter City'
                autoFocus
                
                onChange={(e) => {
                  
                }}

            />
            <button onClick={
                () => {
     
                }
            }>Search</button>
        </div>
    )
}

export default InputContainer
