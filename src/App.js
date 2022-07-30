import "./App.css";
import logo from "./logo.svg";
function App() {
  return (
    <div className="App">
      <img src={logo} alt="" />
      <img
        style={{ height: "250px" }}
        src="https://i.ibb.co/0KJJMqR/manifest-json.png"
        alt=""
      />
      <img
        style={{ height: "250px" }}
        src="https://i.ibb.co/5Wv3Hqw/index-html.png"
        alt=""
      />
      <h1>
        Your web app is a progressive web app (PWA). change in the manifest.json
        file for your own data.
      </h1>
    </div>
  );
}

export default App;
