import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableRow,
	TextField,
	Box,
	Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import TextInputField from "../reusable/TextInputField";

let useStyles = makeStyles({
	money__field: {
		"& input[type=number]": {
			"-moz-appearance": "textfield",
		},
		"& input[type=number]::-webkit-outer-spin-button": {
			"-webkit-appearance": "none",
			margin: 0,
		},
		"& input[type=number]::-webkit-inner-spin-button": {
			"-webkit-appearance": "none",
			margin: 0,
		},
		textAlign: "right",
	},
});

const TotalCalculations = () => {
	let classes = useStyles();
	return (
		<Paper
			component={Stack}
			spacing={1}
			elevation={0}
			sx={{ mt: 1, borderRadius: "8px", p: 1 }}
		>
			<Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
				<TextInputField
					className={classes.money__field}
					label="Total Amount"
					type="number"
					placeholder="0.00"
				/>
				<TextInputField
					className={classes.money__field}
					label="Discount"
					type="number"
					placeholder="0.00"
				/>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
				<TextInputField
					className={classes.money__field}
					label="Discount"
					type="number"
					placeholder="0.00"
				/>
				<TextInputField
					className={classes.money__field}
					label="Net Amount"
					type="number"
					placeholder="0.00"
				/>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
				<TextInputField
					className={classes.money__field}
					label="Scrap Purchase"
					type="number"
					placeholder="0.00"
				/>
				<TextInputField
					className={classes.money__field}
					label="Net Payable"
					type="number"
					placeholder="0.00"
				/>
			</Box>
		</Paper>
	);
};

export default TotalCalculations;
