import "./App.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Категория", "Рублей в месяц"],
  ["Детское", 5000],
  ["Обучение", 8000],
  ["Продукты", 4000],
  ["Счета", 9000],
  ["Здоровье", 1500],
];

export const options = {
  title: "Распределение расходов в марте",
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;
