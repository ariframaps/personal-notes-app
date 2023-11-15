import React from "react";

class NoteAppHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    }

    onSearchChangeHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value
            }
        })
    }

    render() {
        return (
            <div className="note-app__header">
                <h1>Notes</h1>
                <input type="text" className="note-search" onChange={this.onSearchChangeHandler} value={this.state.search} placeholder="Cari catatan..." />
            </div>
        );
    }
}

export default NoteAppHeader;