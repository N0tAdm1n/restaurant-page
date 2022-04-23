import { Food } from "./functions";

export const menuPage = () => {
  const recipes = [
    Food(
      "Rainbow Aster",
      "",
      "$5",
      "A unique drink. Having featured in the famous light novel 'Pretty Please, Kitsune Guuji?', it has since been brought to life by Sailing Breeze in collaboration with Yae Publishing House, along with its fascinating flavour. As this version does not contain any bean products, it is slightly different from the special limited edition that was available during the Irodori Festival, but this also means that there is no risk of triggering any bean allergies."
    ),
    Food(
      "Tricolor Dango",
      "",
      "$2",
      "A soft, glutinous snack. Glutinous rice has been grown into powder and rolled into a ball before being steamed. The Sakura Bloom and Snapdragon colors lend an extra liveliness to these dango."
    ),
    Food(
      "Invigorating Pizza",
      "",
      "$10",
      "This pizza almost seems more art than food. Just one slice is enough to have you raring to go. Is this what keeps Jean working so hard?"
    ),
  ];

  const content = document.querySelector("#content");

  for (let i = 0; i < recipes.length; i++) {
    const recipeContainer = document.createElement("div");

    const name = document.createElement("div");
    name.textContent = recipes[i].getName();
    recipeContainer.appendChild(name);

    const price = document.createElement("div");
    price.textContent = recipes[i].getPrice();
    recipeContainer.appendChild(price);

    // const photo = document.createElement()

    content.appendChild(recipeContainer);
  }
};
