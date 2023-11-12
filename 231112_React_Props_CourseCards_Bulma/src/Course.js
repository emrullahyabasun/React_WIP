import React from 'react'

function Course(props) {
  /* const title = props.title;
   const description = props.description; */
  /* Yukarıda propsları bir değişkene atayarak returnde daha temiz kullanmanin onunu actik. 
  Fakat daha da profesyoneli bir asagidaki  satir gibi hazirlamaktir.*/
  const { title, description, img } = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img} alt="Courses" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">
          {description}
        </div>
      </div>
    </div>
  )
}

export default Course