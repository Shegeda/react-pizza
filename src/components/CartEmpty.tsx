import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/empty-cart.png";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Кошик пустий <span>😕</span>
      </h2>
      <p>
        Наймовірніше, Ви не замовляли ще піцу.
        <br />
        Щоб замовити піцу, перейдіть на головну сторінку.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
