import './Blog.css';
import { Link } from 'react-router-dom';
import { blogs } from '../../pages/blog-data';

export default function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <h2>Travel Blogs</h2>
        <div className="blog-grid">
          {blogs.map(blog => (
            <Link to={`/blog/${blog.id}`} className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
