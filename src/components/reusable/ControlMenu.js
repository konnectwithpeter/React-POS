import {
	AddCircleRounded,
	ClearRounded,
	DeleteForeverRounded,
	ExitToAppRounded,
	ListAltRounded,
	PrintRounded,
	SaveRounded,
} from "@mui/icons-material";
import { Chip, Paper, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
	list__item: {
		display: "block",
		padding: 0,
		borderRadius: "10px",
	},
	list__item__button: {
		justifyContent: "initial",
		padding: 0,
		borderRadius: "10px",
	},
	list__item__icon: {
		minWidth: 0,
		mr: 2,
	},
	list__item__icon__button: {
		margin: "auto",
		border: "1px solid rgba(0, 0, 0, 0.2)",
		borderRadius: "8px",
		padding: 3,
		cursor: "pointer",
		fontSize: 32,
		fontWeight: 500,
	},
	list__item__text: {},
});

const ControlMenu = (props) => {
	let navigate = useNavigate();

	let classes = useStyles();



	let handleExit = () => {
		navigate("/");
	};

	let handleOnclick = () => {};

	return (
		<Paper
			elevation={0}
			sx={{
				padding: ".5em",
				position: "absolute",
				bottom: 0,
				zIndex: 10000,
				m:0
				
			}}
		>
			<Stack direction="row" spacing={3}>
				<Chip
					icon={<AddCircleRounded />}
					label="Add"
					variant="contained"
					onClick={handleOnclick}
					color="primary"
					sx={{ maxWidth: "10em" }}
				/>
				<Chip
					icon={<SaveRounded />}
					color="success"
					label="Save"
					variant="contained"
					onClick={handleOnclick}
					sx={{ maxWidth: "10em" }}
				/>
				<Chip
					icon={<PrintRounded />}
					label="Print"
					variant="outlined"
					onClick={handleOnclick}
					sx={{ maxWidth: "10em" }}
				/>
				<Chip
					icon={<ListAltRounded />}
					label="List"
					variant="outlined"
					color="info"
					onClick={handleOnclick}
					sx={{ maxWidth: "10em" }}
				/>
				<Chip
					icon={<ClearRounded />}
					label="Clear"
					onClick={handleOnclick}
					sx={{ maxWidth: "10em" }}
				/>
				<Chip
					icon={<DeleteForeverRounded />}
					label="Delete"
					variant="contained"
					color="error"
					onClick={handleOnclick}
					sx={{ maxWidth: "10em" }}
				/>

				<Chip
					icon={<ExitToAppRounded />}
					label="Exit"
					variant="contained"
					color="secondary"
					onClick={handleExit}
					sx={{ maxWidth: "10em" }}
				/>
			</Stack>
		</Paper>
	);
};

export default ControlMenu;
