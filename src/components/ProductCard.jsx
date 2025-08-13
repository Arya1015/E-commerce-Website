export default function ProductCard({ item, add }) {
  return (
    <div className="card">
      <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-xl" />
      <h3 className="mt-3 font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-500">⭐ {item.rating}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-lg font-bold">₹{item.price}</span>
        <button onClick={() => add(item)} className="btn bg-black text-white">Add to Cart</button>
      </div>
    </div>
  );
}
