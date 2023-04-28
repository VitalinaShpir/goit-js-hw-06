const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");

const listItemEL = ingredients.map(element => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = element;
  return listItem;
});
list.append(...listItemEL);
