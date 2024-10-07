import React from "react";
import "../styles/BlogSection.css";

function BlogSection() {
  return (
    <section id="blog" className="blog-section">
      <h2>Latest from the Blog</h2>
      <div className="blog-grid">
        <div className="blog-card">
          <h3>Corporate Standards - Applications for the Future</h3>
          <p>Discover how future corporate standards are evolving with the latest technologies.</p>
          <a href="#readmore">Read More</a>
        </div>
        <div className="blog-card">
          <h3>Corporate Standards - Applications for the Future</h3>
          <p>Discover how future corporate standards are evolving with the latest technologies.</p>
          <a href="#readmore">Read More</a>
        </div>
        <div className="blog-card">
          <h3>Corporate Standards - Applications for the Future</h3>
          <p>Discover how future corporate standards are evolving with the latest technologies.</p>
          <a href="#readmore">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
