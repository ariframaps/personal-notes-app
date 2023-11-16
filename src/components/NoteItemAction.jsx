import React from "react";

function NoteItemAction({ id, onDelete, onArchive }) {
    return (
        <div className="note-item__action">
            <button type="button" className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
            <button type="button" className="note-item__archive-button" onClick={() => onArchive(id)}>Archive</button>
        </div>
    )
}

export default NoteItemAction