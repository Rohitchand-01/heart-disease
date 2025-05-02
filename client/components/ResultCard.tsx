export default function ResultCard({ prediction }: { prediction: string }) {
    const hasDisease = prediction === "1";
    return (
      <div className={`mt-6 p-6 rounded-lg ${hasDisease ? "bg-red-600" : "bg-green-600"} text-white text-center`}>
        {hasDisease ? "⚠️ High Risk of Heart Disease Detected" : "✅ Low Risk Detected"}
      </div>
    );
  }
  