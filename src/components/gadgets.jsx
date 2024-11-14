import { useState, useEffect } from "react";
import GadgetCard from "./gadget-card";

export default function Gadgets() {
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  async function fetchGadgets() {
    const response = await fetch("/gadgets-data.json");
    const data = await response.json();

    const allCategories = data.map((item) => item.category);
    const allCategoriesSet = new Set(allCategories);
    const categoriesArray = ["All Products", ...allCategoriesSet];
    setCategories(categoriesArray);

    if (selectedCategory !== "All Products") {
      const categorizedGadgets = data.filter(
        (gadget) => gadget.category === selectedCategory
      );
      setGadgets(categorizedGadgets);
    } else {
      setGadgets(data);
    }
  }

  useEffect(() => {
    fetchGadgets();
  }, [selectedCategory]);

  return (
    <section className="py-[18rem] container mx-auto px-2">
      <h2 className="md:text-4xl pb-16 text-center font-bold tracking-tight text-balance text-3xl">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-4 items-start gap-5">
        <ul className="py-8 px-6 grid gap-4 bg-white rounded-3xl border shadow-sm">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`w-full text-start px-5 py-3 rounded-full font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-brand-purple text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <ul className="grid-cols-3 col-span-3 grid gap-5">
          {gadgets.map((gadget) => (
            <GadgetCard key={gadget.id} gadget={gadget} />
          ))}
        </ul>
      </div>
    </section>
  );
}
