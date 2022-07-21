const rootElement = document.querySelector(".foods");

const foodData = [
  {
    id: 1,
    image: "🌮",
    name: "taco",
  },
  {
    id: 2,
    image: "🍔",
    name: "burger",
  },
  {
    id: 3,
    image: "🍆",
    name: "eggplant",
  },
  {
    id: 4,
    image: "🍎",
    name: "apple",
  },
  {
    id: 5,
    image: "🥞",
    name: "pancakes",
  },
];
/* DO NOT MODIFY */

/** YOUR CODE BELOW **/

// create a class and pass in two args
class Foods {
  constructor(rootElement, foodData) {
    this.root = rootElement;
    this.data = foodData;
  }

  // create function renderList
  renderList() {
    this.root.addEventListener("click", (event) => {
      const { target } = event;
      target.remove();
    });

    // this is just for creating a copy of an element and can insert items into document
    // this allows for just one append to the dom and avoids constant rerenders
    const fragment = document.createDocumentFragment();

    this.data.forEach((e) => {
      fragment.appendChild(this.createFoodItem(e));
    });

    this.root.appendChild(fragment);
  }

  //create a list of items
  createFoodItem(item) {
    const itemEl = document.createElement("div");
    itemEl.innerText = item.image;
    // not in use
    itemEl.classList.add(item.name);

    return itemEl;
  }
}
