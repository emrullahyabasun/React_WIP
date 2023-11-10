// başlık, açıklama, kategori, süre

import React, { useState } from 'react'

export default function Update() {
    const [yemek, setYemek] = useState('');
    const [malzeme1, setMalzeme1] = useState('');
    const [malzeme2, setMalzeme2] = useState('');
    const [malzeme3, setMalzeme3] = useState('');
    const [malzeme4, setMalzeme4] = useState('');
    const [malzeme5, setMalzeme5] = useState('');
    const [tarif1, setTarif1] = useState('');
    const [tarif2, setTarif2] = useState('');
    const [tarif3, setTarif3] = useState('');
    const [tarif4, setTarif4] = useState('');
    const [id, setID] = useState(0);
    const [notes, setNotes] = useState([
        { yemek: "GYM", malzeme1: "Spor", malzeme2: "Body Building", malzeme3: "Haftada 3 gün", malzeme4: "Haftada 3 gün", malzeme5: "Haftada 3 gün", tarif1: "Haftada 3 gün", tarif2: "Haftada 3 gün", tarif3: "Haftada 3 gün", tarif4: "Haftada 3 gün" },
        { yemek: "GYM", malzeme1: "Spor", malzeme2: "Body Building", malzeme3: "Haftada 3 gün", malzeme4: "Haftada 3 gün", malzeme5: "Haftada 3 gün", tarif1: "Haftada 3 gün", tarif2: "Haftada 3 gün", tarif3: "Haftada 3 gün", tarif4: "Haftada 3 gün" },
        { yemek: "GYM", malzeme1: "Spor", malzeme2: "Body Building", malzeme3: "Haftada 3 gün", malzeme4: "Haftada 3 gün", malzeme5: "Haftada 3 gün", tarif1: "Haftada 3 gün", tarif2: "Haftada 3 gün", tarif3: "Haftada 3 gün", tarif4: "Haftada 3 gün" },
    ])
    const [editMode, setEditMode] = useState(false);
    const [editNoteId, setEditNoteId] = useState();

    const addNote = () => {
        if (editMode) {
            const updateNotes = notes.map((note) => {
                if (note.id === editNoteId) {
                    return {
                        ...note,
                        yemek,
                        malzeme1,
                        malzeme2,
                        malzeme3,
                        malzeme4,
                        malzeme5,
                        tarif1,
                        tarif2,
                        tarif3,
                        tarif4,
                    };
                }
                return note;
            });
            setNotes(updateNotes);
            setEditMode(false);
            setEditNoteId('');
        } else {
            setID(id + 1);
            setNotes([...notes, { yemek: yemek, malzeme1: malzeme1, malzeme2: malzeme2, malzeme3: malzeme3, malzeme4: malzeme4, malzeme5: malzeme5, tarif1: tarif1, tarif2: tarif2, tarif3: tarif3, tarif4: tarif4, id: id }])
        }
        setYemek('');
        setMalzeme1('');
        setMalzeme2('');
        setMalzeme3('');
        setMalzeme4('');
        setMalzeme5('');
        setTarif1('');
        setTarif2('');
        setTarif3('');
        setTarif4('');
    }

    const editNote = (note) => {
        setEditMode(true);
        setEditNoteId(note.id);
        setYemek(note.yemek);
        setMalzeme1(note.malzeme1);
        setMalzeme2(note.malzeme2);
        setMalzeme3(note.malzeme3);
        setMalzeme4(note.malzeme4);
        setMalzeme5(note.malzeme5);
        setTarif1(note.tarif1);
        setTarif2(note.tarif2);
        setTarif3(note.tarif3);
        setTarif4(note.tarif4);
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
                            <div className='col-1'>
                                <h5>Yemek Adı</h5>
                                <span>{i.yemek}</span>
                            </div>
                            <div className='col-1'>
                                <h5>Malzeme 1</h5>
                                <span>{i.malzeme1}</span>
                            </div>
                            <div className='col-1'>
                                <h5>Malzeme 2</h5>
                                <span>{i.malzeme2}</span>
                            </div>
                            <div className='col-1'>
                                <h5>Malzeme 3</h5>
                                <span>{i.malzeme3}</span>
                            </div>
                            <div className='col-1'>
                                <h5>Malzeme 4</h5>
                                <span>{i.malzeme4}</span>
                            </div>
                            <div className='col-1'>
                                <h5>Malzeme 5</h5>
                                <span>{i.malzeme5}</span>
                            </div>
                            <div className='col-1'>
                                <h5>Adım 1</h5>
                                <span>{i.tarif1}</span>
                            </div>
                            <div className='col-1'>
                                <h5>Adım 2</h5>
                                <span>{i.tarif2}</span>


                            </div>
                            <div className='col-1'>
                                <h5>Adım 3</h5>
                                <span>{i.tarif3}</span>
                            </div>
                            <div className='col-1'>
                                <h5>Adım 4</h5>
                                <span>{i.tarif4}</span>
                            </div>

                            <div className='col-12'>
                                <button className='btn btn-warning' onClick={() => editNote(i)}>Edit Note</button>
                                <button className='btn btn-warning' onClick={() => deleteNote(i)}>Delete Note</button>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
            <div className='container'>
                <div className='row'>
                    <div className='col-1'>
                        <input onChange={(e) => setYemek(e.target.value)} placeholder='YemekAdı'></input>

                    </div>
                    <div className='col-1'>
                        <input onChange={(e) => setMalzeme1(e.target.value)} placeholder='Malzeme1'></input>

                    </div>
                    <div className='col-1'>
                        <input onChange={(e) => setMalzeme2(e.target.value)} placeholder='Malzeme2'></input>

                    </div>
                    <div className='col-1'>
                        <input onChange={(e) => setMalzeme3(e.target.value)} placeholder='Malzeme3'></input>

                    </div>
                    <div className='col-1'>
                        <input onChange={(e) => setMalzeme4(e.target.value)} placeholder='Malzeme4'></input>

                    </div>
                    <div className='col-1'>
                        <input onChange={(e) => setMalzeme5(e.target.value)} placeholder='Malzeme5'></input>

                    </div>
                    <div className='col-1'>
                        <input onChange={(e) => setTarif1(e.target.value)} placeholder='Tarif1'></input>

                    </div>
                    <div className='col-1'>
                        <input onChange={(e) => setTarif2(e.target.value)} placeholder='Tarif2'></input>

                    </div>
                    <div className='col-1'>
                        <input onChange={(e) => setTarif3(e.target.value)} placeholder='Tarif3'></input>

                    </div>
                    <div className='col-1'>
                        <input onChange={(e) => setTarif4(e.target.value)} placeholder='Tarif4'></input>

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


/*  */