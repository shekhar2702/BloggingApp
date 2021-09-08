import { useState, useEffect } from "react";
import BlogList from "./BlogList";
function Home() {
  const [blogs, setBlogs] = useState();
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState();
  useEffect(() => {
    console.log("Use effect executed");
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        console.log(res);
        if (!res.ok)
          throw new error("Could not fetch data for the requested resource");
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setIsError();
      })
      .catch((e) => {
        setIsError(e.message);
        setIsPending(false);
      });
  }, []);
  return (
    <div className="home">
      {isPending && <div>Loading.....</div>}
      {isError && <div>{isError}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;
