import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import Header from "./../components/Header";

const AddNewTransaction = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("A form was submitted: ");
  };

  return (
    <div className="transaction-page">
      <Header />

      <div className="transaction-page__wrapper wrapper">
        <h1>Add New Transaction</h1>

        <form className="form" onSubmit={handleSubmit}>
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
              Add New Transaction
            </button>
            <Link to="/" className="button is-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTransaction;
