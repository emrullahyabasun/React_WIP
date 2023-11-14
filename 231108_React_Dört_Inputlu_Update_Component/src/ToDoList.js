import React, { useState } from 'react'

export default function ToDoList() {

    const [listItem, addListItem] = useState([])
    const [inp, setInput] = useState("")
    const Ekle = () => {
        addListItem([...listItem, inp])
        setInput("")
    }





    return (

        <div>
            {listItem.map((e) => {
                return (<h1>{e}</h1>)
            })}

            <input type="text" placeholder='Kafana Göre' value={inp} onChange={(e) => setInput(e.target.value)} />
            <button className="btn btn-dark" onClick={Ekle}>Ekle</button>
        </div>
    )
}
