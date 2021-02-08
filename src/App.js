import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [coins, setCoins] = useState("[1,2,3]");
  const [amount, setAmount] = useState("4");
  const [steps, setSteps] = useState([]);
  const [answer, setAnswer] = useState([]);
  let coinsRepresentation = coins
    .toString()
    .substr(1, coins.length - 2)
    .split(",");
  const generate = () => {
    console.log("trying");
    console.log([coins, parseInt(amount)]);
    let ans = cc(
      coinsRepresentation,
      coinsRepresentation.length,
      parseInt(amount)
    );
    console.log(ans);
    console.log(stepsTemporary);
    setSteps(stepsTemporary);
    setAnswer(ans);
  };
  let stepsTemporary = [];
  let iter = 0;
  const cc = (S, m, n) => {
    stepsTemporary.push([iter, m, n]);
    iter++;
    if (iter > 100) return;
    if (n == 0) return 1;
    if (n < 0) return 0;
    if (m <= 0 && n >= 1) return 0;
    return cc(S, m - 1, n) + cc(S, m, n - S[m - 1]);
  };
  return (
    <div>
      <div className="coins-display">
        {" "}
        {coinsRepresentation.map(data => {
          return (
            <div className="coins-display-coin slit-in-vertical ">{data}</div>
          );
        })}
      </div>
      <div className="amount-display"> {amount}</div>
      <input
        type="text"
        value={coins}
        onChange={e => setCoins(e.target.value)}
      />
      <input
        type="number"
        value={amount}

        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={_ => generate()} />
      <div>
        {steps.map(data => {
          return (
            <div>
              Coins left: {data[1]} Amount: {data[2]}
            </div>
          );
        })}
      </div>
      <div>{answer}</div>
    </div>
  );
}
