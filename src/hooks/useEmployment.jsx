import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useEmployment() {
  const [employment, setEmployment] = useState([
    {
      id: 1,
      companyName: "AWS",
      title: "Cloud Support Engineer II",
      responsibility:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima, perferendis fugiat assumenda fugit molestias repellendus. Molestias aperiam sunt numquam ducimus voluptates sit vero aliquid explicabo error velit, quaerat necessitatibus!",
      startDate: "2020-07-01",
      endDate: "2024-11-24",
    },
    {
      id: 2,
      companyName: "Tesco",
      title: "Customer Assistant",
      responsibility:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima, perferendis fugiat assumenda fugit molestias repellendus. Molestias aperiam sunt numquam ducimus voluptates sit vero aliquid explicabo error velit, quaerat necessitatibus!",
      startDate: "2016-09-06",
      endDate: "2020-03-25",
    },
  ]);

  function handleChangeEmployment(id, e) {
    const { name, value } = e.target;
    setEmployment((prevEmployment) =>
      prevEmployment.map((employment) =>
        employment.id === id ? { ...employment, [name]: value } : employment
      )
    );
  }

  function handleAddEmployment() {
    setEmployment([
      ...employment,
      {
        id: uuidv4(),
        companyName: "",
        title: "",
        responsibility: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function handleDeleteEmployment(id) {
    setEmployment((prevEmployment) =>
      prevEmployment.filter((employment) => employment.id !== id)
    );
  }

  return {
    employment,
    handleChangeEmployment,
    handleAddEmployment,
    handleDeleteEmployment,
  };
}
