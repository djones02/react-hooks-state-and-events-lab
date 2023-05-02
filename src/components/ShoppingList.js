import React from "react";
import Item from "./Item";
import {useState} from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCategories = items.filter(item =>
    selectedCategory === "All" || item.category === selectedCategory
  )

  function updateCategory(categoryNumber) {
    setSelectedCategory(categoryNumber)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => updateCategory(e.target.value)} name="filter">
          {/**********************option can not use event***********************/}
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategories.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
