import "./App.css";
import Feeds from "./components/Feeds/Feeds";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";

function App() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="feeds">
          <Feeds />
        </div>
        <div className="widget">
          <Widget />
        </div>
      </div>
    </>
  );
}

export default App;
