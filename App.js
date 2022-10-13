// import logo from "./logo.svg";
// import "./App.css";

// import Gallery from "./component/Gallery";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
// import Weather from "./component/Weather";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar title="textUtilis" aboutText="about textutilis" />
      <div className="container my-3">
        <Textform heading="enter the text to analyze" />
        {/* <About /> */}
        {/* <Gallery /> */}
        {/* <Weather /> */}
      </div>
    </>
  );
}

export default App;
