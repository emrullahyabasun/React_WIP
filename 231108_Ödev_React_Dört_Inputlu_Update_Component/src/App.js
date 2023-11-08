
import './App.css';
import Counter from './counter'
import ToDoList from './ToDoList'
import NotApp from './NotApp'
import Update from './Update'

function App() {
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-3">
          <Counter/>
        </div>
        <div className="col-3">
          <ToDoList/>
        </div>
        <div className="col-3">
          <NotApp/>
        </div> */}
     
        <div className="col-12">
          <Update/>
        </div>
      </div>
    </div>
  );
}

export default App;