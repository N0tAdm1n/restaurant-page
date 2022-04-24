console.log("hello world!");

import "./style.css";
import { homePage } from "./home-page";
import { menuPage } from "./menu-page";
import { loadHeader } from "./header-load";
import { clearCurrentTab } from "./functions";

loadHeader();
homePage();

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
  clearCurrentTab();
  homePage();
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  clearCurrentTab();
  menuPage();
});

const aboutUsButton = document.querySelector("#about us");
