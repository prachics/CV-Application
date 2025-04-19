import { useState } from "react";

export function usePersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setPersonalInfo((prevPersonal) => ({ ...prevPersonal, [name]: value }));

    let newErrors = { ...errors };

    if (name === "fullName") {
      if (!value.trim()) {
        newErrors.fullName = "Full Name is required";
      } else {
        delete newErrors.fullName;
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Invalid email format";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "phone") {
      if (!value.trim()) {
        newErrors.phone = "Phone Number is required";
      } else if (!/^\+?\d{5,15}$/.test(value)) {
        newErrors.phone = "Phone number is invalid";
      } else {
        delete newErrors.phone;
      }
    }

    setErrors(newErrors);
  }

  return { personalInfo, errors, handlePersonalChange };
}
