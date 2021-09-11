import React, { useState, useEffect } from "react";

function Notes() {

    const [notes, setNotes] = useState([{ titlez: "", contentz: "" }]);

    //useEffect() method is used to fetch the data from our database
    useEffect(function () {
        fetch("/notes").then(function (res) {
            if (res.ok) {
                return res.json()
            }
        }).then(myjasonResponse => setNotes(myjasonResponse));

    })

    return <div className="container">
        <h1>Notes page</h1>
        {notes.map(eachNote =>
            <div>
                {/*NB: the title & content are coming from the database field to enable it read from the database. */}
                <h3>{eachNote.title}</h3>
                <p>{eachNote.content}</p>
            </div>
        )}

    </div>;
}

export default Notes;