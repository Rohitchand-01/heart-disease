import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    age, sex, cp, trestbps, chol,
    fbs, restecg, thalach, exang,
    oldpeak, slope, ca, thal,
  } = req.body;

  // Basic validation
  if (
    age == null || sex == null || cp == null || trestbps == null || chol == null ||
    fbs == null || restecg == null || thalach == null || exang == null ||
    oldpeak == null || slope == null || ca == null || thal == null
  ) {
    return res.status(400).json({ error: "Missing input data" });
  }

  // Mock logic for prediction (replace with real ML inference call later)
  const riskScore = parseFloat(age) + parseFloat(chol) / 100 + parseFloat(oldpeak);
  const prediction = riskScore > 200 ? "High Risk of Heart Disease" : "Low Risk of Heart Disease";

  return res.status(200).json({ prediction });
}
