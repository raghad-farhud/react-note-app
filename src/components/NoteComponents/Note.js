import React from "react";
// import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function Note({ id, text, noteDate, deleteHandler }) {
    return (
        <div className="note">
            <div className="note__body">{ text }</div>
            <div className="note__footer">
                <span className="note__date">{ noteDate }</span>
                <svg onClick={() => deleteHandler(id)} aria-hidden="true" className="note__delete MuiSvgIcon-root MuiSvgIcon-fontSizeMedium note__delete css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" data-testid="DeleteForeverOutlinedIcon"><path d="M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path></svg>
            </div>
        </div>
    );
}
export default Note;
