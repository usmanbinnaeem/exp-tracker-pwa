import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  type Inputs = {
    name: string;
    amount: string;
    // transactionType: TransactionType;
  };

  const { register } = useForm<Inputs>();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (amount > 0) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };

      addTransaction(newTransaction);
      setText("");
      setAmount(0);
    }
  };
  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form=control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            ref={register({ required: true })}
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
            placeholder="Enter Text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            {/* <br /> (negative - expense, positive - income) */}
          </label>
          <input
            type="number"
            ref={register({ required: true, min: 1 })}
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAmount(parseFloat(e.target.value));
            }}
            placeholder="Add amount"
          />
        </div>
        <button onClick={onSubmit} className="add-btn">
          Add Transaction
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (amount > 0) {
              const dltTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: -amount,
              };
              addTransaction(dltTransaction);
              setText("");
              setAmount(0);
            }
          }}
          className="dlt-btn"
        >
          Add Expense
        </button>
      </form>
    </>
  );
};
export default AddTransaction;
