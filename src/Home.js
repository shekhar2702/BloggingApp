import { useState, useEffect } from "react";
import BlogList from "./BlogList";
function Home() {
  const [blogs, setBlogs] = useState();
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    console.log("Use effect executed");
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsPending(false); //setIsPending to false once data is fetched
      });
  }, []);
  //Since we use an empty dependency list we can change the state here within useEffect as useEffect is executed only on first render.
  //But if we fill in blogs as a dependency list for useEffect then there is going to be infinite renders and executions of useEffect.Hence we use an empty
  return (
    <div className="home">
      {isPending && <div>Loading.....</div>}
      {/* //The above code is written to show loading icon untill we get data from server.Once we get the data loading dissappears. */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* //Short-circuiting in above code because we only wnt to render BlogList component only when we have the data */}
    </div>
  );
}

export default Home;
