export default function TestimonialCard({ name = "Customer", rating = 4, content = "" }) {
  const stars = Array.from({ length: 5 }).map((_, i) => i < rating);
return (
    <article className="bg-white rounded-lg p-5 shadow-sm hover:shadow-lg transition flex flex-col h-full">
      <div className="flex items-center gap-3">
        <div>
          <h4 className="font-semibold text-sm">{name}</h4>
          <div className="flex items-center text-sm text-yellow-500 mt-1" aria-label={`Rating: ${rating} out of 5`}>
            {stars.map((filled, idx) => (
              <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" className="mr-0.5" aria-hidden>
                <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.6L19.335 24 12 19.9 4.665 24l1.585-8.65L.5 9.75l7.832-1.732L12 .587z" />
              </svg>     ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 mt-4 text-sm flex-grow">{content}</p>
      <div className="mt-4">
        <a href="#" className="text-sm text-green-600 hover:underline">Read more </a>
      </div>
    </article>
  );
}