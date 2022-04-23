export const clearCurrentTab = () => {
  const content = document.querySelector("#content");
  content.replaceChildren();
};

export const Food = (name, photo, price, description) => {
  const _name = name;
  const _photo = photo;
  const _price = price;
  const _description = description;

  const getName = () => _name;
  const getPhoto = () => _photo;
  const getPrice = () => _price;
  const getDescription = () => _description;

  return { getName, getPhoto, getPrice, getDescription };
};
