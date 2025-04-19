import "../styles/Education.css";

function Education({
  education,
  handleEducationChange, // Updated prop name
  handleAddEducation, // Updated prop name
  handleDeleteEducation, // Updated prop name
}) {
  return (
    <>
      <h2 className="fade-right">Education: </h2>
      {education.map((item, index) => (
        <div className="education fade-right" key={item.id}>
          <h2>School {index + 1}</h2>
          <input
            type="text"
            name="schoolName"
            value={item.schoolName}
            placeholder="School"
            onChange={(e) => handleEducationChange(item.id, e)}
          />
          <input
            type="text"
            name="courseTitle"
            value={item.courseTitle}
            placeholder="Course Title"
            onChange={(e) => handleEducationChange(item.id, e)}
          />
          <input
            type="date"
            name="startDate"
            value={item.startDate}
            placeholder="Start Date"
            onChange={(e) => handleEducationChange(item.id, e)}
          />
          <input
            type="date"
            name="endDate"
            value={item.endDate}
            placeholder="End Date"
            onChange={(e) => handleEducationChange(item.id, e)}
          />
          <button
            className="del-btn"
            onClick={() => handleDeleteEducation(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <button className="add-btn fade-right" onClick={handleAddEducation}>
        Add more
      </button>
    </>
  );
}

export default Education;
