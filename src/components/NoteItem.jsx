import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

class NoteItem extends React.Component {
    render() {
        return (
            <div className="note-item">
                < NoteItemContent />
                <NoteItemAction />
            </div>
        )
    }
}

export default NoteItem;