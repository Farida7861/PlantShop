export default function HeroBanner({
  image = "/images/Hero plant.jpeg",
  title = "Bring life to your home",
  subtitle = "Find healthy, beautiful plants for every corner of your house.",
  ctaPrimary = { label: "Shop Plants", href: "#" },
  ctaSecondary = { label: "Learn More", href: "#" },}) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
          <div className="flex gap-4">
            <a
              href={ctaPrimary.href}
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
            >
              {ctaPrimary.label}
            </a>
            <a
              href={ctaSecondary.href}
              className="inline-block px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              {ctaSecondary.label}
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={image}
            alt="Hero plant"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}