import PredictorForm from "@/components/PredictorForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Predict() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-white pt-24">
      <Navbar />
      <section className="px-4 py-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Heart Disease Predictor</h1>
        <PredictorForm />
      </section>
      <Footer />
    </main>
  );
}
