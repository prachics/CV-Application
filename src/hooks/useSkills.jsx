import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useSkills() {
  const [skills, setSkills] = useState([
    { id: uuidv4(), name: "JavaScript", category: "Technical" },
    { id: uuidv4(), name: "AWS", category: "Cloud" },
  ]);

  function handleAddSkill() {
    setSkills([...skills, { id: uuidv4(), name: "", category: "" }]);
  }

  function handleDeleteSkill(id) {
    setSkills(skills.filter((skill) => skill.id !== id));
  }

  function handleSkillChange(id, e) {
    const { name, value } = e.target;
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [name]: value } : skill
      )
    );
  }

  return { skills, handleAddSkill, handleDeleteSkill, handleSkillChange };
}
