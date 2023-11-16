import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charLimit: 50,
            noteTitle: '',
            noteBody: ''
        }

        this.onNoteTitleChangeHandler = this.onNoteTitleChangeHandler.bind(this);
        this.onNoteBodyChangeHandler = this.onNoteBodyChangeHandler.bind(this);
    }

    onNoteTitleChangeHandler(event) {
        this.setState(() => {
            if (event.target.value.length > 50) {
                return {
                    noteTitle: this.state.noteTitle
                }
            } else {
                return {
                    noteTitle: event.target.value
                }
            }

        })
    }

    onNoteBodyChangeHandler(event) {
        this.setState(() => {
            return {
                noteBody: event.target.value
            }
        })
    }

    render() {
        const charLimit = 50 - (this.state.noteTitle.length);

        return (
            <form className="note-input">
                <h2>Buat</h2>
                <p className="note-input__title__char-limit">Sisa karakter: <span>{charLimit}</span></p>
                <input type="text" className="note-input__title" onChange={this.onNoteTitleChangeHandler} value={this.state.noteTitle} />
                <textarea className="note-input__body" onChange={this.onNoteBodyChangeHandler} value={this.state.noteBody}></textarea>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput;