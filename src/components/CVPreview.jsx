import "../styles/CVPreview.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

function CVPreview({ personalInfo, education, employment, skills }) {
  const cvRef = useRef(null);

  const downloadPDF = async () => {
    if (!cvRef.current) return;

    const canvas = await html2canvas(cvRef.current, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${personalInfo.fullName || "Resume"}.pdf`);
  };

  return (
    <>
      <div ref={cvRef} className="cv-content">
        <div className="personal-preview">
          <h2 className="full-name">{personalInfo.fullName || "Your Name"}</h2>
          <div className="contact">
            <div className="email">
              <FaEnvelope />
              <span>{personalInfo.email || "Your Email"}</span>
            </div>
            <span className="separator">|</span>
            <div className="phone">
              <FaPhone />
              <span>{personalInfo.phone || "Your Phone"}</span>
            </div>
          </div>
        </div>
        <div className="education-preview">
          <h3>Education</h3>
          <hr />
          {education.map((item) => (
            <div key={item.id} className="education-cv">
              <h4>{item.schoolName || "School Name"}</h4>
              <p>{item.courseTitle || "Course Title"}</p>
              <p>
                {item.startDate || "Start Date"} - {item.endDate || "End Date"}
              </p>
            </div>
          ))}
        </div>
        <div className="employment-preview">
          <h3>Employment</h3>
          <hr />
          {employment.map((job) => (
            <div key={job.id} className="employment-cv">
              <h4>{job.companyName || "Company Name"}</h4>
              <p>{job.title || "Job Title"}</p>
              <p>{job.responsibility || "Responsibilities"}</p>
              <p>
                {job.startDate || "Start Date"} - {job.endDate || "End Date"}
              </p>
            </div>
          ))}
        </div>
        <div className="skills-preview">
          <h3>Skills</h3>
          <hr />

          <ul>
            {skills.map((skill) => (
              <li key={skill.id}>
                {skill.name} ({skill.category})
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={downloadPDF} className="download-btn">
        Download as PDF
      </button>
    </>
  );
}

export default CVPreview;
