import React from "react";
import "./Recipes.scss";
import meal1 from "../assets/images/meal1.jpg";
import meal2 from "../assets/images/meal2.jpg";
import meal3 from "../assets/images/meal3.jpg";
import meal4 from "../assets/images/meal4.jpg";
import Button from "../components/Button";
import Category from "../components/CategoryComponent";

const categories = [
  {
    image: meal1,
    name: "Meat & Veggies",
    description: "Our most popular plan",
    descriptionColor: "yellow",
  },
  {
    image: meal2,
    name: "Veggie",
    description: "Plant-based recipes",
    descriptionColor: "green",
  },
  {
    image: meal3,
    name: "Family Friendly",
    description: "Kid-tested recipes",
    descriptionColor: "cyan",
  },
  {
    image: meal4,
    name: "Fit & Wholesome",
    description: "For a balanced lifestyle",
    descriptionColor: "yellow",
  },
];

const Recipes = () => (
  <section className="recipes">
    <h2>Over 30+ fresh recipes every week</h2>
    <p>Easy meals designed by professional chefs and nutritionists</p>
    <div className="recipe-categories">
      {categories.map((category) => (
        <Category
          key={category.name}
          icon={category.image}
          title={category.name}
          description={category.description}
          descriptionColor={category.descriptionColor}
        />
      ))}
    </div>
    <Button variant="outline">View our menus</Button>
  </section>
);

export default Recipes;
