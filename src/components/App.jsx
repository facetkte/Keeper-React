import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((notesItem, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />      
      <CreateArea onAdd={addNote} />
      {note.map((notesItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notesItem.title}
            content={notesItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
