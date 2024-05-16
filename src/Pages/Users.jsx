import React from "react";
import { useState, useEffect } from "react";
import ErrorPage from "../Components/ErrorPage";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import UserCard from "../Components/UserCard";



const Users = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (res.ok) {
        let users = await res.json();
        setUsers(users);
      } else {
        throw new Error("Some Error in Connection to Server");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <ErrorPage error={error} />;
  } else {
    return (
      <div>
        {users && <UserCard users={users}/>}
      </div>
    );
  }
};

export default Users;
