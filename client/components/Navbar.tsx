import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg fixed top-0 z-50 flex justify-between items-center text-white shadow-md border-b border-white/10">
      <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
        HeartPredict
      </h1>
      <div className="space-x-6 text-sm font-medium hidden sm:flex">
        <NavLink href="/" text="Home" />
        <NavLink href="/predict" text="Predict" />
      </div>
    </nav>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="relative group transition"
    >
      <span className="group-hover:text-rose-400 transition">{text}</span>
      <span className="absolute left-0 -bottom-0.5 w-0 group-hover:w-full h-0.5 bg-rose-400 transition-all duration-300"></span>
    </Link>
  );
}
