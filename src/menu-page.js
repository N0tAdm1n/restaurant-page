export const menuPage = () => {
  const recipe = ["food", "chowmein", "burger", "pizza", "samosa"];

  const content = document.querySelector("#content");

  const recipeContainer = document.createElement("div");
  for (let i = 0; i < recipe.length; i++) {
    const element = document.createElement("div");
    element.textContent = recipe[i];
    recipeContainer.appendChild(element);
  }

  content.appendChild(recipeContainer);
};
