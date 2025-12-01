import React from 'react';
import type { Pizzas } from '../../Domain/entities/Pizza';
interface PizzaListProps {
  pizza: Pizzas;
}

const PizzaList: React.FC<PizzaListProps> = ({pizza}) => {
  return (
    <>
    <div>
     <h1>{pizza.name}</h1>
     <p>{pizza.desc}</p>
    </div>
    </>
  );
};

export default PizzaList;