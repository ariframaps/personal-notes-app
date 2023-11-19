import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchive, archive, searchValue }) {
    const searchedNotes = notes.filter(note => note.title.includes(searchValue)) // memfilter catatan berdasarkan pencarian
    let filterNotes;

    // memfilter catatan sesuai dengan bagiannya. bagian "catatan" jika false
    // dan bagian "arsip" jika true
    if (archive) {
        filterNotes = searchedNotes.filter(note => note.archived === true)
    } else {
        filterNotes = searchedNotes.filter(note => note.archived === false)
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