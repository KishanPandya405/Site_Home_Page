import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Blog.css";

const Card = ({ image, title, date, author, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-meta">
          {date} by <span className="card-author">{author}</span>
        </p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog data when the component mounts
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.postman.com/collections/21192250-a50e1277-1ba5-4391-8937-80b388c049d9?access_key=PMAT-01HEAST02Z383GF562ABYFR5RX"
        );
        setBlogs(response.data?.blogs || []); // Ensure blogs is an array
      } catch (err) {
        console.error(err); // Log error for debugging
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="section">
      <div className="boxes">
        <h3>Testimonial</h3>
        <div className="box1">
          <img src="Image.png" alt="Josh Brollins" />
          <h5>Josh Brollins</h5>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div id="box2" className="box1">
          <img src="Image.png" alt="Josh Brollins" />
          <h5>Josh Brollins</h5>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>

      <div className="blogs">
        <div className="blog-header">
          <h3>Blogs</h3>
          <p>View All</p>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="card-container">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <Card
                key={index}
                image={blog.image || "https://via.placeholder.com/150"}
                title={blog.title || "Untitled Blog"}
                date={blog.date || "Unknown Date"}
                author={blog.author || "Unknown Author"}
                description={blog.description || "No description available."}
              />
            ))
          ) : (
            !loading && <p>No blogs available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
