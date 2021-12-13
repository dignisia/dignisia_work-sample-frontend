import { MyComponent } from "./MyComponent";
import MyComponent2 from "./MyComponent2";

function App() {
  return (
    <div className="App">
      <div style={{float: 'left'}}>
    <MyComponent />
      </div>
      <div style={{ paddingLeft: 20, float: 'left'}}>
             <MyComponent2 />
      </div>
    </div>
  );
}

export default App;
