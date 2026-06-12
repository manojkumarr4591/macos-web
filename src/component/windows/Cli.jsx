import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./Cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "Brief introduction about me",
      usage: "about",
      fn: () => "Hi! I'm Manojkumar, a passionate Frontend Developer building awesome web experiences.",
    },
    skills: {
      description: "List my technical skills",
      usage: "skills",
      fn: () => "My skills include: JavaScript, React, Node.js, HTML, CSS, and Git.",
    },
    experience: {
      description: "View my work experience",
      usage: "experience",
      fn: () => "1. Frontend Engineer @ XYZ Company (2021-Present)\n2. Web Developer Intern @ ABC Corp (2020-2021)",
    },
    contact: {
      description: "Get my contact information",
      usage: "contact",
      fn: () => "Email: manoj@example.com\nGitHub: github.com/manojkumar\nLinkedIn: linkedin.com/in/manojkumar",
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={
            "Welcome to Manojkumar's Portfolio Terminal! 👋\n\n" +
            "Available commands:\n" +
            "  about      - Brief introduction about me\n" +
            "  skills     - List my technical skills\n" +
            "  experience - View my work experience\n" +
            "  contact    - Get my contact information\n" +
            "  echo       - Echo a passed string\n" +
            "  help       - Show all available commands\n" +
            "  clear      - Clear the terminal screen\n\n" +
            "Try typing 'about' and hit Enter!"
          }
          promptLabel={"manojkumar:~$"}
          promptLabelStyle={{ color: "#02d702", fontWeight: "bold" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
