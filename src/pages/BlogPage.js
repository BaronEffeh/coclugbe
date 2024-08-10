import React from "react";
import { Routes, Route } from "react-router-dom";
// import RecentPost from "../components/blog/RecentPost/RecentPost";
// import AllBlog from "../components/blog/AllBlog/AllBlog";
import Blog from '../components/blog/Blog';
import BlogPost from '../components/blog/BlogPost';
import { blogPosts } from '../assets/mockData/Blog/BlogPostData';

const BlogPage = () => {
   return (
      <div className="blog" style={{ background: "#F5F2F0", paddingTop: "1rem" }}>
         {/* <RecentPost /> */}
         {/* <AllBlog /> */}
         <Routes>
            <Route path="/" element={<Blog posts={blogPosts} />} />
            <Route path=":id" element={<BlogPost posts={blogPosts} />} />
         </Routes>
      </div>
   );
}

export default BlogPage;




// import React from "react";
// import RecentPost from "../components/blog/RecentPost/RecentPost";
// import AllBlog from "../components/blog/AllBlog/AllBlog";

// const BlogPage = () => {
//    return (
//       <div className="blog" style={{ background: "#F5F2F0", paddingTop: "5rem" }} >
//          <RecentPost />
//          <AllBlog />
//       </div>
//    );
// }

// export default BlogPage;