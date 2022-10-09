import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import { EditRounded } from "@mui/icons-material";
import React, { useState } from "react";

const EditButton = ({ handleAppend }) => {
	let [notify, setNotify] = useState(false);
	const handleCloseNotify = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setNotify(false);
	};
	let handleClick = () => {
		handleAppend();
	};
	return (
		<>
			<EditRounded
				color="primary"
				sx={{
					"&:hover": {
						border: "1px solid rgba(0, 0, 0, 0.2)",
						backgroundColor: "rgb(250,250,250)",
						cursor: "pointer",
					},
					margin: "auto",
					border: "1px solid rgba(0, 0, 0, 0.2)",
					borderRadius: "8px",
					p: 0.3,
					cursor: "pointer",
					fontSize: 32,
					fontWeight: 500,
				}}
				onClick={handleClick}
			/>

			<Snackbar
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={notify}
				onClose={handleCloseNotify}
				autoHideDuration={4000}
				sx={{ mt: "3em", zIndex: 10000 }}
			>
				<Alert severity="success">Edited and saved successfully.</Alert>
			</Snackbar>
		</>
	);
};

export default EditButton;
