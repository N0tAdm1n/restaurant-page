import Photo from "./images/victoria-shes-UC0HZdUitWY-unsplash.jpg";

export const pageLoad = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.textContent = "My Restaurant";
  content.appendChild(header);

  const navBar = document.createElement("ul");

  const navBarLink = ["home", "menu", "about us"];
  for (let i = 0; i < navBarLink.length; i++) {
    const element = document.createElement("li");
    element.textContent = navBarLink[i];
    navBar.appendChild(element);
  }

  content.appendChild(navBar);

  const restaurantDetail = document.createElement("div");
  restaurantDetail.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque ut at voluptates quaerat minima! Necessitatibus qui repudiandae, numquam ab nulla porro ullam esse, asperiores iusto quod cupiditate, iure quia.";
  content.appendChild(restaurantDetail);

  const myImage = document.createElement("img");
  myImage.src = Photo;
  myImage.classList.add("photo");
  content.appendChild(myImage);
};
