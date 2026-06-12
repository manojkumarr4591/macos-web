import { useState } from "react";
import "./App.scss";
import Dock from "./component/Dock";
import Navbar from "./component/Navbar";
import Github from "./component/windows/Github";
import Note from "./component/windows/Note";
import Resume from "./component/windows/Resume";
import { Spotify } from "./component/windows/Spotify";
import Cli from "./component/windows/Cli";

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <main>
      <Navbar />
      <Dock setWindowsState={setWindowsState} />
      {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState}/>}
      {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState}/>}
      {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState}/>}
      {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState}/>}
      {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState}/>}
    </main>
  );
}

export default App;
