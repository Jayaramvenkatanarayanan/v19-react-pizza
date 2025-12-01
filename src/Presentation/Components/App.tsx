import PizzaList from "./PizzaList";
import { pizzaMock } from "../mock/pizzaMock";
function App() {
  return (
    <div>
      {pizzaMock.map((item) => (
        <PizzaList pizza={item} />
      ))}
    </div>
  );
}

export default App;
