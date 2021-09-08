import { useState } from "react";
import BlogList from "./BlogList";
function Home() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  const handleClick = (id) => {
    let newBlog = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlog);
  };
  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title={"All Blogs"}
        handleClick={handleClick}
      ></BlogList>
      <BlogList
        blogs={blogs.filter((blog) => blog.author == "mario")}
        title={"Mario's BLogs"}
        handleClick={handleClick}
      ></BlogList>
    </div>
  );
}

export default Home;
