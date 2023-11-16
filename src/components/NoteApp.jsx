import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="note-app">
                <NoteAppHeader />
                <NoteAppBody />
            </div>
        )
    }
}

export default NoteApp;