import React from "react";
import { createRoot } from "react-dom/client";
import NoteAppHeader from "./components/NoteAppHeader"

const root = createRoot(document.getElementById("root"));
root.render(<NoteAppHeader />)