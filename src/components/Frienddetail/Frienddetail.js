import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Frienddetail = () => {
  let { id } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h4>This is friend detail: {id}</h4>
      <p>Name: {friend.name}</p>
      <p>Email: {friend.email}</p>
      <p>Phone: {friend.phone}</p>
    </div>
  );
};

export default Frienddetail;
