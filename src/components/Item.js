import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
  };

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="in-cart" onClick={handleAddToCart}>
        {isInCart ? "In Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
