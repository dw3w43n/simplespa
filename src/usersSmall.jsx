import React from "react";
import state from "./state";

function UsersSmall(props) {
  let [visitTime, setVisitTime] = React.useState(state.lastVisit);
  function onUserClick() {
    let date = new Date();
    setVisitTime(
      date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()
    );
  }
  return (
    <div className="usersSmall" onClick={onUserClick}>
      <div className="userImage">
        <img src="userImage.png" alt="" />
      </div>
      <div>
        <div>{props.user.name}</div>
        <div>{props.user.username}</div>
        <div>Id: {props.user.id}</div>
        <div>Email: {props.user?.email}</div>
        <div>Last Visit: {visitTime}</div>
      </div>
    </div>
  );
}

export default UsersSmall;
