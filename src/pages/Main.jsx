import { Logo } from "../components/Logo";
import { PizzaMainCard } from "../components/PizzaMainCard";
import { CategoryPanel } from "../components/CategoryPanel";
import { CartBtn } from "../components/CartBtn";

import "./styles/Main.css";

const MainPage = ({
  pizzas,
  infoBasket,
  changeCategoryApp,
  selectTypePizzaApp,
  buyPizzaApp,
}) => {
  const changeCategory = (name) => {
    changeCategoryApp(name);
  };

  const selectTypePizzaMain = (id) => {
    selectTypePizzaApp(id);
  };

  const buyPizzaMain = (pizza) => {
    buyPizzaApp(pizza);
  };

  return (
    <div className="wrapper mainPage">
      <div className="header">
        <Logo />
        <CartBtn infoBasket={infoBasket} />
      </div>

      <div className="pizza_type">
        <CategoryPanel changeCategory={changeCategory} />
      </div>

      <div className="pizzas">
        <h1 className="pizza_items_title">Все пиццы</h1>

        <div className="pizza-items">
          {pizzas.map((elem) => (
            <PizzaMainCard
              key={elem.id}
              props={elem}
              selectTypePizzaMain={selectTypePizzaMain}
              buyPizzaMain={buyPizzaMain}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
