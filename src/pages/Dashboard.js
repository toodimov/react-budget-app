import { Link } from "react-router-dom";
import TotalBalance from "../components/TotalBalance";
import TotalExpense from "../components/TotalExpense";
import TotalIncome from "../components/TotalIncome";
import TransactionItem from "../components/TransactionItem";
import Header from "./../components/Header";

const transaction = [
  {
    id: "1",
    title: "Shopping",
    type: "expense",
    amount: 100,
  },
  {
    id: "2",
    title: "Netflix",
    type: "expense",
    amount: 10,
  },
  {
    id: "3",
    title: "Food",
    type: "expense",
    amount: 40,
  },
  {
    id: "4",
    title: "Freelance Project",
    type: "income",
    amount: 700,
  },
  {
    id: "5",
    title: "Tinex",
    type: "expense",
    amount: 10,
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="wrapper">
        <div className="dashboard__budget">
          <TotalBalance />
          <TotalIncome />
          <TotalExpense />
        </div>

        <div className="dashboard__nav">
          <div className="dashboard__nav__filter">
            <button className="button is-active">All Transaction</button>
            <button className="button">Income</button>
            <button className="button">Expense</button>
          </div>
          <Link to="/add" className="button is-primary">
            Add New Transaction
          </Link>
        </div>

        <div className="dashboard__transaction">
          {transaction.map((item) => (
            <TransactionItem
              title={item.title}
              amount={item.amount}
              type={item.type}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
