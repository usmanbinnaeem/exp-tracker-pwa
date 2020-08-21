import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ITrans } from "../Types/Types";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction: ITrans) => transaction.amount);
  const total = amounts
    .reduce((acc: number, item: number) => (acc += item), 0)
    .toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};
export default Balance;
