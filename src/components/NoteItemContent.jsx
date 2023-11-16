import React from "react";

function NoteItemContent({ title, body }) {
    // awal
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const today = new Date();

    const date = today.toLocaleDateString('id-ID', options);
    // akhir

    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{date}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteItemContent;