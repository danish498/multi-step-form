import React from "react";

const PersonalInfo = ({ formData, setFormData }) => {
  console.log("from personal info", formData);

  return (
    <>
      <div className="person-info-container">
        <label for="gender"> Select you gender</label>
        <select name="gender">
          <option value="none" selected>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input
          type="text"
          placeholder="Enter your occuparion"
          value={formData.occupation}
          onChange={(event) =>
            setFormData({ ...formData, occupation: event.target.value })
          }
        />

        <label for="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          placeholder="birthday"
          value={formData.date}
          onChange={(event) =>
            setFormData({ ...formData, date: event.target.value })
          }
        />
      </div>
    </>
  );
};

export default PersonalInfo;
