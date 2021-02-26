let state = {
  users: [
    { id: 1, name: "Chanel", username: "Casper" },
    { id: 2, name: "Marcelo", username: "Skiles" },
    { id: 3, name: "Ethel", username: "Zieme" },
    { id: 4, name: "Willy", username: "Medhurst" },
    { id: 5, name: "Ludie", username: "Monahan" },
    { id: 6, name: "Israel", username: "Cummings" },
    { id: 7, name: "Geral", username: "Mann" },
    { id: 8, name: "Petra", username: "Schaefer" },
    { id: 9, name: "Pascale", username: "Schaden" },
    { id: 10, name: "Florence", username: "Batz" },
    { id: 11, name: "Marques", username: "Hayes" },
    { id: 12, name: "Sabrina", username: "Kuhlman" },
  ],

  _view: "small",
  get view() {
    return this._view;
  },
  set view(value) {
    if (value === "small" || value === "big") this._view = value;
  },

  sortBy: "name",

  searchInputValue: "",

  lastVisit: "many years ago",
};

export function changeViewInLocalStorage() {
  let contentView = localStorage.getItem("contentView") ?? "small";
  contentView = contentView === "small" ? "big" : "small";
  localStorage.setItem("contentView", contentView);
}

export default state;
