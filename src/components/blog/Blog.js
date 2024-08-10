import React from "react";
import { Link } from "react-router-dom";
import '../home/HomeBlog/homeBlog.css';
import '../blog/AllBlog/allBlog.css';
import './RecentPost/recentPost.css';
import MainPostImg from '../../assets/blogImgs/EMZxDosijJ4.png'

const Blog = ({ posts }) => {
   return (
      <div className="homeBlog">
         <div className="homeBlogContaints">

            <div className="recentPostHead">
               <h6>OUR BLOG</h6>
               <h2>MOST RECENT POST</h2>
            </div>
            <div className="mainPost">
               <div className="mainPostImg">
                  <img src={MainPostImg} alt="Main post" />
               </div>
               <div className="mainPostInfo" style={{ textAlign: "left", lineHeight: "2rem" }}>
                  <div className="dateAuthor">
                     <p>Tuesday 06 August, 2024</p>
                     <p>By Matthew Okoro</p>
                  </div>
                  <h3>CHURCH WAS DOING WHAT HE OFTEN DID WHEN DROPPED AN ORACLE</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse id molestias, pariatur dolore dolorum, suscipit quisquam tenetur nostrum, rerum velit eligendi. Assumenda quasi voluptatibus qui officia. Quam modi veniam alias?</p>
                  <button>READ MORE</button>
               </div>
            </div>


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