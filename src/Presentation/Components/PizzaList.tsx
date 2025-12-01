import React from 'react';
import type { Pizza } from '../../Domain/entities/Pizza';
interface PizzaListProps {
  pizza: Pizza;
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