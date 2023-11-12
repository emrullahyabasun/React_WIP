import React from 'react'
import Angular from './assets/angular.jpg'
import Bootstrap5 from './assets/bootstrap5.png'
import Ccsharp from './assets/ccsharp.png'
import Kompleweb from './assets/kompleweb.jpg'

const courseMap = {
  Angular: Angular,
  Bootstrap5: Bootstrap5,
  Ccsharp: Ccsharp,
  Kompleweb: Kompleweb,
}  //bir mapping objesi olusturuldu.

function Course({ courseName }) { //courseName propu bu componente tanimlandi
  return (
    <div>
      <img src={courseMap[courseName]} alt="" />
    </div>
  )
}

export default Course