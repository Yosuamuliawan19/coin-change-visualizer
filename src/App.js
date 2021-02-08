import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [coins, setCoins] = useState("[1,2,3]");
  const [amount, setAmount] = useState("5");
  let coinsRepresentation = coins
    .toString()
    .substr(1, coins.length - 2)
    .split(",");
  const generate = () => {
    console.log("trying");
    console.log([coins, parseInt(amount)]);
    // cc(coinsRepresentation, coinsRepresentation.length, parseInt(amount));
  };
  let iter = 0;
  const cc = (S, m, n) => {
    iter++;
    if (iter > 100) return;
    if (n == 0) return 1;
    if (n < 0) return 0;
    if (m <= 0 && n >= 1) return 0;
    return c(S, m - 1, n) + c(S, m, n - S[m - 1]);
  };
  return (
    <div>
      <div className="coins-display">
        {" "}
        {coinsRepresentation.map(data => {
          return <div className="coins-display-coin">{data}</div>;
        })}
      </div>
      <div> {amount}</div>
      <input
        type="text"
        value={coins}
        onChange={e => setCoins(e.target.value)}
      />
      <input
        type="number"
        value={amount}
        onChange={e => setCoins(e.target.value)}
      />
      <button onClick={_ => generate()} />
    </div>
  );
}
