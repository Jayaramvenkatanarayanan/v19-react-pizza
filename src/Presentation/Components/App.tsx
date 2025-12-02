import CartProvider from "../providers/cartProvider";
import Header from "./Header";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Order />
        <PizzaOfTheDay />
      </CartProvider>
    </div>
  );
}

export default App;
