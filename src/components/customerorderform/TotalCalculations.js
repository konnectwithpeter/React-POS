import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableRow,
	TextField,
	TableContainer,
	Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import GoldRates from "../reusable/GoldRates";

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
			elevation={1}
			sx={{ p: 1, display: "flex", gap: 2, flexDirection: "column" }}
		>
			<Box sx={{ display: "flex", gap: 1 }}>
				<TextField
					inputProps={{
						style: {
							padding: 5,
						},
					}}
					className={classes.money__field}
					label="Discount:"
					size="small"
					type="number"
					defaultValue="0.00"
				/>
				<TextField
					inputProps={{
						style: {
							padding: 5,
						},
					}}
					className={classes.money__field}
					label="Net Amount"
					size="small"
					type="number"
					defaultValue="0.00"
				/>
			</Box>
			<Box sx={{ display: "flex", gap: 1 }}>
				<TextField
					inputProps={{
						style: {
							padding: 5,
						},
					}}
					className={classes.money__field}
					label="Gift Wrap Charge"
					size="small"
					type="number"
					defaultValue="0.00"
				/>
				<TextField
					inputProps={{
						style: {
							padding: 5,
						},
					}}
					className={classes.money__field}
					label="Advance Received"
					size="small"
					type="number"
					defaultValue="0.00"
				/>
			</Box>

			<TextField
				className={classes.money__field}
				label="Total Amount"
				size="small"
				type="number"
				defaultValue="0.00"
			/>
		</Paper>
	);
};

export default TotalCalculations;
