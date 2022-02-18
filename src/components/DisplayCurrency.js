import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination';

const styles = {
    tableStyle: {
        textAlign: "center",
        borderCollapse: "separate",
        borderSpacing: "0 .6em"
    }
}
function DisplayCurrency({ searchTerm }) {
    
    const currencyData = useSelector(state => state.currencyData)
    const size = Object.keys(currencyData.currencyData).length === 0 ? 0 : currencyData.currencyData.data.length;
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastCurrency = currentPage * 20;
    const indexOfFirstCurrency = indexOfLastCurrency - 20
    let currentCurreny = ""
    let paginate = 0;
    if (searchTerm !== "" && Object.keys(currencyData.currencyData).length !== 0) {
        currentCurreny = currencyData.currencyData.data.filter((currency) => {
            return currency.name.toLowerCase() === searchTerm.toLowerCase()
                || currency.id.toLowerCase() === searchTerm.toLowerCase()
                || currency.symbol.toLowerCase() === searchTerm.toLowerCase()
        })
    }
    else {
        currentCurreny = Object.keys(currencyData.currencyData).length === 0 ? {} : currencyData.currencyData.data.slice(indexOfFirstCurrency, indexOfLastCurrency)
        paginate = pageNumber => setCurrentPage(pageNumber);
    }
    return (


        <div>
            {searchTerm === "" && <Pagination totalCurrency={size} paginate={paginate} />}
            <table style={styles.tableStyle}>
                <tr>
                    <th>ID</th>
                    <th>Rank</th>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Supply</th>

                    <th>MaxSupply</th>
                    <th>MarketCap</th>
                    <th>Volume of Trade in last 24 Hr</th>
                    <th>Price (USD)</th>
                    <th>% change in the last 24 Hr</th>
                    <th>Volume Weighted Average Price in the last 24 hours</th>


                </tr>
                {
                    size === 0 || currencyData.isLoading === true ? (<div>Loading</div>) : (
                        currentCurreny.map(currency =>
                            <tr>
                                <td>{currency.id}</td>
                                <td>{currency.rank}</td>
                                <td>{currency.symbol}</td>
                                <td>{currency.name}</td>
                                <td>{parseFloat(currency.supply).toFixed(2)}</td>
                                <td>{currency.maxSupply === null ? 'Not available' : parseFloat(currency.maxSupply).toFixed(2)}</td>
                                <td>{parseFloat(currency.marketCapUsd).toFixed(2)}</td>
                                <td>{parseFloat(currency.volumeUsd24Hr).toFixed(2)}</td>
                                <td>{parseFloat(currency.priceUsd).toFixed(4)}</td>
                                <td>{parseFloat(currency.changePercent24Hr).toFixed(4)}</td>
                                <td>{parseFloat(currency.vwap24Hr).toFixed(2)}</td>

                            </tr>))
                }
            </table>


        </div>)


}

export default DisplayCurrency