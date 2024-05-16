import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../Components/Loading";
import ErrorPage from "../Components/ErrorPage";
import UserProfile from "../Components/UserProfile";

const UserDetails = () => {
  let { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userPosts, setUserPosts] = useState(null);
  const [showPosts, setShowPosts] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false)

  const fetchUsers = async () => {
    try {
      setLoading(true);
      let resUser = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      
      if (resUser.ok) {
        let user = await resUser.json();
        setUser(user);
        
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

  const loadPosts = async () => {
    try{
      setLoadingPost(true)
      let resPosts = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=" + id
      );
      if(resPosts.ok){
        let userPosts = await resPosts.json();
        setUserPosts(userPosts);
        console.log(userPosts);
      }
    }catch(error){
      setError(error.message)
    }finally{
      setLoadingPost(false)
    }

  }
  const postsToggler = () => {
    !showPosts && loadPosts();
    setShowPosts(!showPosts);
  };

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <ErrorPage error={error} />;
  } else {
    return (
      <div>
        {user && <UserProfile user={user} />}
        <div className="text-center mt-3">
          <button className="btn btn-primary px-4" onClick={postsToggler} disabled={loadingPost}>
            {showPosts? "Hide Posts" : "Show Posts"}
          </button>
          {userPosts && showPosts && <PostContainer userPosts={userPosts} userName={user.name}/>}
        </div>
      </div>
    );
  }
};

export default UserDetails;

const PostContainer = ({ userPosts, userName}) => {
  return (
    <div className="container  mt-3 rounded">
      <h4 className="bg-dark py-3 text-light rounded">Posts By {userName}</h4>
      <div className="row row-cols-1 g-2">
        {userPosts.map((post) => (
          <div className="col" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-primary">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
