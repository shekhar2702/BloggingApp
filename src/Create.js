import { useState } from "react";
import { useHistory } from "react-router";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const newBlog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      console.log("New Blog added");
      setIsPending(false);
      history.push("/");//redirects to the root route("/") once the blog is successfully added.
      //history.push(-1)will redirect to the last page we re-visited .So history has a kind of history of our page navigations. We can provide positive numbers as well -2 will signify the second last page from history.
    });
  };
  return (
    <div className="create">
      <h2>Add a new Blog.</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding.....</button>}
      </form>
    </div>
  );
};

export default Create;
