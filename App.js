import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
