import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, date, body, id, onDelete, onArchive, archive }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} date={date} body={body} />
            <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} archive={archive} />
        </div>
    )
}

export default NoteItem;