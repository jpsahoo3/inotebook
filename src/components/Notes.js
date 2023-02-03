import React, { useContext }from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <>
        <h2>Your Notes</h2>
        <div className="row my-3">
            {notes.map((note) => {
                return <Noteitem note={note}/>
            })}
        </div>
        </>
    )
}

export default Notes
