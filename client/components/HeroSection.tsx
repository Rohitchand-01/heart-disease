import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="h-[calc(100vh-64px)] flex flex-col items-center justify-start text-center px-6 pt-8">
      {/* Top Ad / Banner */}
      <div className="w-full max-w-4xl bg-rose-100 text-rose-800 font-semibold py-2 px-4 rounded-xl shadow mb-6 text-sm text-center">
        Check your heart risk today — it's quick and easy!
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 max-w-3xl w-full">
        <div className="w-full relative aspect-[16/9] md:aspect-[3/1] lg:aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl mb-6">
          <Image
            src="/heart.jpg"
            alt="Heart Health"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
          Predict Heart Disease Risk
        </h1>
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
