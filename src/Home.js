import { useState, useEffect } from "react";
import BlogList from "./BlogList";
function Home() {
  const [name, setName] = useState("Somya");
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
    console.log(name);
  }, [name]); //Added a useEffect dependency List.
  //   This time useEffect is executed only when the values in dependecy list changes
  //An empty dependency list([]) signifies that useEffect is going to run on first render only.
  //If we don't pass any dependency list then useEffect is executed on every renders.
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
      <button
        onClick={() => {
          setName("Shekhar");
        }}
      >
        Change Name!
      </button>
      <p>{name}</p>
    </div>
  );
}

export default Home;
// npx json-server --watch data/db.json --port 8000
//The above command is used to create a json server endpoint at port 8000(Port 8000 is specified because by default json server is created t port 3000 which is already being used to serve our react application.)