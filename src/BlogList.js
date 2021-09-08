function BlogList({ blogs, title, handleClick }) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <button onClick={() => handleClick(blog.id)}>Delete Me!</button>
        </div>
      ))}
    </div>
  );
}
export default BlogList;
