import React from "react";
import NoteInput from "./NoteInput";

class NoteAppBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="note-app__body">
                <NoteInput />
            </div>
        )
    }
}

export default NoteAppBody;