import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData, showFormattedDate } from "../utils/index";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            notes: getInitialData()
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes, {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false
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
        if (archivedNotes.archived === true) {
            archivedNotes.archived = false;
        } else {
            archivedNotes.archived = true;
        }
        this.setState({ notes: this.state.notes })
    }

    searchHandler({ search }) {
        this.setState({ searchValue: search }) // mengambil nilai search dari class "NoteAppHeader" untuk ditaruh di state
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