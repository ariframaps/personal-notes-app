import React from "react";

function NoteItemContent({ title, createdAt, body }) {
    // mengubah format createdAt menjadi dadte
    createdAt = new Date(createdAt);
    const dateFormat = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const date = createdAt.toLocaleDateString('id-ID', dateFormat)

    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{date}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteItemContent;