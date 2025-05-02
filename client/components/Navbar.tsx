import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg fixed top-0 z-50 flex justify-between items-center text-white shadow-md border-b border-white/10">
      <h1 className="text-2xl font-semibold tracking-wide">HeartPredict</h1>
      <div className="space-x-6 text-sm font-medium hidden sm:flex">
        <Link href="/" className="hover:text-rose-400 transition">Home</Link>
        <Link href="/predict" className="hover:text-rose-400 transition">Predict</Link>
      </div>
    </nav>
  );
}
