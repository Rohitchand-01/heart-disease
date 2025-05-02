import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="h-[calc(100vh-64px)] flex items-center justify-center text-center px-6 pt-20">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">Predict Heart Disease Risk</h1>
        <p className="mb-8 text-lg text-slate-300 max-w-xl mx-auto">
          A powerful tool backed by machine learning to assess your heart's health.
        </p>
        <Link href="/predict">
          <button className="px-6 py-3 bg-rose-600 hover:bg-rose-700 transition rounded-xl text-white text-lg font-medium shadow-lg">
            Try Predictor
          </button>
        </Link>
      </div>
    </section>
  );
}
