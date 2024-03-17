import { useState } from "react";

export const CategoryPanel = ({ changeCategory }) => {
  const [categoryBtn, setCategoryBtn] = useState([
    { name: "Все", isActive: true },
    { name: "Мясные", isActive: false },
    { name: "Вегетарианская", isActive: false },
    { name: "Гриль", isActive: false },
    { name: "Закрытые", isActive: false },
  ]);

  const handleClick = (name) => {
    const result = categoryBtn.map((elem) =>
      elem.name === name
        ? { ...elem, isActive: true }
        : { ...elem, isActive: false }
    );
    setCategoryBtn(result);
    changeCategory(name);
  };

  return (
    <>
      <div className="type_btns">
        {categoryBtn.map((element) => (
          <button
            key={element.name}
            className={`btn ${element.isActive ? "btn_active" : ""}`}
            onClick={() => handleClick(element.name)}
          >
            {element.name}
          </button>
        ))}
      </div>

      <div className="pizza-sort">
        <p>Сортировка по:</p>
        <select className="select_pizza">
          <option hidden>-выбор-</option>
          <option value="price">цене</option>
          <option value="name">алфавиту</option>
        </select>
      </div>
    </>
  );
};
