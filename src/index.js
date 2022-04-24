console.log("hello world!");

import "./style.css";
import { homePage } from "./page-load";
import { menuPage } from "./menu-page";
import { loadHeader } from "./header-load";
import { clearCurrentTab } from "./functions";

loadHeader();
pageLoad();

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
