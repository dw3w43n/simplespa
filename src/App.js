import React, { useState } from "react";
import "./App.css";
import UsersSmall from "./UsersSmall";
import UsersBig from "./UserBig";
import state, { changeViewInLocalStorage } from "./state";
// import Header from "./Header";

function App() {
  let [currentView, setView] = useState(localStorage.getItem("contentView"));
  let [selectValue, setSelectValue] = useState(state.sortBy);
  let [searchInputValue, setSearchInputValue] = React.useState(
    state.searchInputValue
  );

  function onSearchInputChange(event) {
    setSearchInputValue((prev) => (prev = event.target.value));
  }
  state.searchInputValue = searchInputValue;

  function toNullifySearchInputValue() {
    setSearchInputValue("");
  }

  ////////////////////////////////////
  let [usersArray, setUsersArray] = useState();
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsersArray(users));
  }, []);
  console.table(usersArray);
  state.users = usersArray ?? state.users;
  /////////////////////////////////

  function changeView() {
    if (state.view === "small") setView("big");
    else setView("small");
    changeViewInLocalStorage();
  }
  state.view = currentView;

  function usersArraySort(value) {
    state.users.sort((a, b) => (a[value] < b[value] ? -1 : 1));
    state.sortBy = value;
  }
  function selectChange(event) {
    state.sortBy = event.target.value;
    switch (event.target.value) {
      case "name":
        setSelectValue("name");
        return usersArraySort("name");
      case "username":
        setSelectValue("username");
        return usersArraySort("username");
      case "id":
        setSelectValue("id");
        return usersArraySort("id");
      default:
        setSelectValue("name");
    }
  }
  state.sortBy = selectValue;

  let usersSmallContent = state.users.map((user) => {
    if (JSON.stringify(user).includes(state.searchInputValue))
      return <UsersSmall user={user} />;
    // return <h1>Do not include {searchInputValue}</h1>;
  });
  let usersBigContent = state.users.map((user) => {
    if (JSON.stringify(user).includes(state.searchInputValue))
      return <UsersBig user={user} />;
  });

  return (
    <div className="App">
      <div>
        <div className="searchArea">
          <input
            value={searchInputValue}
            onChange={onSearchInputChange}
            placeholder="search"
          />
          <button onClick={toNullifySearchInputValue}>&times;</button>
        </div>
        <button onClick={changeView} className="viewChangeButton">
          Change View
        </button>
        <select onChange={selectChange} className="select">
          <option>name</option>
          <option>username</option>
          <option>id</option>
        </select>
      </div>
      <div className="contentBody">
        {state.view === "small" ? usersSmallContent : usersBigContent}
      </div>
    </div>
  );
}

export default App;
