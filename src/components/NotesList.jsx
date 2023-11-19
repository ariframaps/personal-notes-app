import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchive, archive, searchValue }) {
    let filterNotes;

    // memfilter catatan sesuai dengan bagiannya. bagian "catatan" jika false
    // dan bagian "arsip" jika tru
    if (archive) {
        filterNotes = notes
            .filter(note => note.isArchived === true)
    } else {
        filterNotes = notes
            .filter(note => note.isArchived === false)
    }

    // menampilkan pesan jika tidak ada catatan
    if (filterNotes.length == 0) {
        return (
            <div className="notes-list__empty-message">Tidak ada catatan</div>
        );
    }

    return (
        <div className="notes-list">
            {
                filterNotes
                    .filter(note => note.title.includes(searchValue)) // memfilter catatan berdasarkan pencarian
                    .map((note) => (
                        <NoteItem
                            key={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            archive={archive}
                            {...note}
                        />
                    ))
            }
        </div>
    )
}

export default NotesList;