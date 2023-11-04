import "./App.css";
import { useRef } from "react";

function App() {
  const imgRef = useRef(null);

  const handleClick = () => {
    if (!document.fullscreenElement) {
      imgRef.current.requestFullscreen().catch((error) => {
        console.log(error);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <section>
      <h2>Click me</h2>
      <img
        src="./images/image.jpg"
        alt=""
        onClick={() => handleClick()}
        ref={imgRef}
      />
    </section>
  );
}

export default App;
