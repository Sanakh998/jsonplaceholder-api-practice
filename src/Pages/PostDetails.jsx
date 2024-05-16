import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import ErrorPage from "../Components/ErrorPage";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostDetails = () => {
  let { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(null)

  const fetchPosts = async () => {
    try {
      setLoading(true);
      let resComments = await fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
      let resPosts = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
      if (resPosts.ok && resComments.ok ) {
        let post = await resPosts.json();
        let comments = await resComments.json()
        setPost(post);
        setComments(comments);
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
    fetchPosts();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <ErrorPage error={error} />;
  } else {
    return <div className="container">
      {post && comments ? (
        <div>
          <PostCard post={post}/>
          <hr />
          <Comments comments={comments}/>
        </div>
      ): null}
    </div>
  }
};

export default PostDetails;


const PostCard = ({post}) => {
  return(
    <div className="card mb-3">
      <div className="card-body">
        <h4 className="card-title text-success">{post.title}</h4>
        <p className="card-text fs-5">{post.body}</p>
        <Link to={'/posts'} className="btn btn-primary">Back</Link>
      </div>
    </div>
  )
};


const Comments = ({ comments }) => {
  return (
    <div className="bg-dark-subtle rounded p-1">
      <h5 className="py-3 bg-dark text-light px-3 rounded">Comments</h5>
      {comments.map(comment => (
        <div className="card mb-3" key={comment.id}>
          <div className="card-body">
        <h6 className="card-subtitle mb-2 text-primary">{comment.name}</h6>
        <p className="card-text">{comment.body}</p>
        <p className="card-text"><small className="text-muted">{comment.email}</small></p>
      </div>
        </div>
      ))}
    </div>
  );
};