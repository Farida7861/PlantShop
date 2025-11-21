export default function PlantCard({ image = "", name = "Fiddle Leaf Fig", price = "₹999" }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
      <div className="w-full h-48 bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-green-600 font-bold mt-2">{price}</p>
        <div className="mt-4">
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}