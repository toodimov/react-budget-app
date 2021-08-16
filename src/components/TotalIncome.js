const TotalIncome = ({ amount }) => {
  return (
    <div>
      <h6>Total Income</h6>
      <h1 className="text--sucess">€{amount}</h1>
    </div>
  );
};

export default TotalIncome;
