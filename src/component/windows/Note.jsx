import React from "react";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import MacWindow from "./MacWindow";
import "./Note.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";




const Note = ({ windowName, setWindowsState}) => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch("/note.txt")
      .then((response) => response.text())
      .then((data) => setMarkdown(data));
  },[]);
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="note-window">
        {markdown ? <SyntaxHighlighter
        language="typescript"
        style={atelierDuneDark}
      >
        {markdown}
      </SyntaxHighlighter> : <p>Loading...</p>}
      </div>
    </MacWindow>
  );
};

export default Note;
