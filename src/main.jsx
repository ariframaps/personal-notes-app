import React from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./components/NoteApp"
import NoteAppHeader from "./components/NoteAppHeader";
import NoteAppBody from "./components/NoteAppBody";

const root = createRoot(document.getElementById("root"));
root.render(
    // <div className="note-app">
    //     <NoteAppHeader />
    //     <NoteAppBody />
    // </div>
    <NoteApp />
)