console.log("hello world!");

import "./style.css";
import { pageLoad } from "./page-load";
import { menuPage } from "./menu-page";
import { loadHeader } from "./header-load";

loadHeader();

const homeButton = document.querySelector("#home");

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", menuPage);

const aboutUsButton = document.querySelector("#about us");
