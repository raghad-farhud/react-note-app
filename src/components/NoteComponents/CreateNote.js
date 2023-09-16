import { React } from "react";
function CreateNote({ textHandler, saveHandler, inputText }) {
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;
    return (
        <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
        <textarea
            cols="10"
            rows="5"
            placeholder="Type...."
            maxLength="100"
            value={inputText}
            onChange={textHandler}
        ></textarea>
        <div className="note__footer">
            <span className="label">{ charLeft } left</span>
            <button className="note__save" onClick={saveHandler}>Save</button>
        </div>
        <div className="note__progress">
            <div className="note__progress__bar" style={{ width: `${charLeft}%` }}></div>
        </div>
        </div>
    );
}
export default CreateNote;