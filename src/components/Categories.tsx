import React from "react";

//Створюємо свій тип для Categories
type CategoriesProps = {
  value: number;
  //передаємо void коли знаємо що ф-ція нічого не повертає
  //також передаємо параметр напр: і та присвоюємо тип "number"
  onChangeCategory: (i: number) => void;
};

const categories = [
  "Всі",
  "М'ясні",
  "Вегетаріанські",
  "Гриль",
  "Гострі",
  "Закриті",
];

const Categories: React.FC<CategoriesProps> = ({
  value,
  onChangeCategory,
}) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
