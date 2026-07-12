export function calculateCalories(baseCalories, activityMultiplier = 1) {
  return Math.round(baseCalories * activityMultiplier)
}
