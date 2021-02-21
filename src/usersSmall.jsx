import React from "react";

function UsersSmall(props) {
  // let contentBody = props.state.users.map((value) => {
  //   return <div>{value.name}</div>;
  // });
  console.log(props.user);
  return (
    <div className="usersSmall">
      <div className="userImage">
        <img src="userImage.png" alt="" />
      </div>
      <div>
        <div>
          {props.user.name} {props.user.sName}
        </div>

        <div>Age: {props.user.age}</div>
        <div>City: {props.user.city}</div>
      </div>
    </div>
  );
}

export default UsersSmall;
