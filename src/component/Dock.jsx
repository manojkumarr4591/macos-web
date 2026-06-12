import React from "react";
import "./dock.scss";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Dock = ({ setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {setWindowsState((state) => ({...state,github: true,}));}}
        className="icon github"><img src="/dock-icon/github.svg" alt="" />{" "}
        </div>
      <div
        onClick={() => setWindowsState((state) => ({ ...state, note: true }))}
        className="icon note"
      >
        <img src="/dock-icon/note.svg" alt="" />
      </div>
      <div
        onClick={() => setWindowsState((state) => ({ ...state, resume: true }))}
        className="icon pdf"
      >
        <img src="/dock-icon/pdf.svg" alt="" />
      </div>
      <div
        onClick={() =>
        {
          window.open("https://calendar.google.com","_blank");
        }
        }
        className="icon  calender"
      >
        <img src="/dock-icon/calendar.svg" alt="" />
      </div>
      <div
        onClick={() =>
          setWindowsState((state) => ({ ...state, spotify: true }))
        }
        className="icon spotify"
      >
        <img src="/dock-icon/spotify.svg" alt="" />
      </div>
      <div
        onClick={()=>{
          window.open("mailto:manojji987313@gmail.com","_blank");
        }}

        className="icon mail"
      >
        <img src="/dock-icon/mail.svg" alt="" />
      </div>
      <div
        onClick={()=>{
          window.open("https://www.linkedin.com/in/manoj-kumar-3380b3372/","_blank");
        }}
        
        className="icon link"
      >
        <img src="/dock-icon/link.svg" alt="" />
      </div>
      <div
        onClick={() => setWindowsState((state) => ({ ...state, cli: true }))}
        className="icon cli"
      >
        <img src="/dock-icon/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
