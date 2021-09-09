import { useParams } from "react-router";

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <div className="blog-details">
      <h2>Blog details {id}</h2>
    </div>
  );
};

export default BlogDetail;
