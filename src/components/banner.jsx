export default function Banner() {
  return (
    <section className="relative bg-brand-purple text-white rounded-b-3xl py-10 sm:pb-[8rem] lg:pb-[16rem] text-center container mx-auto px-2 grid justify-items-center">
      <h1 className="lg:text-5xl text-3xl font-bold tracking-tight text-balance leading-[1.25] pb-6">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="text-pretty max-w-[65ch] leading-relaxed pb-8">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="bg-white text-brand-purple font-bold text-xl rounded-full px-6 py-2">
        Shop Now
      </button>
      <div className="sm:absolute mt-12 bg-white/25 p-2 border border-white rounded-2xl -bottom-[30%] left-1/2 sm:-translate-x-1/2">
        <img
          className="rounded-2xl"
          src="/banner-img.webp"
          alt="Gadget picture"
        />
      </div>
    </section>
  );
}
