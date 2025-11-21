import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import SectionTitle from "./components/SectionTitle";
import PlantCard from "./components/PlantCard";
import TrendingCard from "./components/TrendingCard";
import TestimonialCard from "./components/TestimonialCard";
import OxygenPlant from "./components/OxygenPlant";
import Footer from "./components/Footer";
export default function Home() {
  const products = [
    {
      id: 1,
      name: "Fiddle Leaf Fig",
      price: "₹1,999",
      image: "/images/fiddle_leaf_fig.jpg",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: "₹499",
      image: "/images/snake plant.jpeg",
    },
    {
      id: 3,
      name: "Monstera",
      price: "₹1,299",
      image: "/images/Monstera plant.jpeg",
    },
    {
      id: 4,
      name: "ZZ Plant",
      price: "₹799",
      image: "/images/Z Z.jpeg",
    },
  ];
  return (
    <>
      <Navbar />
      <HeroBanner />
      <section className="max-w-6xl mx-auto px-6 my-12">
        <h2 className="text-2xl font-bold mb-2">Trending Plants</h2>
        <p className="text-gray-600 mb-4">Most loved by our customers</p>
        <div className="flex gap-6 overflow-x-auto pb-4">
          <TrendingCard
            name="Aloe Vera"
            price="₹399"
            image="/images/fiddle_leaf_fig.jpg"
          />
          <TrendingCard
            name="Areca Palm"
            price="₹1,299"
            image="/images/Areca palm.jpg"
          />
          <TrendingCard
            name="Peace Lily"
            price="₹699"
            image="/images/peace lily.jpg"
          />
          <TrendingCard
            name="Rose mary"
            price="₹199"
            image="/images/Rose marry.jpg"
          />
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <SectionTitle
          title="Top Selling Plants"
          subtitle="Our most loved plants this month"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <PlantCard key={p.id} {...p} />
          ))}
        </div>
      </main>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
        <p className="text-gray-600 mb-6">
          What our happy customers are saying
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            avatar="/images/avatar1.jpg"
            rating={5}
            content="Beautiful and healthy plant — arrived packed well and the leaf quality is amazing."
          />
          <TestimonialCard
            avatar="/images/avatar2.jpg"
            rating={4}
            content="Amazing Good"
          />
          <TestimonialCard
            avatar="/images/avatar3.jpg"
            rating={5}
            content="Very satisfied"
          />
        </div>
      </section>
      <OxygenPlant
        image="/images/monstera.jpg"
        title="O₂ Producing Plants"
        description="Improve air quality naturally with our premium selection of indoor oxygen-producing plants. Perfect for bedrooms, offices, and living spaces."
        buttonLabel="Shop O₂ Plants"
        buttonLink="#"
      />
      <Footer />
    </>
  );
}