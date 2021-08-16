import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TotalBalance from "../components/TotalBalance";
import TotalExpense from "../components/TotalExpense";
import TotalIncome from "../components/TotalIncome";
import TransactionItem from "../components/TransactionItem";
import { auth } from "../config";
import { useCollection } from "../hooks/useCollection";
import { COLLECTIONS } from "../static/constants";
import { calculateBalance } from "../utils/calculateBalance";
import Header from "./../components/Header";

// const transaction = [
//   {
//     id: "1",
//     title: "Shopping",
//     type: "expense",
//     amount: 100,
//   },
//   {
//     id: "2",
//     title: "Netflix",
//     type: "expense",
//     amount: 10,
//   },
//   {
//     id: "3",
//     title: "Food",
//     type: "expense",
//     amount: 40,
//   },
//   {
//     id: "4",
//     title: "Freelance Project",
//     type: "income",
//     amount: 700,
//   },
//   {
//     id: "5",
//     title: "Tinex",
//     type: "expense",
//     amount: 10,
//   },
// ];

const filterTransactions = (data, type) => {
  return data.filter((tran) => tran.type === type);
};

const Dashboard = () => {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [transactions, setTransactions] = useState([]);

  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const { USERS, TRANSACTIONS } = COLLECTIONS;

  const { loading, error, data } = useCollection(
    `${USERS}/${auth.currentUser.uid}/${TRANSACTIONS}`
  );

  const [filteredData, setFilteredData] = useState(data);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    const { totalIncome, totalExpense } = calculateBalance(data);

    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);

    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleFilter = (type) => {
    setFilterType(type);
    if (type === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(filterTransactions(data, type));
    }
  };

  // useEffect(() => {
  //   setLoading(true);
  //   getDocs(TRANSACTIONS)
  //     .then((data) => {
  //       setLoading(false);
  //       setTransactions(data.length > 0 ? data : []);
  //     })
  //     .catch((err) => {
  //       console.log("error getting docs", err);
  //       setError(err.message);
  //     });
  // }, []);

  return (
    <div className="dashboard">
      <div className="wrapper">
        <div className="dashboard__budget">
          <TotalBalance amount={balance} />
          <TotalIncome amount={income} />
          <TotalExpense amount={expense} />
        </div>

        <div className="dashboard__nav">
          <div className="dashboard__nav__filter">
            <button
              onClick={() => handleFilter("all")}
              className={`button ${filterType === "all" ? "is-active" : ""}`}
            >
              All Transaction
            </button>
            <button
              onClick={() => handleFilter("income")}
              className={`button ${filterType === "income" ? "is-active" : ""}`}
            >
              Income
            </button>
            <button
              onClick={() => handleFilter("expense")}
              className={`button ${
                filterType === "expense" ? "is-active" : ""
              }`}
            >
              Expense
            </button>
          </div>
          <Link to="/add" className="button is-primary">
            Add New Transaction
          </Link>
        </div>

        <div className="dashboard__transaction">
          {loading && <p>Loading...</p>}
          {filteredData.length > 0 &&
            filteredData.map((item) => (
              <TransactionItem
                title={item.title}
                amount={item.amount}
                type={item.type}
                key={item.id}
                id={item.id}
              />
            ))}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
