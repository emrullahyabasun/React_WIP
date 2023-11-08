import logo from './logo.svg';
import './App.css';
import Counter from './counter'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Counter/>
        </div>
      </div>
    </div>
  );
}

export default App;