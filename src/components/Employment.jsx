import "../styles/Employment.css";

function Employment({
  employment,
  handleChangeEmployment, // Updated prop name
  handleAddEmployment, // Updated prop name
  handleDeleteEmployment, // Updated prop name
}) {
  return (
    <>
      <h2 className="fade-right">Employment History: </h2>
      {employment.map((job, index) => (
        <div key={job.id} className="employment fade-right">
          <h2>Employment {index + 1}</h2>
          <input
            name="companyName"
            value={job.companyName}
            placeholder="Company Name"
            onChange={(e) => handleChangeEmployment(job.id, e)}
          />
          <input
            name="title"
            value={job.title}
            placeholder="Title"
            onChange={(e) => handleChangeEmployment(job.id, e)}
          />
          <textarea
            name="responsibility"
            value={job.responsibility}
            placeholder="Responsibility"
            onChange={(e) => handleChangeEmployment(job.id, e)}
          />
          <input
            name="startDate"
            type="date"
            value={job.startDate}
            placeholder="Employment start date"
            onChange={(e) => handleChangeEmployment(job.id, e)}
          />
          <input
            name="endDate"
            type="date"
            value={job.endDate}
            placeholder="Employment end date"
            onChange={(e) => handleChangeEmployment(job.id, e)}
          />
          <button
            className="del-btn"
            onClick={() => handleDeleteEmployment(job.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <button className="add-btn fade-right" onClick={handleAddEmployment}>
        Add more
      </button>
    </>
  );
}

export default Employment;
