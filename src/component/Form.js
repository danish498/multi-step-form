import React, { useState } from "react";
import validator from "validator";

import SignUp from "./SignUp";
import PersonalInfo from "./PersonalInfo";
import ContactDetails from "./ContactDetails";
import { validateEmail } from "../utils";

function Form() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    date: "",
    phoneNumber: "",
    address: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Contact Details"];

  const signUpValidation = () => {
    console.log(
      "===validateEmail(formData.email)==",
      validateEmail(formData.email)
    );
    if (!formData.firstName) {
      return alert("Please enter first name");
    } else if (!formData.lastName) {
      return alert("Please enter last name");
    } else if (!validateEmail(formData.email)) {
      return alert("Please enter valid email address");
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  ///////////////////////////

  const personalInfoValidation = () => {
    if (!formData.occupation) {
      return alert("Please enter the Occupation ");
      // } else if(formData.date){
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  ///////

  const contactDetailsValidation = () => {
    console.log(
      "====check validation===",
      validator.isMobilePhone(formData.phoneNumber)
    );
    if (!validator.isMobilePhone(formData.phoneNumber)) {
      return alert("Please enter the correct 10 digits number");
    } else if (!formData.address) {
      return alert("Please Enter the address ");
    } else {
      alert(
        `Your form details is as follow:  your firstname:${formData.firstName} lastname:  ${formData.lastName}  email:  ${formData.email} DOB: ${formData.date} Occupations: ${formData.occupation} Phone Number: ${formData.phoneNumber} and address: ${formData.address}`
      );
    }
  };

  const onPressNext = () => {
    switch (page) {
      case 0:
        signUpValidation();
        break;
      case 1:
        personalInfoValidation();
        break;
      case 2:
        contactDetailsValidation();
        break;
    }
  };

  ///////////////////////////console json data /////////////////////////////////////////////

  const myJSON = {
    step1: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    },
    step2: {
      occupation: formData.occupation,
      Birthday: formData.date,
    },
    step3: {
      phoneNumber: formData.phoneNumber,
      address: formData.address,
    },
  };

  console.log(myJSON);

  const myJsonObject = JSON.stringify(myJSON);
  console.log(myJsonObject);

  // const myJSON = JSON.stringify(formData);
  // console.log(myJSON);
  // formData.forEach((element) => {
  //   console.log("for json data", console.log(element));
  // });

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUp formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <ContactDetails formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button onClick={onPressNext}>
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
