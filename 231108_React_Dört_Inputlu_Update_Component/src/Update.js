// başlık, açıklama, kategori, süre

import React, { useState } from 'react'

export default function Update() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDesc] = useState('');
    const [time, setTime] = useState('');
    const [id, setID] = useState(0);
    const [notes, setNotes] = useState([
        { title: "GYM", category: "Spor", description: "Body Building", time: "Haftada 3 gün" },
        { title: "Coding", category: "Work", description: "Study React", time: "Haftada 7 gün" },
        { title: "Arkadaşlar", category: "Sosyal", description: "Ekiple buluş", time: "Haftada 1 gün" }
    ])
    const [editMode, setEditMode] = useState(false);
    const [editNoteId, setEditNoteId] = useState();
    
    const addNote = () => {
        if (editMode) {
            const updateNotes = notes.map((note) => {
                if (note.id === editNoteId) {
                    return {
                        ...note,
                        title,
                        category,
                        description,
                        time
                    };

                }
                return note;
            });
            setNotes(updateNotes);
            setEditMode(false);
            setEditNoteId('');
        } else {
            setID(id + 1);
            setNotes([...notes, { title: title, category: category, description: description, time: time, id: id }])
        }
        setTitle('');
        setCategory('');
        setDesc('');
        setTime('');
    }
    
    const editNote = (note) => {
        setEditMode(true);
        setEditNoteId(note.id);
        setTitle(note.title);
        setCategory(note.category);
        setDesc(note.description);
        setTime(note.time);
    }
   
    const deleteNote = (d) => {
        setNotes(notes.filter((e) => e.id !== d.id))
    }
    return (
        <div>
            {notes.map((i) => {
                return (
                    <div key={i.id} className='container'>
                        <div className='row'>

                            <div className='col-3'>
                                <h5>Title</h5>
                                <span>{i.title}</span>
                            </div>
                            <div className='col-3'>
                                <h5>Category</h5>
                                <span>{i.category}</span>


                            </div>
                            <div className='col-3'>
                                <h5>Description</h5>
                                <span>{i.description}</span>


                            </div>
                            <div className='col-3'>
                                <h5>Time</h5>
                                <span>{i.time}</span>
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-primary' onClick={() => editNote(i)}>Edit Note</button>
                                <button className='btn btn-primary' onClick={() => deleteNote(i)}>Delete Note</button>
                            </div>


                        </div>
                    </div>
                )
            }
            )}
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <input onChange={(e) => setTitle(e.target.value)} placeholder='Title'></input>

                    </div>
                    <div className='col-3'>
                        <input onChange={(e) => setCategory(e.target.value)} placeholder='Category'></input>

                    </div>
                    <div className='col-3'>
                        <input onChange={(e) => setDesc(e.target.value)} placeholder='Description'></input>

                    </div>
                    <div className='col-3'>
                        <input onChange={(e) => setTime(e.target.value)} placeholder='Time'></input>

                    </div>
                    <div className='col-12'>
                        <button className='btn btn-dark' onClick={addNote}>
                            {editMode ? 'Update Note' : 'Add New Note'}
                        </button>

                    </div>

                </div>
            </div>
        </div>

    )
}