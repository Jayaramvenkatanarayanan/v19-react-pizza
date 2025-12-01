import { Helper } from "../../Core/utils/helper";
import type { Pizza } from "../../Domain/entities/Pizza";
interface PizzaListProps {
  pizza: Pizza;
}

const PizzaList: React.FC<PizzaListProps> = ({ pizza }) => {
  return (
    <div className="pizza">
      <img src={`${Helper.CleanImageUrl(pizza.image)}`} alt={pizza.image} />
      <h1>{pizza.name}</h1>
      <p>{pizza.description}</p>
    </div>
  );
};

export default PizzaList;
