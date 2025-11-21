export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <button className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-700">PLANT SHOP</button>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">Trending</a></li>
            <li><a href="#" className="hover:text-green-400">Top Selling</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <form className="flex">
            <button className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-700">PLANT SHOP
            </button>
          </form>
        </div>
        <div>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-green-400 text-xl">🌿</a>
            <a href="#" className="hover:text-green-400 text-xl">📸</a>
          </div>
        </div>
      </div>
    </footer>
  );
}