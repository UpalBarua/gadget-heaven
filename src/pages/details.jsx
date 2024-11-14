import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
  const params = useParams();

  const [gadgetDetails, setGadgetDetails] = useState({});

  async function fetchGadgetDetails() {
    const response = await fetch("/gadgets-data.json");
    const data = await response.json();

    const foundGadget = data.find((gadget) => gadget.id === Number(params.id));
    setGadgetDetails(foundGadget);
  }

  useEffect(() => {
    fetchGadgetDetails();
  }, []);

  return (
    <section className="">
      <div className="bg-brand-purple text-white text-center grid justify-center pt-10 pb-[14rem]">
        <h1 className="md:text-4xl text-3xl font-bold tracking-tight text-balance leading-[1.25] pb-6">
          Product Detials
        </h1>
        <p className="text-pretty max-w-[65ch] leading-relaxed pb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div>
        <img src={gadgetDetails?.image} alt="" />
        <h2>{gadgetDetails?.name}</h2>
        <span></span>
        <span></span>
        <p></p>
      </div>
    </section>
  );
}
