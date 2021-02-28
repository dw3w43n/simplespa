import React from "react";
import state from "./state";

function Header() {
  let [searchInputValue, setSearchInputValue] = React.useState(
    state.searchInputValue
  );

  function onSearchInputChange(event) {
    setSearchInputValue(() => event.target.value);
  }

  function toNullifySearchInputValue() {
    setSearchInputValue("");
  }

  state.searchInputValue = searchInputValue;

  return (
    <div className="header">
      <div className="searchArea">
        <input
          value={searchInputValue}
          onChange={onSearchInputChange}
          placeholder="search"
        />
        <button onClick={toNullifySearchInputValue}>&times;</button>
      </div>
    </div>
  );
}

export default Header;
