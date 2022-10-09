import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Alert,
    Button,
    Checkbox,
    Chip,
    Divider,
    FormControlLabel,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import APIContext from "../../context/APIContext";


const CreateAccount = () => {
    let  API_URL  = "";
    let navigate = useNavigate();
    let defaultData = { name: "", email: "", password: "", repeatPassword: "" };
    const [values, setValues] = useState(defaultData);
    const [subscribe, setSubscribe] = useState(true);
    const [createAccountPage, setCreateAccountPage] = useState(true);

    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== "/create-account") {
            setCreateAccountPage(false);
        }
    }, []);

    // custom rule will have name 'isPasswordMatch'
    let [isInvalid, setIsInvalid] = useState(false);
    const [submitErrors, setSubmitErrors] = useState(true);
    const [disabled, setDisabled] = useState(false);
    let [passwordMismatch, setPasswordMismatch] = useState(false);
    let [passwordError, setPasswordError] = useState(false);
    let [emailError, setEmailError] = useState(false);
    let [nameError, setNameError] = useState(false);
    let [fieldValidated, setFieldValidated] = useState({
        name: false,
        email: false,
        password: false,
        repeatPassword: false,
    });

    let [emailHelperText, setEmailHelperText] = useState("Enter a Valid Email");
    let [nameHelperText, setNameHelperText] = useState(
        "Enter a unique name(5 characters minimum, 	No special characters)"
    );
    const letterNumber = /^[0-9a-zA-Z]+$/;

    const handleChange = (prop) => (event) => {
        setSubmitErrors(false);
        setIsInvalid(false);
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //Verify detail entered in real time
    let handleVerification = () => {
        const regex =
            /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (values.email.length > 0 && regex.test(values.email) === false) {
            setEmailError(true);
        } else {
            setEmailError(false);
            setFieldValidated({ fieldValidated, email: true });
        }
        if (values.password.length > 0 && values.password.length < 6) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
            setFieldValidated({ ...fieldValidated, password: true });
        }
        if (values.password !== values.repeatPassword) {
            setPasswordMismatch(true);
        } else {
            setPasswordMismatch(false);
            setFieldValidated({ ...fieldValidated, repeatPassword: true });
        }
    };

    //Ceck for null constraints submit form only if its not empty and has no errors
    let handleSubmitData = () => {
        if (
            values.name.length > 0 &&
            values.email.length > 0 &&
            values.password.length > 0 &&
            values.repeatPassword.length > 0 &&
            emailError === false &&
            nameError === false &&
            passwordError === false &&
            passwordMismatch === false
        ) {
            sendData();
        } else {
            setIsInvalid(true);
        }
    };

    useEffect(() => {
        if (
            (values.name.length > 0 &&
                letterNumber.test(values.name) === false) ||
            (values.name.length > 0 && values.name.length < 5)
        ) {
            setNameError(true);
        } else {
            setFieldValidated({ fieldValidated, name: true });
            setNameError(false);
        }
        handleVerification();
    }, [values]);

    let sendData = async () => {
        setDisabled(true);
        // try {
        //     let res = await axios.post(`${API_URL}api/register/`, {
        //         username: values.name,
        //         email: values.email,
        //         password: values.password,
        //     });
        //     if (res.status === 201) {
        //         navigate("/login");
        //     }
        //     if (subscribe === true) {
        //         axios.post(`${API_URL}api/subscribe/`, {
        //             email: values.email,
        //         });
        //     }
        // } catch (error) {
        //     if (error.response) {
        //         setIsInvalid(true);
        //         const errorData = error.response.data;
        //         let { email, username } = errorData;
        //         if (email !== undefined) {
        //             setEmailError(true);
        //             setEmailHelperText("User with this email already exists");
        //         }
        //         if (username !== undefined) {
        //             setNameError(true);
        //             setNameHelperText("User with this name already exists");
        //         }
        //     }
        // }
        setDisabled(false);
    };
    let handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitData();
    };

    return (
        <div
            style={
                createAccountPage
                    ? {
                        display: "flex",
                        position: "relative",
                        top: 0,
                        left: 0,
                        minHeight: "90vh",
                        alignItems: "center",
                        maxWidth: "100%",
                        padding: "1em",
                        justifyContent: "center",
                    }
                    : {
                        display: "flex",
                        position: "relative",
                        top: 0,
                        left: 0,
                        maxHeight: "fit-content",
                        alignItems: "center",
                        //maxWidth: "fit-content",
                        //padding: "1em",
                    }
            }
        >
            <Paper
                component="form"
                sx={
                    createAccountPage
                        ? {
                            paddingTop: "1.5em",
                            backgroundColor: "transparent",
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: "center",
                        }
                        : { maxWidth: "95vw" }
                }
                elevation={0}
                onSubmit={handleSubmit}
            >

                <Typography
                    sx={{
                        fontSize: "20px",
                        fontWeight: "light-bold",
                        textAlign: "center",
                    }}
                >
                    Create a New Account
                </Typography>

                <br />
                {isInvalid === true && (
                    <div style={{ marginBottom: "2em" }}>
                        <Alert severity="error">
                            You have some errors in your form — check them out!
                        </Alert>
                    </div>
                )}

                <TextField
                    error={nameError}
                    label="Enter Name"
                    onChange={handleChange("name")}
                    value={values.name}
                    fullWidth
                    helperText={nameError === true ? nameHelperText : null}
                    required
                />

                <br />
                {values.name.length > 4 && !createAccountPage && (
                    <>
                        <TextField
                            error={emailError}
                            label="Enter Email"
                            onChange={handleChange("email")}
                            value={values.email}
                            helperText={
                                emailError === true ? emailHelperText : null
                            }
                            required
                        />

                        <br />
                        <br />
                    </>
                )}
                {createAccountPage && (
                    <>
                        <TextField
                            error={emailError}
                            label="Enter Email"
                            onChange={handleChange("email")}
                            value={values.email}
                            helperText={
                                emailError === true ? emailHelperText : null
                            }
                            required
                        />

                        <br />
                        <br />
                    </>
                )}
                <TextField
                    error={passwordError}
                    label="Enter password"
                    onChange={handleChange("password")}
                    value={values.password}
                    helperText={
                        passwordError === true ? "6 Characters Minimum" : null
                    }
                    type={values.showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    required
                />

                <br />
                {values.password.length > 5 && !createAccountPage && (
                    <>
                        <TextField
                            error={passwordMismatch}
                            label="Repeat password"
                            onChange={handleChange("repeatPassword")}
                            value={values.repeatPassword}
                            helperText={
                                passwordMismatch === true
                                    ? "Password Mismatch"
                                    : null
                            }
                            type={values.showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {values.showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            required
                        />
                        <br />
                        <br />
                    </>
                )}

                {createAccountPage && (
                    <>
                        <TextField
                            error={passwordMismatch}
                            label="Repeat password"
                            onChange={handleChange("repeatPassword")}
                            value={values.repeatPassword}
                            helperText={
                                passwordMismatch === true
                                    ? "Password Mismatch"
                                    : null
                            }
                            type={values.showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {values.showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            required
                        />
                        <br />
                        <br />
                    </>
                )}

                {createAccountPage && (
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => setSubscribe(!subscribe)}
                                checked={subscribe}
                                color="default"
                            />
                        }
                        label="Accept Terms and Conditions"
                    />
                )}
                <div
                    style={{
                        marginTop: "1em",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {createAccountPage && (
                        <div style={{ display:"flex", gap:3}}>
                            <Chip
                                color="primary"
                                label=" Already have an account?"
                                variant="outlined"
                                component={Link}
                                to="/login"
                            />
                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                            />
                        </div>
                    )}
                    <Chip
                        type="submit"
                        label={
                            createAccountPage
                                ? "Create Account"
                                : "Get Free Shipping Cuopon"
                        }
                        component={Button}
                        disabled={disabled}
                        color="primary"
                        variant="contained"
                        sx={{
                            "&:hover": {
                                backgroundColor: "#EDEDED",
                                color: "black",
                                border: "1px solid black",
                            },
                        }}
                    />
                </div>
            </Paper>
        </div>
    );
};

export default CreateAccount;
