export function calculateBMI(weightKg, heightCm) {
  if (!weightKg || !heightCm) {
    return 0
  }

  return Number((weightKg / ((heightCm / 100) ** 2)).toFixed(1))
}
