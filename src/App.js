import "./App.css";
import Header from "./Header";
import Tindercards from "./Tindercards";
import Swipebuttons from "./Swipebuttons";
function App() {
  return (
    <div className="App">
      {/* <h1>Tinder</h1> */}
      <Header />
      <Tindercards />
      <Swipebuttons />
    </div>
  );
}

export default App;
