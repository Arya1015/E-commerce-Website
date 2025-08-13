export default function Cart({ items, remove, clear }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <aside className="card sticky top-20">
      <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
      <div className="space-y-2 max-h-72 overflow-auto pr-1">
        {items.length === 0 && <p className="text-sm text-gray-500">No items yet.</p>}
        {items.map(i => (
          <div key={i.id} className="flex items-center justify-between">
            <div className="mr-2">
              <p className="font-medium text-sm">{i.title}</p>
              <p className="text-xs text-gray-500">Qty: {i.qty}</p>
            </div>
            <div className="text-right">
              <p className="text-sm">₹{i.price * i.qty}</p>
              <button onClick={() => remove(i.id)} className="text-xs text-red-600 hover:underline">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 border-t pt-3 flex items-center justify-between">
        <span className="font-semibold">Total:</span>
        <span className="font-bold">₹{total}</span>
      </div>
      <button disabled={!items.length} className="btn w-full mt-3 bg-emerald-600 text-white disabled:opacity-50" onClick={() => alert('Checkout stub')}>
        Checkout
      </button>
      <button disabled={!items.length} className="btn w-full mt-2 bg-gray-200" onClick={clear}>
        Clear Cart
      </button>
    </aside>
  );
}
