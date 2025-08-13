export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a className="text-xl font-bold">ShopMate</a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Contact</a>
          <span className="relative inline-flex items-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6h15l-1.5 9h-12z" stroke="currentColor" /><circle cx="9" cy="20" r="1.5" fill="currentColor"/><circle cx="18" cy="20" r="1.5" fill="currentColor"/></svg>
            <span className="ml-1 text-sm font-semibold">{cartCount}</span>
          </span>
        </nav>
      </div>
    </header>
  );
}
