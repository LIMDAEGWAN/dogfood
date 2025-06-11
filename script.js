function calculateFeed() {
  const weight = parseFloat(document.getElementById("weight").value);
  const mealCalPerPack = parseFloat(document.getElementById("meal").value);
  const mealCount = parseInt(document.getElementById("mealCount").value || "0");
  const ageGroup = document.getElementById("ageGroup").value;

  if (isNaN(weight) || weight <= 0) {
    alert("몸무게를 올바르게 입력해주세요.");
    return;
  }

  const totalMealCalories = mealCount * mealCalPerPack;

  let factor = 1.4; // 기본 성견
  if (ageGroup === "senior") factor = 1.2;
  else if (ageGroup === "inactive") factor = 1.0;
  else if (ageGroup === "puppy") factor = 2.0;

  const RER = 70 * Math.pow(weight, 0.75);
  const dailyCalories = RER * factor;

  const remainingCalories = dailyCalories - totalMealCalories;

  const result = `
    ✅ 총 필요 열량: <b>${dailyCalories.toFixed(1)} kcal</b><br>
    ✅ 오늘화식 제공: <b>${totalMealCalories.toFixed(1)} kcal</b><br>
    ✅ 사료 필요 열량: <b>${remainingCalories > 0 ? remainingCalories.toFixed(1) : 0} kcal</b>
  `;

  document.getElementById("calorieResult").innerHTML = result;
}
