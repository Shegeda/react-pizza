import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  //Налаштував тип для useState
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://6378ab2d7eb4705cf271ade4.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Помилка при запиті піци");
        navigate("/");
      }
    }
    fetchPizza();
  });

  if (!pizza) {
    //Щоб не було помилки, обернув рядок "Завантаження" у реакт компонент.
    return <>Завантаження...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="img" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₴</h4>
    </div>
  );
};

export default FullPizza;
