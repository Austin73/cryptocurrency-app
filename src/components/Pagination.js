import React from 'react'
import '../styles/Pagination.css'

function Pagination({totalCurrency,paginate}) {
    const pageNumbers=[];
    console.log(totalCurrency);
    for(let i=1;i<=Math.ceil(totalCurrency/20);i++)
    {
         pageNumbers.push(i)
    }
    console.log(pageNumbers);
  return (
    <div>
        <ul className='pagination'>
          {
              pageNumbers.map(number=>{
                return ( <li key={number} className='page-item'>
                      <a onClick={() => paginate(number)} href='!#' className='page-link'>
                          {number} 
                      </a>
                     
                  </li>)
              })
          }
        </ul>
    </div>
  )
}

export default Pagination