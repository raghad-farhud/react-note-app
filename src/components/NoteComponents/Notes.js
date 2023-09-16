// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import "../css/Note.css";
import Note from "./Note"
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";

function Notes() {

    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");
    // const [noteDate, setNoteDate] = useState("");

    function textHandler(e) {
        setInputText(e.target.value);
    }
    function setDate() {
        const date = new Date();
        const dateStr = date.toLocaleDateString();
        const timeStr = date.toLocaleTimeString();
        return `${dateStr} - ${timeStr}`;
    }
    async function saveHandler() {
        if (inputText !== "") {
            const date = setDate();
            const newNote = { id: uuid(), text: inputText, noteDate: date };
            if (notes.length === 0) {
                setNotes([newNote]); 
            }
            else {
                setNotes((prevNote) => [
                    ...prevNote, newNote 
                ])
            }
            setInputText("");
            localStorage.setItem("Notes", JSON.stringify([...notes, newNote]));
        }
    };
    function deleteHandler(id) {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
        localStorage.setItem("Notes", JSON.stringify(filteredNotes));
    }
    // get notes from local storage
    useEffect(() => {
        const getNotes = JSON.parse(localStorage.getItem("Notes"));
        if (getNotes) {
            setNotes(getNotes);
        }
    }, []);

    return (
        <div className="notes">
            <CreateNote textHandler={textHandler} saveHandler={saveHandler} inputText={inputText} />
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    noteDate={note.noteDate}
                    deleteHandler={deleteHandler} />
            ))}
        </div>
    );
}
export default Notes;