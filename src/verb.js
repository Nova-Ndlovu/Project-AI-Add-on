function displayMeal(response) {
  let recipe = document.querySelector("#recipe");
  recipe.innerHTML = `${response.data.answer}`;

  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2,
    },
  });
  console.log(response.data.answer);
}

function inventMeal(prompt) {
  let apiKey = "2903bd515o84e51d2d0at09a3a53f67a";
  let context = `You are tasked with providing recipes for edible and nutritious foodstuffs. Please answer in the expertise of an experienced chef who is focused on coming up with easy to follow meals that home cooks can create in the comfort of their own homes, with average tools and intermediate experience in cooking. Please give descriptive step by step instructions on how to prepare the recipe and provide the tools required for creating the recipe. Take care to describe details such as the estimated cooktimes, temperatures, textures, colours and flavours for a clear understanding of the prepration of the recipe. Please begin each section of the recipe on a new line utalising <br />.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayMeal);
}

function handleParameterSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
  let prompt = document.querySelector(".meal-parameters");
  let regionPrompt = document.querySelector("#region-text");
  let ingredientsPrompt = document.querySelector("#ingredients-text");
  let dietPrompt = document.querySelector("#diet-text");
  let allergiesPrompt = document.querySelector("#allergies-text");

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

  let mealTypes = ["breakfast", "lunch", "dinner", "snack", "drink"];

  function ParameterSubmit(event) {
    event.stopPropagation();
    let selectedMeal = event.target.id;
    let mainOption;

    if (mealTypes.includes(selectedMeal)) {
      mainOption = selectedMeal;
      console.log("User selected meal type:", mainOption);
    } else {
      console.error("Invalid meal type selected");
    }

    let loadingRecipe = document.querySelector("#notes-section");
    loadingRecipe.classList.remove("hidden");
  }

  inventMeal(prompt.value);
  inventMeal(regionPrompt.value);
  inventMeal(ingredientsPrompt.value);
  inventMeal(dietPrompt.value);
  inventMeal(allergiesPrompt.value);

  prompt = `Please create a ${mealTypes} recipe based on ${regionPrompt} cuisine, that includes ${ingredientsPrompt} as main ingredients, has ${dietPrompt} requirements, and expressly excludes ${allergiesPrompt}.
  Save the complete list of ingredients for the recipe you have provided and display the list in italics.
  Save and display the name of the recipe you have provided as the <h1> heading.
  Save and display the simplistic instructions on how to prepare the meal recipe.`;
}

let breakfast = document.querySelector("#breakfast");
let lunch = document.querySelector("#lunch");
let dinner = document.querySelector("#dinner");
let snack = document.querySelector("#snack");
let drink = document.querySelector("#drink");

let regionForm = document.querySelector("#region");
let ingredientsForm = document.querySelector("#ingredients");
let dietForm = document.querySelector("#diet");
let allergiesForm = document.querySelector("#allergies");

breakfast.addEventListener("click", handleParameterSubmit);
lunch.addEventListener("click", handleParameterSubmit);
dinner.addEventListener("click", handleParameterSubmit);
snack.addEventListener("click", handleParameterSubmit);
drink.addEventListener("click", handleParameterSubmit);

regionForm.addEventListener("submit", handleParameterSubmit);
ingredientsForm.addEventListener("submit", handleParameterSubmit);
dietForm.addEventListener("submit", handleParameterSubmit);
allergiesForm.addEventListener("submit", handleParameterSubmit);
