export const clearCurrentTab = () => {
  const content = document.querySelector("#content");
  content.replaceChildren();
};
