import { Helper } from "../../Core/utils/helper";
import usePizzaOfTheDay from "../hooks/usePizzaOfTheDay";

const PizzaOfTheDay = () => {
  const todayPizza = usePizzaOfTheDay();

  if (!todayPizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{todayPizza.name}</h3>
          <p>{todayPizza.description}</p>
          <p className="pizza-of-the-day-price">
            From : <span>{Helper.intl().format(todayPizza.sizes?.S ?? 0)}</span>
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={`${Helper.CleanImageUrl(todayPizza.image)}`}
          alt={todayPizza.name}
        />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
