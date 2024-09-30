import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        Intuit Craft Demo
      </header> */}
      <h1>Intuit Craft Demo</h1>
      <div className="users-wrap">
        <User name="Leon" tax={0} />
      </div>
    </div>
  );
}

export default App;
