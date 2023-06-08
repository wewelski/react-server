import { useState } from 'react';
import './App.css'
import Note from './component/Note'

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');

  const addNote = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      important: false,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject));
    setNewNote('');
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default App
