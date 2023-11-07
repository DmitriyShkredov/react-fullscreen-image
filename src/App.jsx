import "./App.css";

function App() {
  const handleClick = ({ target }) => {
    if (!document.fullscreenElement) {
      target.requestFullscreen().catch((error) => console.log(error));
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <section>
      <h2>Click me</h2>
      <img src="./images/image01.jpg" alt="" onClick={handleClick} />
      <img src="./images/image02.jpg" alt="" onClick={handleClick} />
    </section>
  );
}

export default App;
