import "../styles/Skills.css";

function Skills({
  skills,
  handleAddSkill,
  handleDeleteSkill,
  handleSkillChange,
}) {
  return (
    <div className="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={skill.id} className="skill-item">
          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={skill.name}
            onChange={(e) => handleSkillChange(skill.id, e)}
          />
          <select
            name="category"
            value={skill.category}
            onChange={(e) => handleSkillChange(skill.id, e)}
          >
            <option value="">Select Category</option>
            <option value="Technical">Technical</option>
            <option value="Cloud">Cloud</option>
            <option value="Soft Skills">Soft Skills</option>
          </select>
          <button
            className="del-btn"
            onClick={() => handleDeleteSkill(skill.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <button className="add-btn" onClick={handleAddSkill}>
        Add Skill
      </button>
    </div>
  );
}

export default Skills;
