import logo from './logo.svg';
import './App.css';
import Counter from './counter'
import ToDoList from './ToDoList'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Counter/>
        </div>
        <div className="col-3">
          <ToDoList/>
        </div>
      </div>
    </div>
  );
}

export default App;