import { Link } from "react-router-dom";

function BlogList() {
  const blogs = [
    { id: 1, title: "Blog 1" },
    { id: 2, title: "Blog 2" },
  ];

  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BlogList;
