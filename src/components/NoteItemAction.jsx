import React from "react";

function NoteItemAction({ id, onDelete, onArchive, archive }) {
    let text;
    if (archive) {
        text = "Pindahkan";
    } else {
        text = "Arsipkan";
    }

    return (
        <div className="note-item__action">
            <button type="button" className="note-item__delete-button" onClick={() => onDelete(id)}>Hapus</button>
            <button type="button" className="note-item__archive-button" onClick={() => onArchive(id)}>{text}</button>
        </div>
    )
}

export default NoteItemAction