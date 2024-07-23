import React, { useState, useContext, useEffect } from "react";
import Nav2 from '../components/Nav2';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Button from "../components/Button";
import { Input } from "@material-tailwind/react";
import { AuthContext } from "../components/AppContext/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { auth, onAuthStateChanged } from "../components/firebase/firebase";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { registerWithEmailAndPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/signin-home");
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  let initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("*Name is required")
      .min(4, "*Must be at least 4 characters long")
      .matches(/^[a-zA-Z]+$/, "*Name can only contain letters"),
    email: Yup.string().email("*Invalid email address").required("*Email is required"),
    password: Yup.string()
      .required("*Password is required")
      .min(6, "*Must be at least 6 characters long")
      .matches(/^[a-zA-Z]+$/, "*Password can only contain letters"),
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = formik.values;
    if (formik.isValid === true) {
      registerWithEmailAndPassword(name, email, password);
      setLoading(true);
    } else {
      setLoading(false);
      alert("Check your input fields");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <main>
      <section className="pb-5">
        <Nav2 />
      </section>
      <section className="pt-10 w-full min-h-screen">
        {loading ? (
          <div className="grid grid-cols-1 justify-items-center items-center h-screen">
            <ClipLoader color="#367fd6" size={150} speedMultiplier={0.5} />
          </div>
        ) : (
          <section className="mt-20 mb-20 padding max-container flex flex-wrap gap-9 bg-primary bg-hero bg-cover">
            <div className="flex justify-center items-center h-screen w-full">
              <Card className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-20 bg-white">
                <h3 className="font-palanquin text-[35px] leading-normal flex justify-center font-bold">
                  Sign<span className="text-purple-900">&nbsp;Up</span>
                </h3>
                <CardBody className="flex flex-col gap-4 pt-10 pb-3">
                  <form onSubmit={handleRegister}>
                    <div className="mb-2">
                      <Input
                        name="name"
                        type="text"
                        label="Name"
                        size="lg"
                        {...formik.getFieldProps("name")}
                      />
                      {formik.touched.name && formik.errors.name && (
                        <div className="error-message">
                          {formik.errors.name}
                        </div>
                      )}
                    </div>
                    <div className="mt-5 mb-5">
                      <Input
                        name="email"
                        type="email"
                        label="Email"
                        size="lg"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="error-message">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="mt-5 mb-5">
                      <Input
                        name="password"
                        type="password"
                        label="Password"
                        size="lg"
                        {...formik.getFieldProps("password")}
                      />
                      {formik.touched.password && formik.errors.password && (
                        <div className="error-message">
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center">
                    <Button label='Sign up' type="submit" className="flex justify-center"/>
                    </div>
                  </form>
                </CardBody>
                <CardFooter className="pt-0">
                  <div className="mt-6 flex font-roboto text-base justify-center">
                    Already have an account?
                    <Link to="/sign-in">
                      <Typography
                        variant="small"
                        color="blue"
                        className="ml-1 font-bold font-roboto text-base text-blue-500 text-center"
                      >
                        Login
                      </Typography>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </section>
        )}
      </section>
    </main>
  );
};

export default SignUp;
