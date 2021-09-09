import { useParams } from "react-router";
import useFetch from "./useFetch";
const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    isError,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {isPending && <p>Loading.....</p>}
      {isError && <p>{isError}</p>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by:- {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
