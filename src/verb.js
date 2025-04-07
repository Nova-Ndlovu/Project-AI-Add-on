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
}

function inventMeal(prompt) {
  let apiKey = "2903bd515o84e51d2d0at09a3a53f67a";
  let context = `You are tasked with providing recipes for edible and nutritious foodstuffs. Please answer in the expertise of an experienced chef who is focused on coming up with easy to follow meals that home cooks can create in the comfort of their own homes, with average tools and intermediate experience in cooking. Please give descriptive step by step instructions on how to prepare the recipe and provide the tools required for creating the recipe. Take care to describe details such as the estimated cooktimes, temperatures, textures, colours and flavours for a clear understanding of the prepration of the recipe. Please begin each section of the recipe on a new line utalising <br />.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let displayLoading = document.querySelector("#note-section");
  displayLoading.classList.remove("hidden");

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

  let mealType = ["breakfast", "lunch", "dinner", "snack", "drink"];
  let mainOption;

  let userChoice = mealType;

  for (let i = 0; i < mealType.length; i++) {
    if (i === userChoice) {
      mainOption = options[i];
    }
  }

  console.log(`The main option is: ${mainOption}`);

  inventMeal(prompt.value);
  inventMeal(regionPrompt.value);
  inventMeal(ingredientsPrompt.value);
  inventMeal(dietPrompt.value);
  inventMeal(allergiesPrompt.value);

  prompt = `Please create a ${mealType} recipe based on ${regionPrompt} cuisine, that includes ${ingredientsPrompt} as main ingredients, has ${dietPrompt} requirements, and expressly excludes ${allergiesPrompt}.
  Save the complete list of ingredients for the recipe you have provided and display the list in italics.
  Save and display the name of the recipe you have provided as the <h1> heading.
  Save and display the simplistic instructions on how to prepare the meal recipe.`;

  alert("Image input clicked!");
}

let breakfast = document.getElementById("#breakfast");
let lunch = document.getElementById("#lunch");
let dinner = document.getElementById("#dinner");
let snack = document.getElementById("#snack");
let drink = document.getElementById("#drink");

let regionForm = document.querySelector("#submit-all");
let ingredientsForm = document.querySelector("#submit-all");
let dietForm = document.querySelector("#submit-all");
let allergiesForm = document.querySelector("#submit-all");

breakfast.addEventListener("click", handleParameterSubmit);
lunch.addEventListener("click", handleParameterSubmit);
dinner.addEventListener("click", handleParameterSubmit);
snack.addEventListener("click", handleParameterSubmit);
drink.addEventListener("click", handleParameterSubmit);

regionForm.addEventListener("click", handleParameterSubmit);
ingredientsForm.addEventListener("click", handleParameterSubmit);
dietForm.addEventListener("click", handleParameterSubmit);
allergiesForm.addEventListener("click", handleParameterSubmit);
