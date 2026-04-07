import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML+CSS", level: "advanced", color: "#2662EA" },
  { skill: "JavaScript", level: "intermediate", color: "#EFD81D" },
  { skill: "Web Design", level: "advanced", color: "#C3DCAF" },
  { skill: "Git and GitHub", level: "intermediate", color: "#E84F33" },
  { skill: "React", level: "advanced", color: "#60DAFB" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="me.jpg"
      alt="Fathima Hanan"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Fathima Hanan</h1>
      <p>
        I am a frontend developer learning HTML, CSS, JavaScript, and React.
        My profile card displays my skills using reusable components.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(({ skill, color, level }) => (
        <Skill
          key={skill}
          skill={skill}
          color={color}
          level={level}
        />
      ))}
    </div>
  );
}

// ✅ Destructuring here
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);