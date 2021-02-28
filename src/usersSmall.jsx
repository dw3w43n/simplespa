import React from "react";
import { useContext } from "react";
import { Context } from "./context";

function UsersSmall(props) {
  const { handleZoom } = useContext(Context);
  // test();

  let [visitTime, setVisitTime] = React.useState("many years ago");
  function onUserClick() {
    let date = new Date();
    setVisitTime(
      ("0" + date.getHours()).slice(-2) +
        " : " +
        ("0" + date.getMinutes()).slice(-2) +
        " : " +
        ("0" + date.getSeconds()).slice(-2)
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
