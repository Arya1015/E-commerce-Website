import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { products } from "./data";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const add = (item) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const remove = (id) => setCart(prev => prev.filter(p => p.id !== id));
  const clear = () => setCart([]);

  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p.id} item={p} add={add} />)}
        </section>
        <Cart items={cart} remove={remove} clear={clear} />
      </main>
      <footer className="text-center text-xs text-gray-500 py-6">© {new Date().getFullYear()} ShopMate</footer>
    </>
  );
}
