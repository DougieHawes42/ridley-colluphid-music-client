import "./style.scss";

import { useSelector } from "react-redux";

export const BlogCard1 = ({ post }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <article className={`blog-card ${theme === "dark" ? "dark" : "light"}`}>
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-card-content">
        <p className="blog-card-date">{post.date}</p>
        <h2 className="blog-card-title">{post.title}</h2>
        <h3 className="blog-card-subtitle">{post.subtitle}</h3>
        <div className="blog-card-body">
          <p>{post.body}</p>
        </div>
      </div>
    </article>
  );
};

export const BlogCard2 = ({ post }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <article
      className={`blog-card blog-card2 ${theme === "dark" ? "dark" : "light"}`}>
      <div className="blog-card-content">
        <p className="blog-card-date">{post.date}</p>
        <h2 className="blog-card-title">{post.title}</h2>
        <h3 className="blog-card-subtitle">{post.subtitle}</h3>
        <div className="blog-card-body">
          <p>{post.body}</p>
        </div>
      </div>
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
      </div>
    </article>
  );
};
