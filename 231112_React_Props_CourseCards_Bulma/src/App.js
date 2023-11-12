import 'bulma/css/bulma.css'
import './App.css';
import Course from './Course';
import I1 from './assets/1.jpg'
import I2 from './assets/2.jpg'
import I3 from './assets/3.jpg'
import I4 from './assets/4.jpg'


function App() {
  return (
    <div className="App">
      <section className='hero is-link'>
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                img={I1}
                title="Angular"
                description=" Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Vitae, beatae."/>
            </div>
            <div className="column">
              <Course
                img={I2}
                title="React"
                description=" Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Vitae, beatae."/>
            </div>
            <div className="column">
              <Course
                img={I3}
                title="Html"
                description=" Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Vitae, beatae."/>
            </div>
            <div className="column">
              <Course
                img={I4}
                title="CSS"
                description=" Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Vitae, beatae."/>
            </div>
          </div>
          </section>
      </div>
    </div>
  );
}

export default App;
