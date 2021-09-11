import React, { useState } from "react";
import axios from "axios";

function CreateNote() {

    const [input, setInput] = useState({ titles: "", contents: "" });

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(function (prevInput) {
            return {
                ...prevInput, [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();

        const newNote = {
            titless: input.titles,
            contentss: input.contents
        }

        axios.post("http://localhost:3001/create", newNote)

        setInput({ titles: "", contents: "" })


    }

    return <div className="container">
        <h1>Create Note page</h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="titles" value={input.titles} autoComplete="off" className="form-control" placeholder="note titles"></input>
            </div>
            <div className="form-group">
                <textarea onChange={handleChange} name="contents" value={input.contents} autoComplete="off" className="form-control" placeholder="note contents"></textarea>
            </div>
            <button onClick={handleClick} className="btn btn-lg btn-info">ADD NOTE</button>
        </form>
    </div>;
}

export default CreateNote;