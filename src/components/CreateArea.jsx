import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpended, setExpended] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function submitContent(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expend() {
    setExpended(true);
  }



  return (
    <div> 
    
      <form className="create-note">
        {isExpended && 
        <div>        
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />  
        <hr/> 
        </div>
       }        
        
        <textarea 
          onClick={expend}
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExpended ? 3 : 1}
        />
        <Zoom in={isExpended}>
        <Fab color="secondary" aria-label="add" onClick={submitContent}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
