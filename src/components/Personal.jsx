import "../styles/Personal.css";
function Personal({ personalInfo, handlePersonalChange, errors }) {
  return (
    <div className="personal">
      <h2>Personal Information:</h2>
      <label htmlFor="fullName">Full Name:</label>
      <input
        id="fullName"
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={personalInfo.fullName}
        onChange={handlePersonalChange}
      />
      {errors.fullName && <p className="error">{errors.fullName}</p>}

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={handlePersonalChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="phone">Phone Number:</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={personalInfo.phone}
        onChange={handlePersonalChange}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}
    </div>
  );
}

export default Personal;
