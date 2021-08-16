import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";

import Header from "./../components/Header";
import { TransactionContext } from "../contexts/TransactionContext";
import { getDoc } from "../services/firestoreApi";
import { COLLECTIONS } from "../static/constants";
import AddNewTransaction from "./AddNewTransaction";
import { auth } from "../config";

const EditTransaction = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  // const context = useContext(TransactionContext);

  const { USERS, TRANSACTIONS } = COLLECTIONS;

  useEffect(() => {
    getDoc(`${USERS}/${auth.currentUser.uid}/${TRANSACTIONS}`, id).then(
      (data) => {
        console.log("data", data);
        setData(data);
      }
    );
  }, []);

  return (
    <div className="transaction-page">
      {/* <Header /> */}

      {data && <AddNewTransaction data={data} />}

      {/* <div className="transaction-page__wrapper wrapper">
        <h1>Edit Transaction</h1>

        <form className="form">
          <div className="radio-group">
            <div className="form__group is-radio">
              <input
                type="radio"
                id="expense"
                name="type"
                value="expense"
                checked
                onChange={() => {}}
              />
              <label htmlFor="expense">
                <span></span>Expense
              </label>
            </div>

            <div className="form__group is-radio">
              <input
                type="radio"
                id="income"
                name="type"
                value="income"
                onChange={() => {}}
              />
              <label htmlFor="income">
                <span></span>Income
              </label>
            </div>
          </div>

          <div className="form__group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Add Transaction title"
              id="title"
              onChange={() => {}}
            />
          </div>

          <div className="form__group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              placeholder="Add Amount"
              id="amount"
              onChange={() => {}}
            />
          </div>

          <div className="form__buttons">
            <button type="submit" className="button is-primary">
              Update Transaction
            </button>
            <Link to="/" className="button is-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
     */}
    </div>
  );
};

export default EditTransaction;
