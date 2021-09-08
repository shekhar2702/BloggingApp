import { useState, useEffect } from "react";
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
  useEffect(() => {
    console.log("use effect ran!!");
    console.log(blogs); //remember never chanfe state within useEffect because useEffect is executed on every render and changing the state within useEffect will cause a re-render and then useEffect will run again and will change state again and hence re-render is triggered again.This process becomes infinite loop
  });
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
    </div>
  );
}

export default Home;
