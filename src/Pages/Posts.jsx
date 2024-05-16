import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import ErrorPage from "../Components/ErrorPage";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (res.ok) {
        let posts = await res.json();
        setPosts(posts);
        // console.log(posts[0]);
      } else {
        throw new Error("Some Error in Connection to Server");
      }
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : err ? (
        <ErrorPage error={err} />
      ) : (
        posts && <PostCard posts={posts} />
      )}
    </div>
  );
};

export default Posts;

const PostCard = ({ posts }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {posts.map((post) => (
          <div className="col" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <Link to={"/posts/" + post.id} className="btn btn-primary">See More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
