import { Link, Redirect } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
// import Header from "./../components/Header";
import { createDoc, setAndMergeDoc } from "../services/firestoreApi";
import { COLLECTIONS } from "../static/constants";
import { useState } from "react";
import { auth, Timestamp } from "../config";

const AddNewTransaction = ({ data }) => {
  const {
    handleSubmit,
    formState: { errors },
    // register,
    control,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const [type, setType] = useState(data ? data.type : "expense");

  console.log(auth.currentUser);
  const { USERS, TRANSACTIONS } = COLLECTIONS;

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      if (data) {
        await setAndMergeDoc(
          `${USERS}/${auth.currentUser.uid}/${TRANSACTIONS}`,
          data.id,
          { type, ...values }
        );
      } else {
        await createDoc(`${USERS}/${auth.currentUser.uid}/${TRANSACTIONS}`, {
          createdAt: Timestamp.now(),
          type,
          ...values,
        });
      }
      setDone(true);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (done) {
    return <Redirect to="/" />;
  }

  // const setTransactionType = () => {
  //   console.log("typeee");
  //   setType("expense");
  // };

  console.log("data", data);

  return (
    <div className="transaction-page">
      <div className="transaction-page__wrapper wrapper">
        <h1>{data ? "Edit Transaction" : "Add New Transaction"}</h1>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="radio-group">
            <div className="form__group is-radio">
              <input
                type="radio"
                id="expense"
                name="type"
                value={type}
                onChange={() => setType("expense")}
                checked={type === "expense"}
                // {...register("type")}
              />

              {/* <Controller
                name="type"
                control={control}
                render={({ onChange, value }) => (
                  <input
                    type="radio"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    // checked={data.type === "expense"}
                  />
                )}
              /> */}
              <label htmlFor="expense">
                <span></span>Expense
              </label>
            </div>

            <div className="form__group is-radio">
              <input
                type="radio"
                id="income"
                name="type"
                value={type}
                onChange={() => setType("income")}
                checked={type === "income"}
              />

              <label htmlFor="income">
                <span></span>Income
              </label>
            </div>
          </div>

          <div className="form__group">
            <label htmlFor="title">Title</label>

            <Controller
              name="title"
              control={control}
              defaultValue={data?.title || ""}
              rules={{ required: true }}
              render={({ field }) => <input {...field} />}
            />
          </div>

          <div className="form__group">
            <label htmlFor="amount">Amount</label>
            {/* <input
              type="number"
              placeholder="Add Amount"
              id="amount"
              value={data.amount || ""}
              {...register("amount")}
            /> */}

            <Controller
              name="amount"
              control={control}
              defaultValue={data?.amount || ""}
              rules={{ required: true }}
              render={({ field }) => <input type="number" {...field} />}
            />
          </div>
          {errors.rules && <p>{errors.rules.message}</p>}

          <div className="form__buttons">
            <button
              disabled={loading}
              type="submit"
              className="button is-primary"
            >
              {data ? "Update Transaction" : "Add New Transaction"}
            </button>
            <Link to="/" className="button is-secondary">
              Cancel
            </Link>
          </div>
        </form>
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default AddNewTransaction;
