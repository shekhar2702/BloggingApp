function Home() {
  let name = "Somya";
  function printThis(e) {
    console.log("Button 1 pressed", e.target);
  }
  function printName(name, e) {
    console.log(name, "pressed the button 2", e.target);
  }
  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={printThis}>Press Me!</button>
      <button onClick={(e) => printName(name, e)}>Press Me!</button>
    </div>
  );
}

export default Home;
