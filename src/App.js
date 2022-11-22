import "./App.css";
import FetchNews from "./Components/FetchNews";
function App() {
  return (
    <>
      <h1>Latest Sports News</h1>
      <div className="app">
        <FetchNews />
      </div>
      <div className="footer">
        <hr />
        <p> Copyright © 2022 The Indian Express [P] Ltd. All Rights Reserved</p>
        <br />
      </div>
    </>
  );
}

export default App;
