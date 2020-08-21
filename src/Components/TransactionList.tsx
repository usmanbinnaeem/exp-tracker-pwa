import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import { ITrans } from "../Types/Types";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <ul className="list">
        {transactions.map((transaction: ITrans) => (
          <Transaction
            id={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
          />
        ))}
      </ul>
    </>
  );
};
export default TransactionList;
