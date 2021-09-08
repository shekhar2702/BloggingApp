import BlogList from "./BlogList";
import useFetch from "./useFetch";
function Home() {
  const {
    data: blogs,
    isError,
    isPending,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div>Loading.....</div>}
      {isError && <div>{isError}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;
