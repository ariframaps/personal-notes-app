import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            titleLimit: 50
        }

        this.onNoteTitleChangeHandler = this.onNoteTitleChangeHandler.bind(this);
        this.onNoteBodyChangeHandler = this.onNoteBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNoteTitleChangeHandler(event) {
        this.setState(() => {
            if (event.target.value.length > 50) {
                return {
                    title: this.state.title
                }
            } else {
                return {
                    title: event.target.value,
                    titleLimit: 50 - event.target.value.length
                }
            }

        })
    }

    onNoteBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title: '',
                body: ''
            }
        });
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h2>Buat</h2>
                <p className="note-input__title__char-limit">Sisa karakter: <span>{this.state.titleLimit}</span></p>
                <input type="text" className="note-input__title" onChange={this.onNoteTitleChangeHandler} value={this.state.title} placeholder="Ini adalah judul" />
                <textarea className="note-input__body" onChange={this.onNoteBodyChangeHandler} value={this.state.body} placeholder="Tuliskan catatanmu disini..."></textarea>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput;