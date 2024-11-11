import { useState, useEffect } from "react";

export default function Gadgets() {
  const [gadgets, setGadgets] = useState([]);

  async function fetchGadgets() {
    const response = await fetch("/gadgets-data.json");
    const data = await response.json();

    if (data) {
      setGadgets(data);
    }
  }

  useEffect(() => {
    fetchGadgets();
  }, []);

  return (
    <section className="pt-[14rem] container mx-auto px-2">
      <h2 className="md:text-4xl text-center font-bold tracking-tight text-balance text-3xl">
        Explore Cutting-Edge Gadgets
      </h2>
      <div>
        <div>CATEGORIES</div>
        <ul className="grid-cols-3 grid gap-5 max-w-4xl ms-auto">
          {gadgets.map((gadget) => {
            return (
              <li
                key={gadget.id}
                className="bg-white rounded-3xl px-5 py-4 grid gap-3 border shadow-sm"
              >
                <img
                  className="h-[8rem] w-full object-center object-contain rounded-3xl"
                  src={gadget.image}
                  alt={gadget.name}
                />
                <div className="space-y-3">
                  <h4 className="text-xl font-bold">{gadget.name}</h4>
                  <p className="text-lg text-brand-gray pb-4">
                    {gadget.price}$
                  </p>
                  <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full w-full">
                    <span className="bg-white block m-[1px] text-brand-purple rounded-full px-6 text-lg py-2">
                      View Details
                    </span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
