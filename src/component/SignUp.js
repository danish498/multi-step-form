import React from "react";

const SignUp = ({ formData, setFormData }) => {
  // console.log("from sign up", formData);

  return (
    <>
      <div className="sign-up-container">
        <input
          type="text"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={(event) =>
            setFormData({ ...formData, firstName: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={(event) =>
            setFormData({ ...formData, lastName: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Email..."
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>
    </>
  );
};

export default SignUp;
