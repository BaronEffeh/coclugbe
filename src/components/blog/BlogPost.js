import React from "react";
import { useParams } from "react-router-dom";
import './blogPost.css';

const BlogPost = ({ posts }) => {
   const { id } = useParams();
   const post = posts.find((post) => post.id === parseInt(id));

   if (!post) {
      return <p>Post not found</p>;
   }

   return (
      <div className="blogPost">
         <div className="blogPostContent">
            <div className="postHead">
               <h6>{post.category}</h6>
               <h1>{post.title}</h1>
               <p>{post.date} - By {post.author}</p>
            </div>
            <div className="postMainImg">
               <img src={post.mainImage} alt="" />
            </div>
            <div className="postBody">
               <p>{post.content}</p>
               <img src={post.bodyImage} alt="" />
               <p>{post.moreContent}</p>
               <p>{post.moreContent}</p>
            </div>
         </div>
      </div>
   );
};

export default BlogPost;