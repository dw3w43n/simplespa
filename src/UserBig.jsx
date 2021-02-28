import React, { useContext } from "react";
import { Context } from "./context";

let styles = {
  span: {
    color: "#054412",
    fontWeight: "700",
  },
};

function UsersBig(props) {
  const { handleZoom, handleUnZoom } = useContext(Context);
  let [visitTime, setVisitTime] = React.useState("many years ago");

  const classes = ["usersBig"];
  if (props.user.isZoomed) classes.push("zoomed");
  console.log(props.user.id + " " + classes);

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
    <div className={classes.join(" ")} onClick={onUserClick}>
      <div className="userImage">
        <img src="userImage.png" alt="" />
      </div>
      <div>
        <div className="uZm">
          <button
            onClick={() => handleUnZoom(props.user.id)}
            className="zoomButton"
          >
            &times;
          </button>
        </div>
        <div> {props.user.name} </div>
        <div>{props.user.username}</div>
        <div>
          <span style={styles.span}>Id:</span> {props.user.id}
        </div>
        <div>
          <span style={styles.span}>Email:</span> {props.user?.email}
        </div>
        <div>
          <span style={styles.span}>Address:</span> {props.user?.address?.city}
          {props.user?.address?.street}
          {props.user?.address?.suite}
        </div>
        <div>
          <span style={styles.span}>ZipCode:</span>{" "}
          {props.user?.address?.zipcode}
        </div>
        <div>
          <span style={styles.span}>PhoneNumber:</span> {props.user?.phone}
        </div>
        <div>
          <span style={styles.span}>Website:</span> {props.user?.website}
        </div>
        <div>
          <span style={styles.span}>Company:</span> {props.user?.company?.name}
        </div>
        <div>
          <span style={styles.span}>Last visit:</span> {visitTime}
        </div>
        <div className="zm">
          <button
            onClick={() => handleZoom(props.user.id)}
            className="zoomButton"
          >
            Zoom
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsersBig;
