import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();
  const hendelclick = (friendid) => {
    const url = `/friend/${friendid}`;
    history.push(url);
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>
        {/* <Link to={`/friend/${id}`}>
          <button>Show detail of id: {id}</button>
        </Link> */}
        <button onClick={() => hendelclick(id)}>detail</button>
      </p>
    </div>
  );
};

export default Friend;
