import "./style.scss";
import React from "react";

import { PublicRoute } from "../../utils/routes.js";
import { BlogCard1, BlogCard2 } from "../../utils/cards.js";

import { blogItems } from "../../../assets/data/blogItems.js";

const Blog = () => {
  return (
    <PublicRoute>
      <div className="blog-page">
        {blogItems.map((post, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <BlogCard1 post={post} />
            ) : (
              <BlogCard2 post={post} />
            )}
          </React.Fragment>
        ))}
      </div>
    </PublicRoute>
  );
};

export default Blog;
