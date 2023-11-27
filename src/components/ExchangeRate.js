import React from 'react'

const ExchangeRate = ({exchangedData}) => {
  // console.log(`From Exhcnage Rate: ${exchangeRate}`)

  return (
    <div className="exchange-rate">
      <h3>Exchange Rate</h3>
      <h1>{exchangedData.exchangeRate}</h1>
      <p>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
    </div>
    
  )
}

export default ExchangeRate