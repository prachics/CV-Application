import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useEducation() {
  const [education, setEducation] = useState([
    {
      id: 1,
      schoolName: "Technological University Dublin",
      courseTitle: "Computer Science Infrastructure",
      startDate: "2016-09-16",
      endDate: "2020-05-01",
    },
  ]);

  function handleEducationChange(id, e) {
    const { name, value } = e.target;
    setEducation((prevEducation) =>
      prevEducation.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  }

  function handleAddEducation() {
    setEducation([
      ...education,
      {
        id: uuidv4(),
        schoolName: "",
        courseTitle: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function handleDeleteEducation(id) {
    setEducation((prevEducation) =>
      prevEducation.filter((item) => item.id !== id)
    );
  }

  return {
    education,
    handleEducationChange,
    handleAddEducation,
    handleDeleteEducation,
  };
}
