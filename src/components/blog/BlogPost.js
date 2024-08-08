import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = ({ posts }) => {
   const { id } = useParams();
   const post = posts.find((post) => post.id === parseInt(id));

   if (!post) {
      return <p>Post not found</p>;
   }

   return (
      <div className="blogPost">
         <div className="blogPostContent">
            <h6>{post.category}</h6>
            <h1>{post.title}</h1>
            <p>{post.author} - {post.date}</p>
            <p>{post.content}</p>
         </div>
      </div>
   );
};

export default BlogPost;