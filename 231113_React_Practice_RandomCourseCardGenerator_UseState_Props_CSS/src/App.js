import Course from './Course'
import './App.css'
import { useState } from 'react'




function getRandomCourse() {
  const courseArray = ['Angular', 'Bootstrap5', 'Ccsharp', 'Kompleweb'];
  return courseArray[Math.floor(Math.random() * courseArray.length)]
}





function App() {

  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
  }


  const courseList = courses.map((item, index) => {
    return (
      <Course
        key={index}
        courseName={item} /> //courseName isimli bir prop yapmis olduk ve mapteki itemini atadik
    )
  });


  return (
    <div className="App">
      <button className='appButton' onClick={handleClick}>Kurs Ekle</button>
      <div className='courseList'>
        {courseList}
      </div>
    </div>
  )
};

export default App;
