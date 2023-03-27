import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = useState();
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
    return "Завантаження...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="asd" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₴</h4>
    </div>
  );
};

export default FullPizza;
