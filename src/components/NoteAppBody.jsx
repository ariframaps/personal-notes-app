import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import { getData } from "../utils/index";

function NoteAppBody({ notes, onAddNoteHandler, onDeleteHandler, onArchiveHandler, searchValue }) {
    console.log(searchValue);

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

// class NoteAppBody extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             notes: getData()
//         }

//         this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
//         this.onDeleteHandler = this.onDeleteHandler.bind(this);
//         this.onArchiveHandler = this.onArchiveHandler.bind(this);
//     }

//     onAddNoteHandler({ title, body }) {
//         const dateFormat = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
//         const dateToday = new Date();

//         this.setState((prevState) => {
//             return {
//                 notes: [
//                     ...prevState.notes, {
//                         id: +new Date(),
//                         title,
//                         body,
//                         date: dateToday.toLocaleDateString('id-ID', dateFormat),
//                         isArchived: false
//                     }
//                 ]
//             }
//         })
//     }

//     onDeleteHandler(id) {
//         const notes = this.state.notes.filter(note => note.id !== id)
//         this.setState({ notes })
//     }

//     onArchiveHandler(id) {
//         const archivedNotes = this.state.notes.find(note => note.id === id);
//         if (archivedNotes.isArchived === true) {
//             archivedNotes.isArchived = false;
//         } else {
//             archivedNotes.isArchived = true;
//         }
//         this.setState({ notes: this.state.notes })
//     }

//     render() {
//         console.log(this.state.notes);
//         console.log("ini search value di body " + this.props.searchValue);
//         return (
//             <div className="note-app__body">
//                 <NoteInput addNote={this.onAddNoteHandler} />
//                 <h2>Catatan Aktif</h2>
//                 <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archive={false} searchValue={this.props.searchValue} />
//                 <h2>Arsip</h2>
//                 <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archive={true} searchValue={this.props.searchValue} />
//             </div>
//         )
//     }
// }

export default NoteAppBody;