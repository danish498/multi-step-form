import React from "react";

const ContactDetails = ({ formData, setFormData }) => {
  return (
    <>
      <div className="contact-datails-container">
        <input
          type="text"
          name="country_code"
          title="Error Message"
          pattern="[1-9]{1}[0-9]{9}"
          placeholder="Enter you phone number"
          value={formData.phoneNumber}
          onChange={(event) =>
            setFormData({ ...formData, phoneNumber: event.target.value })
          }
        />
        <input
          type="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={(event) =>
            setFormData({ ...formData, address: event.target.value })
          }
        />
      </div>
    </>
  );
};

export default ContactDetails;
