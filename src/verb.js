function displayMeal(response) {
  let ingredientList = document.querySelector("#ingredient-list");
  let recipe = document.querySelector("#recipe");

  ingredientList.innerHTML = response.data.answer;
  recipe.innerHTML = response.data.answer;
}

function inventMeal(prompt) {
  let apiKey = "2903bd515o84e51d2d0at09a3a53f67a";
  let context = ``;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let revealLoadscreen = document.querySelector("#recipe");
  revealLoadscreen.classList.remove("hidden");

  axios.get(apiUrl).then(displayMeal);
}

function handleParameterSubmit(event) {
  event.preventDefault();
  let prompt = document.querySelector(".meal-parameters");
  let mealType = document.querySelector(".meal-type");
  let regionPrompt = document.querySelector("#region-text");
  let ingredientsPrompt = document.querySelector("#ingredients-text");
  let dietPrompt = document.querySelector("#diet-text");
  let allergiesPrompt = document.querySelector("#allergies-text");

  inventMeal(regionPrompt.value);
  inventMeal(ingredientsPrompt.value);
  inventMeal(dietPrompt.value);
  inventMeal(allergiesPrompt.value);

  prompt = `Please create a ${mealType} recipe based on ${regionPrompt} cuisine, includes ${ingredientsPrompt} as main ingredients, has ${dietPrompt} reqirenments and restrictions, and expressly excludes ${allergiesPrompt}.`;
}

let breakfast = document.querySelector("#breakfast");
let lunch = document.querySelector("#lunch");
let dinner = document.querySelector("#dinner");
let snack = document.querySelector("#snack");
let drink = document.querySelector("#drink");

breakfast.addEventListener("click", handleParameterSubmit);
lunch.addEventListener("click", handleParameterSubmit);
dinner.addEventListener("click", handleParameterSubmit);
snack.addEventListener("click", handleParameterSubmit);
drink.addEventListener("click", handleParameterSubmit);

let regionForm = document.querySelector("#region");
regionForm.addEventListener("submit", handleParameterSubmit);

let ingredientsForm = document.querySelector("#ingredients");
ingredientsForm.addEventListener("submit", handleParameterSubmit);

let dietForm = document.querySelector("#diet");
dietForm.addEventListener("submit", handleParameterSubmit);

let allergiesForm = document.querySelector("#allergies");
allergiesForm.addEventListener("submit", handleParameterSubmit);

let mealSuggestion = document.querySelector("#submit-all");
mealSuggestion.addEventListener("click", handleParameterSubmit);
