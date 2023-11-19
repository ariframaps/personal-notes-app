import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getData } from "../utils/data";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            notes: getData()
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        const dateFormat = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const dateToday = new Date();

        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes, {
                        id: +new Date(),
                        title,
                        body,
                        date: dateToday.toLocaleDateString('id-ID', dateFormat),
                        isArchived: false
                    }
                ]
            }
        })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }

    onArchiveHandler(id) {
        const archivedNotes = this.state.notes.find(note => note.id === id);
        if (archivedNotes.isArchived === true) {
            archivedNotes.isArchived = false;
        } else {
            archivedNotes.isArchived = true;
        }
        this.setState({ notes: this.state.notes })
    }

    searchHandler({ search }) {
        this.setState({ searchValue: search })
    }

    render() {
        return (
            <div className="note-app">
                <NoteAppHeader searchHandler={this.searchHandler} />
                <NoteAppBody notes={this.state.notes} onAddNoteHandler={this.onAddNoteHandler} onDeleteHandler={this.onDeleteHandler} onArchiveHandler={this.onArchiveHandler} searchValue={this.state.searchValue} />
            </div>
        )
    }
}

export default NoteApp;