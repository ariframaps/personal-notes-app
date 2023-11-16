import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

class NoteAppBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="note-app__body">
                <NoteInput />
                <h2>Catatan Aktif</h2>
                <NotesList />
            </div>
        )
    }
}

export default NoteAppBody;