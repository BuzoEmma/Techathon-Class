import React, { useEffect, useState } from "react";

const FormValidation = () => {
  const initialValue = {
    name: "",
    email: "",
    password: "",
    gender: "",
    checkbox: "",
  };

  const [formValues, setFormValues] = useState(initialValue);

  const [errorForm, setErrorForm] = useState({});
  const [isTrue, setIstrue] = useState(false);

  console.log(formValues);

const handleEvents = (e) => {
  const { name, value, type, checked } = e.target;

  // Clear the error for the current field
  setErrorForm((prevErrors) => ({ ...prevErrors, [name]: "" }));

  const checkValue = type === "checkbox" ? checked : value;
  setFormValues({ ...formValues, [name]: checkValue });
};



  console.log(errorForm);

  const { name, email, password, gender, checkbox } = formValues;

  const handdleForm = (e) => {
    setErrorForm(formValidation(formValues));
    setIstrue(true);
    e.preventDefault();

    setFormValues({
      name: "",
      email: "",
      password: "",
      gender: "",
      checkbox: "",
    });

    // Reset isTrue to false
    setIstrue(false);
  };


  const formValidation = (value) => {
    const validateError = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!value.name) {
      validateError.name = "Name is required";
    }
    if (!value.email) {
      validateError.email = "Email is required";
    } else if (!regex.test(value.email)) {
      validateError.email = "Invalid email";
    }
    if (!value.password) {
      validateError.password = "Password is required";
    } else if (value.password.length < 5) {
      validateError.password = "Password must be at least 5 characters";
    } else if (value.password.length > 15) {
      validateError.password = "Password cannot exceed 15 characters";
    }
    if (!value.gender) {
      validateError.gender = "Gender is required";
    }
    if (!value.checkbox) {
      validateError.checkbox = "checkbox is required";
    }

    return validateError;
  };

  useEffect(() => {
    if (Object.keys(errorForm.length === 0 && isTrue)) {
      console.log(formValues);
    }
  }, [errorForm, isTrue, formValues]);

  return (
    <div style={{ margin: "3rem" }}>
      <h1>Formvalidation</h1>

      <form
        onSubmit={handdleForm}
        style={{ border: "1px solid black", width: "35%", padding: "5px" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">name:</label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="input your name"
            value={name}
            onChange={handleEvents}
          />
          <em style={{ color: "red" }}>{errorForm.name}</em>
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="input your email"
            value={email}
            onChange={handleEvents}
          />
          <em style={{ color: "red" }}>{errorForm.email}</em>
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="input your password"
            onChange={handleEvents}
            value={password}
          />
          <em style={{ color: "red" }}>{errorForm.password}</em>
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            onChange={handleEvents}
            value={gender}
          >
            <option value="">select gender</option>
            <option value="male"> male</option>
            <option value="female"> female</option>
          </select>
          <em style={{ color: "red" }}>{errorForm.gender}</em>
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="password">Our terms and condition:</label>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={handleEvents}
            value={checkbox}
          />
          <em style={{ color: "red" }}>{errorForm.checkbox}</em>
        </div>{" "}
        <br />
        <button>Send</button>
        <br />
      </form>
    </div>
  );
};

export default FormValidation;
