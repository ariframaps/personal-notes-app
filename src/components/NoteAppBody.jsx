import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteAppBody({ notes, onAddNoteHandler, onDeleteHandler, onArchiveHandler, searchValue }) {
    return (
        <div className="note-app__body">
            <NoteInput addNote={onAddNoteHandler} />
            <h2>Catatan Aktif</h2>
            <NotesList notes={notes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} archive={false} searchValue={searchValue} />
            <h2>Arsip</h2>
            <NotesList notes={notes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} archive={true} searchValue={searchValue} />
        </div>
    )
}

export default NoteAppBody;