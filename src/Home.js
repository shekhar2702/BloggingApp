function Home() {
  let name = "Somya";
  function printThis(e) {
    console.log("Button 1 pressed", e.target);
  }
  function printName(name) {
    console.log(name, "pressed the button 2");
  }
  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={printThis}>Press Me!</button>
      <button onClick={() => printName(name)}>Press Me!</button>
    </div>
  );
}

export default Home;
