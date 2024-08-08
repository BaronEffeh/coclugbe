import React from "react";
import { Link } from "react-router-dom";
import '../home/HomeBlog/homeBlog.css';
import '../blog/AllBlog/allBlog.css';

const Blog = ({ posts }) => {
   return (
      <div className="homeBlog">
         <div className="homeBlogContaints">
            <h2>ALL BLOG POST</h2>
            <div className="homeBlogCards">
               {posts.map((post) => (
                  <div key={post.id} className="homeBlogCard">

                     <Link to={`/blog/${post.id}`} >
                        <h6>{post.category}</h6>
                        <h2>
                           {post.title}
                        </h2>
                        <p className="blogSnepet">{post.content.substring(0, 100)}...</p></Link>

                     <p className="postAuthor">By: <b> {post.author} </b></p>
                     <p className="postDate">Posted: <b>{post.date} </b></p>
                  </div>
               ))}
            </div>
         </div>
      </div>
      // <div>
      //    <h1>Blog</h1>
      //    {posts.map((post) => (
      //       <div key={post.id}>
      //          <h2>
      //             <Link to={`/blog/${post.id}`}>{post.title}</Link>
      //          </h2>
      //          <p>{post.author} - {post.date}</p>
      //          <p>{post.content.substring(0, 100)}...</p>
      //       </div>
      //    ))
      //    }
      // </div >
   );
};

export default Blog;