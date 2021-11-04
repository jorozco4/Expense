import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "car insurace",
      amount: 294.37,
      date: new Date(2021, 2, 5),
    },
    {
      id: "e2",
      title: "toilet paper",
      amount: 94.67,
      date: new Date(2021, 5, 16),
    },
    {
      id: "e3",
      title: "food",
      amount: 94.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "clothes",
      amount: 183.55,
      date: new Date(2021, 6, 11),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
