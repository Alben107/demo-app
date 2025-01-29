import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../redux/slices/authSlice";
import { Facebook, Google, LinkedIn, Twitter } from "@mui/icons-material";
import LockGif from "../../../assets/images/gifLock.webp";

interface LoginFormValues {
  email: string;
  password: string;
  keepSignedIn: boolean;
}

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    keepSignedIn: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required*"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must include at least one uppercase letter")
      .matches(/[0-9]/, "Must include at least one number")
      .matches(/[@$!%*?&#]/, "Must include at least one special character")
      .required("Required*"),
  });

  const handleSubmit = (values: LoginFormValues) => {
    dispatch(login());
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="left-container">
          <h1>Sign In</h1>
          <p>
            New user? <a href="#create-account">Create an account</a>
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="login-form">
                <div className="form-group">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Username or email"
                    className="input-field"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-field"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group checkbox-group">
                  <Field
                    type="checkbox"
                    name="keepSignedIn"
                    className="checkbox-field"
                  />
                  <label className="text-label-styles" htmlFor="keepSignedIn">
                    Keep me signed in
                  </label>
                </div>

                <button type="submit" className="login-button">
                  Sign In
                </button>
                <div className="divider">Or Sign In With</div>
                <div className="social-icons">
                  <button className="social-btn">
                    <Google />
                  </button>
                  <button className="social-btn">
                    <Facebook />
                  </button>
                  <button className="social-btn">
                    <LinkedIn />
                  </button>
                  <button className="social-btn">
                    <Twitter />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="login-right">
        <div className="person-graphic">
          <img src={LockGif} alt="Lock Animation" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
