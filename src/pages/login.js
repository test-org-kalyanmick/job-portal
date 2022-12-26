import React, { useEffect } from "react";
import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Facebook as FacebookIcon } from "../icons/facebook";
import { Google as GoogleIcon } from "../icons/google";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Login = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      email: "demo@devias.io",
      password: "",
      phoneNumber: 9876543210,
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .max(10)
        .required("Phone Number is required"),
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      console.log("Submitting...", formik.values.password);
      confirmationResult
        .confirm(formik.values.password)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log("Logged in user", user);
          Router.push("/").catch(console.error);
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log("Error Logging in with code", error)
        });
    },
  });

  const [isOneTimePasswordRequestSent, setIsOneTimePasswordRequestSent] = React.useState(false);

  const sendOneTimePassword = async () => {
    console.log("Form Values", formik.values.phoneNumber);
    console.log("formik.errors", formik.errors.phoneNumber);
    console.log("Formik", formik);
    await signInWithPhone("+919663699611", window.recaptchaVerifier);
    if (!formik.errors.phoneNumber) {
      setIsOneTimePasswordRequestSent(true);
    }
  };

  const auth = getAuth();
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Recaptcha stuff loading");
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            console.log("Recaptcha stuff solved", response);
            onSignInSubmit();
          },
        },
        auth
      );
    }
  }, []);

  const signInWithPhone = (phoneNumber, appVerifier) =>
    signInWithPhoneNumber(auth, phoneNumber, (appVerifier = window.recaptchaVerifier))
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("Successfully signed in with Phone Number!", confirmationResult);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("Error Signing in with Phone No!", error);
      });

  return (
    <>
      <Head>
        <title>Login | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <NextLink href="/" passHref>
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in / Register
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
              fullWidth
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              label="Phone Number"
              margin="normal"
              name="phoneNumber"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="phone"
              value={formik.values.phoneNumber}
              variant="outlined"
            />
            {isOneTimePasswordRequestSent && (
              <TextField
                error={Boolean(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="One Time Password"
                margin="normal"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
                variant="outlined"
              />
            )}
            {isOneTimePasswordRequestSent && (
              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign In Now
                </Button>
              </Box>
            )}

            {!isOneTimePasswordRequestSent && (
              <Box sx={{ py: 2 }}>
                <div id="recaptcha-container" class="justify-center flex"></div>
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={sendOneTimePassword}
                  id="sign-in-button"
                  name="sign-in-button"
                >
                  Send One Time Password
                </Button>
              </Box>
            )}
            {isOneTimePasswordRequestSent && (
              <Typography color="textSecondary" variant="body2">
                Didn&apos;t receive One Time Password?{" "}
                <NextLink href="/#">
                  <Link
                    to="#"
                    variant="subtitle2"
                    underline="hover"
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={sendOneTimePassword}
                  >
                    Resend One Time Password
                  </Link>
                </NextLink>
              </Typography>
            )}
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
