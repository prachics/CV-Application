import "./reset.css";
import "./App.css";
import { useState } from "react";
import { usePersonalInfo } from "./hooks/usePersonalInfo";
import { useEducation } from "./hooks/useEducation";
import { useEmployment } from "./hooks/useEmployment";
import { useSkills } from "./hooks/useSkills"; // Import useSkills hook
import Personal from "./components/Personal";
import Education from "./components/Education";
import Employment from "./components/Employment";
import Skills from "./components/Skills"; // Import Skills component
import CVPreview from "./components/CVPreview";

function App() {
  const [displayInput, setDisplayInput] = useState("personal");

  const { personalInfo, errors, handlePersonalChange } = usePersonalInfo();
  const {
    education,
    handleEducationChange,
    handleAddEducation,
    handleDeleteEducation,
  } = useEducation();
  const {
    employment,
    handleChangeEmployment,
    handleAddEmployment,
    handleDeleteEmployment,
  } = useEmployment();
  const { skills, handleAddSkill, handleDeleteSkill, handleSkillChange } =
    useSkills(); // Use skills hook

  return (
    <div className="page">
      <div className="navigation-btns">
        <button
          className={displayInput === "personal" ? "active" : ""}
          onClick={() => setDisplayInput("personal")}
        >
          Personal Info
        </button>
        <button
          className={displayInput === "education" ? "active" : ""}
          onClick={() => setDisplayInput("education")}
        >
          Education
        </button>
        <button
          className={displayInput === "employment" ? "active" : ""}
          onClick={() => setDisplayInput("employment")}
        >
          Work
        </button>
        <button
          className={displayInput === "skills" ? "active" : ""}
          onClick={() => setDisplayInput("skills")}
        >
          Skills
        </button>
      </div>

      <div className="input-area">
        {displayInput === "personal" && (
          <Personal
            personalInfo={personalInfo}
            handlePersonalChange={handlePersonalChange}
            errors={errors}
          />
        )}
        {displayInput === "education" && (
          <Education
            education={education}
            handleEducationChange={handleEducationChange}
            handleAddEducation={handleAddEducation}
            handleDeleteEducation={handleDeleteEducation}
          />
        )}
        {displayInput === "employment" && (
          <Employment
            employment={employment}
            handleChangeEmployment={handleChangeEmployment}
            handleAddEmployment={handleAddEmployment}
            handleDeleteEmployment={handleDeleteEmployment}
          />
        )}
        {displayInput === "skills" && (
          <Skills
            skills={skills}
            handleAddSkill={handleAddSkill}
            handleDeleteSkill={handleDeleteSkill}
            handleSkillChange={handleSkillChange}
          />
        )}
      </div>

      <div className="preview fade-in">
        <CVPreview
          personalInfo={personalInfo}
          education={education}
          employment={employment}
          skills={skills} // Pass skills to CVPreview
        />
      </div>
    </div>
  );
}

export default App;
