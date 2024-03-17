import { useState } from "react";
import { data } from "./DB";

import MainPage from "./pages/Main";

const App = () => {
  const [pizzas, setPizzas] = useState(data);
  const [basket, setBasket] = useState([]);
  const [infoBasket, setInfoBasket] = useState({
    total_sum: 0,
    total_amount: 0,
  });

  const changeCategoryApp = (name) => {
    if (name === "Все") {
      setPizzas(data);
    } else {
      const result = data.filter((elem) => elem.category === name);
      setPizzas(result);
    }
  };

  const selectTypePizzaApp = (id) => {
    const newPizzas = pizzas.map((elem) => {
      const [pizzaId, _] = id.split("_");

      if (pizzaId === elem.id) {
        const newType = elem.type.map((item) =>
          item.id === id
            ? { ...item, isSelect: true }
            : { ...item, isSelect: false }
        );
        return { ...elem, type: newType };
      } else {
        return elem;
      }
    });

    setPizzas(newPizzas);
  };

  const buyPizzaApp = (pizza) => {
    if (basket.length) {
      const isBasket = basket.some((elem) => elem.id === pizza.id);
      if (isBasket) {
        const validPizza = basket.map((elem) =>
          elem.id === pizza.id ? { ...elem, count: elem.count + 1 } : elem
        );
        setBasket(validPizza);
      } else {
        setBasket([...basket, pizza]);
      }
    } else {
      setBasket([...basket, pizza]);
    }

    setInfoBasket({
      total_amount: infoBasket.total_amount + 1,
    });
  };

  return (
    <MainPage
      pizzas={pizzas}
      infoBasket={infoBasket}
      changeCategoryApp={changeCategoryApp}
      selectTypePizzaApp={selectTypePizzaApp}
      buyPizzaApp={buyPizzaApp}
    />
  );
};

export default App;
