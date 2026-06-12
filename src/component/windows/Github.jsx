import React from "react";
import githubData from "../../assets/github.json";
import MacWindow from "./MacWindow";
import "./Github.scss";

const Gitcard = ({
  data = {
    id: "",
    image: "",
    title: "",
    description: "",
    tags: [],
    repolink: "",
    demolink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />

      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag) => (
          <p key={tag} className="tag">
            {tag}
          </p>
        ))}
      </div>
      <div className="urls">
        <a href={data.repolink}>Repository</a>
        {data.demolink && <a href={data.demolink}>Demo</a>}
      </div>
    </div>
  );
};
const Github = ({windowName, setWindowsState}) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cards">
        {githubData.map((project) => {
          return <Gitcard key={project.id} data={project} />;
        })}
      </div>
    </MacWindow>
  );
};
export default Github;
