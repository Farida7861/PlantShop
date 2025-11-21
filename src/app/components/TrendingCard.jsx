export default function TrendingCard({ image, name, price }) {
  return (
    <div className="min-w-[240px] bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="w-full h-40 bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-green-600 font-bold mt-1">{price}</p>
      </div>
    </div>
  );
}