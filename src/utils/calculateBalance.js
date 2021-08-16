export const calculateBalance = (data) => {
  let totalIncome = 0;
  let totalExpense = 0;

  if (data.length > 0) {
    const incomes = data.filter((tran) => tran.type === "income");

    if (incomes.length) {
      incomes.forEach((item) => {
        totalIncome += Number(item.amount);
      });
    }

    const expenses = data.filter((tran) => tran.type === "expense");

    if (expenses.length) {
      expenses.forEach((item) => {
        totalExpense += Number(item.amount);
      });
    }
  }

  return { totalIncome, totalExpense };
};
