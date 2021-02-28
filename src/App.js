import React, { useState, useEffect } from "react";
import "./App.css";
import UsersSmall from "./UsersSmall";
import UsersBig from "./UserBig";
import state from "./state";
import { Context } from "./context";
// import Modal from "./modal";
// import Header from "./Header";

function App() {
  let [users, setUsers] = useState(state.users);
  let [currentView, setCurrentView] = useState(
    localStorage.getItem("contentView")
  );
  let [selectValue, setSelectValue] = useState("name");
  let [searchInputValue, setSearchInputValue] = useState("");

  try {
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setUsers(users));
    }, []);
  } catch (error) {
    setUsers(state.users);
    alert("Could not fetch users: " + error.message);
  }

  // useEffect(() => {
  //   users.forEach((user) => (user.isZoomed = false));
  // }, []);
  // console.log(users);

  // users.forEach((user) => (user.isZoomed = false));

  //////////// Search /////////////////////////////
  function onSearchInputChange(event) {
    setSearchInputValue(() => event.target.value);
  }

  function toNullifySearchInputValue() {
    setSearchInputValue("");
  }
  ///////////////////////////////////////////////////

  /////////////// View changing //////////////////
  function changeView() {
    if (currentView === "small") setCurrentView("big");
    else setCurrentView("small");
  }
  const locStr = (view) => {
    localStorage.setItem("contentView", view);
  };
  locStr(currentView);
  ////////////////////////////////////////////////

  /////////////////////////   Sorting  /////////
  function usersArraySort(value) {
    users.sort((a, b) => (a[value] < b[value] ? -1 : 1));
  }
  usersArraySort(selectValue);
  // function selectChange(event) {
  //   setSelectValue(event.target.value);
  //   usersArraySort(event.target.value);
  // }
  //////////////////////////////////////////////

  let usersSmallContent = users.map((user, index) => {
    if (JSON.stringify(user).includes(searchInputValue))
      return <UsersSmall user={user} key={index} />;
  });
  let usersBigContent = users.map((user, index) => {
    if (JSON.stringify(user).includes(searchInputValue))
      return <UsersBig user={user} key={index} />;
  });

  const handleZoom = (arg) => {
    // debugger;
    let usersArray = users.concat();
    let user = usersArray.find((value) => value.id === arg);
    user.isZoomed = true;
    setUsers(users);
  };
  const handleUnZoom = (arg) => {
    let usersArray = users.concat();
    let user = usersArray.find((value) => value.id === arg);
    user.isZoomed = false;
    setUsers(users);
  };

  return (
    <Context.Provider value={{ handleZoom: handleZoom, handleUnZoom }}>
      <div className="App">
        <div>
          {/* <Modal /> */}
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
          <select
            value={selectValue}
            onChange={(event) => setSelectValue(event.target.value)}
            className="select"
          >
            <option>name</option>
            <option>username</option>
            <option>id</option>
          </select>
        </div>
        <div className="contentBody">
          {currentView === "small" ? usersSmallContent : usersBigContent}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
