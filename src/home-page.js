import Photo from "./images/victoria-shes-UC0HZdUitWY-unsplash.jpg";

export const homePage = () => {
  const content = document.querySelector("#content");

  const detailContainer = document.createElement("div");

  const restaurantDetailLeft = document.createElement("div");
  restaurantDetailLeft.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque ut at voluptates quaerat minima! Necessitatibus qui repudiandae, numquam ab nulla porro ullam esse, asperiores iusto quod cupiditate, iure quia.";
  detailContainer.appendChild(restaurantDetailLeft);

  const restaurantDetailRight = document.createElement("div");
  restaurantDetailRight.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque ut at voluptates quaerat minima! Necessitatibus qui repudiandae, numquam ab nulla porro ullam esse, asperiores iusto quod cupiditate, iure quia.";
  detailContainer.appendChild(restaurantDetailRight);

  content.appendChild(detailContainer);

  const myImage = document.createElement("img");
  myImage.src = Photo;
  myImage.classList.add("photo");
  content.appendChild(myImage);
};
