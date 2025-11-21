export default function OxygenPlant({
  image = "/images/oxygenplant.jpeg",
  title = "O₂ Producing Plants",
  description = "Purify your air naturally with our top-rated oxygen-producing indoor plants. Healthy, fresh and perfect for your home.",
  buttonLabel = "Shop Now",
  buttonLink = "#",}) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-green-50 rounded-2xl mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
          <a
            href={buttonLink}
            className="inline-block px-8 py-3 bg-green-600 text-white text-lg rounded-lg shadow hover:bg-green-700 transition"
          >
            {buttonLabel}
          </a>
        </div>
        <div className="w-full">
          <img
            src={"/images/oxygenplant.jpeg"}
            alt="Oxygen Plant"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}