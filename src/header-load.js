export const loadHeader = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.id = "header";

  const logo = document.createElement("div");
  logo.id = "logo";
  logo.textContent = "Restaurant";
  header.appendChild(logo);

  const navBar = document.createElement("ul");
  navBar.id = "navbar";
  const navBarLink = ["home", "menu", "about us"];
  for (let i = 0; i < navBarLink.length; i++) {
    const element = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = navBarLink[i];
    button.id = navBarLink[i];
    element.appendChild(button);
    navBar.appendChild(element);
  }
  header.appendChild(navBar);

  content.before(header);
};
