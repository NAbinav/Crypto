import React, { useState } from 'react';
import axios from 'axios';

const Stocks = () => {
  const [data, setData] = useState([
    { Sno: 1, Coin: "Bitcoin (BTC)", Price: 40000 },
    { Sno: 2, Coin: "Ethereum (ETH)", Price: 2500 },
    { Sno: 3, Coin: "Binance Coin (BNB)", Price: 400 },
    { Sno: 4, Coin: "Solana (SOL)", Price: 150 },
    { Sno: 5, Coin: "Cardano (ADA)", Price: 1.20 },
    { Sno: 6, Coin: "XRP (XRP)", Price: 0.80 },
    { Sno: 7, Coin: "Polkadot (DOT)", Price: 25 },
    { Sno: 8, Coin: "Dogecoin (DOGE)", Price: 0.20 },
    { Sno: 9, Coin: "Avalanche (AVAX)", Price: 100 },
    { Sno: 10, Coin: "Chainlink (LINK)", Price: 20 },
    { Sno: 11, Coin: "Litecoin (LTC)", Price: 150 },
    { Sno: 12, Coin: "Bitcoin Cash (BCH)", Price: 500 },
    { Sno: 13, Coin: "Algorand (ALGO)", Price: 1.00 },
    { Sno: 14, Coin: "Stellar (XLM)", Price: 0.30 },
    { Sno: 15, Coin: "VeChain (VET)", Price: 0.10 },
    { Sno: 16, Coin: "Theta Network (THETA)", Price: 5.00 },
    { Sno: 17, Coin: "Filecoin (FIL)", Price: 50 },
    { Sno: 18, Coin: "Terra (LUNA)", Price: 60 },
    { Sno: 19, Coin: "TRON (TRX)", Price: 0.05 },
    { Sno: 20, Coin: "Polygon (MATIC)", Price: 1.50 }
]
);

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    setData(prevData =>
      prevData.map((item, i) => (i === index ? { ...item, value } : item))
    );
  };

  const handleBuyClick = async (coin, val) => {
    try {
      const response = await axios.post(
        "https://65d95041c96fbb24c1bce5a0.mockapi.io/CRYTOAPI",
        { coin, val },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );

      console.log("Data uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (

    <>
      <table className="table table-striped">
  <thead>
    <tr>
      <th>ID</th>
      <th>Coin</th>
      <th>Price</th>
      <th>Value</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr key={index}>
        <td>{item.Sno}</td>
        <td>{item.Coin}</td>
        <td>{item.Price}</td>
        <td>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              value={item.value || ''}
              onChange={(event) => handleInputChange(event, index)}
              placeholder="Enter a number"
            />
          </div>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-success button"
            onClick={() => handleBuyClick(item.Coin, item.value)}>Buy</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      
    </>
  );
};

export default Stocks;
