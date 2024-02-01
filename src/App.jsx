import React from "react";
import "./App.css";
import { Formik, useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "*Required";
  } else if (values.firstname.length > 8) {
    errors.firstname = "* Must be 8 characters or less";
  }
  if (!values.lastname) {
    errors.lastname = "*Required";
  } else if (values.lastname.length > 8) {
    errors.lastname = "* Must be 8 characters or less";
  }
  if (!values.email) {
    errors.email = "*Required";
  } else if (
    !/^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/.test(
      values.email
    )
  ) {
    errors.email = "*Invalid Email Address";
  }
  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length > 8) {
    errors.password = "* Maximum 8 characters ";
  } else if (values.password.length < 4) {
    errors.password = "* Minimum 4 characters ";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "*Required";
  } else if (values.password !== values.confirmpassword) {
    errors.confirmpassword = "* Password must match ";
  }
  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate,
    onSubmit:(values,{resetForm})=>{
      alert(`Hello , ${values.firstname} you successfully signed up!`)
      resetForm({values:''})
    }
  });
  console.log(formik.values);
  return (
    <>
      <div className="main">
        <div className="Sign-up">
          <h2>Sign Up here</h2>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="FirstName. . ."
              name="firstname"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <span>{formik.errors.firstname}</span>
            ) : null}
            <input
              type="text"
              placeholder="lastName. . ."
              name="lastname"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <span>{formik.errors.lastname}</span>
            ) : null}
            <input
              type="text"
              placeholder="email. . ."
              name="email"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span>{formik.errors.email}</span>
            ) : null}
            <input
              type="password"
              placeholder="password. . ."
              name="password"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <span>{formik.errors.password}</span>
            ) : null}
            <input
              type="password"
              placeholder="confirm password. . ."
              name="confirmpassword"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpassword}
            />
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
              <span>{formik.errors.confirmpassword}</span>
            ) : null}
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
