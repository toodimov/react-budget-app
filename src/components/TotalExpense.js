const TotalExpense = ({ amount }) => {
  return (
    <div>
      <h6>Total Expense</h6>
      <h1 className="text--danger">€{amount}</h1>
    </div>
  );
};

export default TotalExpense;
