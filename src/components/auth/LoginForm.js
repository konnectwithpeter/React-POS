import {
	CloseRounded,
	Login,
	Visibility,
	VisibilityOff,
} from "@mui/icons-material";
import {
	Alert,
	Box,
	Button,
	Chip,
	CircularProgress,
	IconButton,
	InputAdornment,
	Modal,
	Paper,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useLocation, useNavigate } from "react-router-dom";
import APIContext from "../../context/APIContext";
import AuthContext from "../../context/AuthContext";

const useStyles = makeStyles({
	container: {
		display: "flex",
		position: "relative",
		top: 0,
		left: 0,
		minHeight: "80vh",
		alignItems: "center",
		width: "100%",
	},
	box: {
		display: "flex",
		margin: "0 auto",
		minWidth: "400px",
		alignItems: "center",
	},
	inputField: {
		padding: "0 auto",
		width: "80%",
	},
});

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
};

const LoginForm = (props) => {
	let { onClickProp } = props;
	const navigate = useNavigate();
	let location = useLocation();
	let classes = useStyles();
	let loginError = false;
    let user={username:""}
    let processingLogin = false
    let loginUser = () =>{}

	const [open, setOpen] = useState(false);
	const [afterSubmit, setAfterSubmit] = useState(false);
	let [linkRequest, setLinkRequest] = useState(false);

	const [values, setValues] = useState({
		email: "",
		password: "",
		resetEmail: "",
	});

	const handleOpen = () => {
		setLinkRequest(false);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	let resetEmailRequest = async () => {
		setAfterSubmit(true);
		//   try {
		//       await axios.post(`${API_URL}api/request-reset-email/`, {
		//           email: values.resetEmail,
		//           redirect_url: `${BASE_URL}reset-password/`,
		//       });
		//       setLinkRequest(true);
		//   } catch (err) {
		//       setLinkRequest(true);
		//   }
		//setAfterSubmit(false)
	};

	const handleChange = (prop) => (event) => {
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

	let closeLoginPopup = () => {
		// if (user.username !== "guest" && location.pathname !== "/login") {
		// 	onClickProp();
		// }
	};

	// useEffect(() => {
	// 	closeLoginPopup();
	// }, [user]);

	const handleLogin = async () => {
		await loginUser(values);
	};

	return (
		<div className={classes.container}>
			<div className={classes.box} align="center">
				<Paper
					elevation={0}
					style={{
						width: "100%",
						m: 0,
						backgroundColor: "transparent",
					}}
				>
					
					{loginError && (
						<Alert severity="error" sx={{ margin: "1rem" }}>
							Wrong email or password.
						</Alert>
					)}
					<br />
					<Typography sx={{ fontSize: "20px", fontWeight: "light-bold" }}>
						Log in
					</Typography>
					<br />
					<ValidatorForm
						style={{ margin: 0, padding: 0 }}
						noValidate
						autoComplete="off"
						onSubmit={() => handleLogin()}
					>
						<TextValidator
							className={classes.inputField}
							label="Email"
							onChange={handleChange("email")}
							name="email"
							value={values.email}
							validators={["required", "isEmail"]}
							errorMessages={["this field is required", "email is not valid"]}
						/>
						<br />
						<TextValidator
							className={classes.inputField}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
							type={values.showPassword ? "text" : "password"}
							label="Password"
							onChange={handleChange("password")}
							name="password"
							value={values.password}
							validators={["required"]}
							errorMessages={["this field is required"]}
						/>
						<br />
						<div
							style={{
								display: "flex",
								flex: 1,
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "2em",
								maxWidth: "80%",
							}}
						>
							<Chip
								label="Create Account"
								onClick={() => navigate("/create-account")}
								style={{ width: "45%" }}
							/>
							<Button
								style={{ minWidth: "45%" }}
								type="submit"
								backicon={
									processingLogin === true ? (
										<CircularProgress size={24} style={{ marginLeft: "20%" }} />
									) : (
										<Login style={{ marginLeft: "20%" }} />
									)
								}
							>
								Sign in
							</Button>
						</div>
						<br />
					</ValidatorForm>
					<Typography style={{ marginBottom: "1em" }}>
						Forgot password?
						<Button
							style={{ textTransform: "none" }}
							onClick={() => {
								handleOpen();
								setAfterSubmit(false);
							}}
						>
							Click here to reset.
						</Button>
					</Typography>
				</Paper>
			</div>
			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						...style,
						width: 300,
						padding: 5,
						borderRadius: "5px",
					}}
				>
					{linkRequest === true ? (
						<div>
							<Alert
								variant="outlined"
								severity="success"
								sx={{ margin: "auto" }}
							>
								A new reset password link has been sent. Please check your mails
								and use the link to reset your password.
							</Alert>
							<Chip
								label="Close"
								variant="contained"
								style={{ minWidth: "50%", marginTop: "2em" }}
								onClick={() => setOpen(false)}
							/>
						</div>
					) : null}
					{linkRequest === false ? (
						<ValidatorForm
							style={{ margin: 0, padding: 0 }}
							align="center"
							noValidate
							autoComplete="off"
							onSubmit={() => resetEmailRequest()}
						>
							<TextValidator
								className={classes.inputField}
								label="Email"
								onChange={handleChange("resetEmail")}
								name="email"
								value={values.resetEmail}
								validators={["required", "isEmail"]}
								errorMessages={["this field is required", "email is not valid"]}
								fullWidth
							/>
							<br />

							{linkRequest === false ? (
								<Chip
									label="Send Reset Email"
									variant="outlined"
									color="primary"
									style={{ minWidth: "50%" }}
									component={Button}
									disabled={afterSubmit}
									type="submit"
								/>
							) : null}

							<br />
						</ValidatorForm>
					) : null}
				</Box>
			</Modal>
		</div>
	);
};

export default LoginForm;
