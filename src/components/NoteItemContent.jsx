import React from "react";

function NoteItemContent({ title, body }) {
    // awal
    // const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    // const today = new Date();

    // const date = today.toLocaleDateString('id-ID', options);
    // akhir

    return (
        <div className="note-item__content">
            <h3 className="note-item__title">Babel</h3>
            <p className="note-item__date">Kamis, 14 April 2022</p>
            <p className="note-item__body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, ipsum voluptas?
                Dolores, saepe excepturi fugiat, reprehenderit soluta, ipsum nobis magnam corrupti vel exercitationem
                cupiditate? Molestiae eos obcaecati, harum ad a ut, repudiandae sequi quam, cupiditate officiis rerum
                dolores nemo distinctio suscipit maxime impedit totam. In maxime cupiditate consequuntur illum placeat.</p>
        </div>
    )
}

export default NoteItemContent;