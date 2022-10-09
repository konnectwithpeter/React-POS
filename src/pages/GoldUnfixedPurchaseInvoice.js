import {
	Box, FormControl,
	FormHelperText,
	Grid,
	OutlinedInput,
	Paper,
	Stack,
	Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import dayjs from "dayjs";
import React, { useState } from "react";
import GoldPurchaseInvoiceGrid from "../components/goldunfixedpurchaseinvoice/GoldPurchaseInvoiceGrid";
import DateInputField from "../components/reusable/DateInputField";
import DropdownInput from "../components/reusable/DropdownInput";
import TextInputField from "../components/reusable/TextInputField";

let useStyles = makeStyles({
	input__num: {
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
	},
});

const GoldUnfixedPurchaseInvoice = () => {
	let defaultValues = {
		location: "",
		invoiceNo: "",
		date: dayjs("2014-08-18T21:11:54"),
		refNo: "",
		mobile1: "",
		mobile2: "",
		type: "",
		goldRate: "",
		suppInvoice: "",
		supplier: "",
		cPerson: "",
		creditDays: "",
		puregoldPurity: "",
		companycrNo: "",
		civilId: "",
		remarks: "",
		discount: "",
		netAmount: "",
	};
	const [formValues, setFormValues] = React.useState(defaultValues);

	let classes = useStyles();
	let [telError, setTelError] = useState(false);

	let verifyPhone = () => {
		const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/im;
		if (
			formValues.telephone.length > 0 &&
			formValues.telephone.match(phoneRegex)
		) {
			setTelError(false);
		} else if (
			formValues.telephone > 0 &&
			!formValues.telephone.match(phoneRegex)
		) {
			setTelError(true);
		}
	};

	const handleChange = (prop) => (event) => {
		setFormValues({ ...formValues, [prop]: event.target.value });
		console.log(formValues);
	};

	const handleChangeDate = (newValue) => {
		setFormValues({ ...formValues, date: newValue });
	};

	let locations = [
		{ val: 10, lbl: "Ten" },
		{ val: 10, lbl: "Ten" },
		{ val: 10, lbl: "Ten" },
	];

	return (
		<Paper elevation={0} sx={{ padding: ".5em", m: 1 }}>
			<Stack
				spacing={2}
				component={Paper}
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					padding: ".5em",
					borderRadius: "8px",
					mb:1
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography variant="h6">Gold Unfixed Purchase Invoice</Typography>
					<Typography variant="h6">New</Typography>
				</div>

				<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
					<Grid container spacing={3}>
						<Grid item md={3} lg={1.71428571}>
							<DropdownInput
								label="Location"
								onChange={handleChange("location")}
								value={formValues.location}
								options={locations}
							/>
						</Grid>
						<Grid item md={3} lg={1.71428571}>
							<TextInputField
								label="Invoice No"
								onChange={handleChange("invoiceNo")}
								value={formValues.invoiceNo}
							/>
						</Grid>
						<Grid item md={3} lg={1.71428571}>
							<DropdownInput
								label="Type"
								onChange={handleChange("type")}
								value={formValues.type}
								options={locations}
							/>
						</Grid>
						<Grid item md={3} lg={1.71428571} align="right">
							<DateInputField
								label="Date"
								onChange={handleChangeDate}
								value={formValues.date}
							/>
						</Grid>
						<Grid item md={3} lg={1.71428571}>
							<TextInputField
								label="Supplier"
								onChange={handleChange("supplier")}
								value={formValues.supplier}
							/>
						</Grid>
						<Grid item md={3} lg={1.71428571}>
							<TextInputField
								label="Ref No"
								onChange={handleChange("refNo")}
								value={formValues.refNo}
							/>
						</Grid>
						<Grid item md={3} lg={1.71428571}>
							<TextInputField
								label="Mobile"
								onChange={handleChange("mobile1")}
								value={formValues.mobile1}
								classname={classes.input__num}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={3}>
						<Grid item md={2} lg={1.71428571}>
							<TextInputField
								label="C. Person"
								onChange={handleChange("cPerson")}
								value={formValues.cPerson}
							/>
						</Grid>
						<Grid item md={2} lg={1.71428571}>
							<TextInputField
								label="Credit Days"
								onChange={handleChange("creditDays")}
								value={formValues.creditDays}
							/>
						</Grid>
						<Grid item md={2} lg={1.71428571}>
							<TextInputField
								label="Pure Gold Purity"
								onChange={handleChange("puregoldPurity")}
								value={formValues.puregoldPurity}
							/>
						</Grid>
						<Grid item md={3} lg={1.71428571}>
							<TextInputField
								label="Civil Id"
								onChange={handleChange("civilId")}
								value={formValues.civilId}
							/>
						</Grid>
						<Grid item md={3} lg={1.71428571}>
							<TextInputField
								label="Company CR No"
								onChange={handleChange("companycrNo")}
								value={formValues.companycrNo}
							/>
						</Grid>
						<Grid item md={3} lg={1.71428571}>
							<TextInputField
								label="Supplier Invoice"
								onChange={handleChange("suppInvoice")}
								value={formValues.suppInvoice}
							/>
						</Grid>

						<Grid item md={3} lg={1.71428571} align="right">
							<TextInputField
								label="Gold Rate (24k)"
								onChange={handleChange("goldRate")}
								value={formValues.goldRate}
							/>
						</Grid>
					</Grid>
				</Box>
			</Stack>
			<GoldPurchaseInvoiceGrid />
			<Grid container spacing={3}>
				<Grid item xs={12} md={3}>
					<Paper
						sx={{
							display: "flex",
							flexDirection: "column",
							mt: 1,
							borderRadius: "8px",
							padding: 1,
							gap: ".5em",
						}}
					>
						<Box sx={{ display: "flex", gap: ".5em" }}>
							<FormControl variant="outlined" fullWidth>
								<Typography
									component={FormHelperText}
									sx={{ fontWeight: "bold" }}
									variant="subtitle2"
								>
									Discount
								</Typography>
								<OutlinedInput
									inputProps={{
										style: {
											padding: 5,
										},
									}}
									size="small"
									onChange={handleChange("discount")}
									value={formValues.discount}
								/>
							</FormControl>
							<FormControl variant="outlined" fullWidth>
								<Typography
									component={FormHelperText}
									sx={{ fontWeight: "bold" }}
									variant="subtitle2"
								>
									Net Amount
								</Typography>
								<OutlinedInput
									inputProps={{
										style: {
											padding: 5,
										},
									}}
									size="small"
									onChange={handleChange("netAmount")}
									value={formValues.netAmount}
								/>
							</FormControl>
						</Box>

						<FormControl variant="outlined" fullWidth>
							<Typography
								component={FormHelperText}
								sx={{ fontWeight: "bold" }}
								variant="subtitle2"
							>
								Remarks
							</Typography>
							<OutlinedInput
								inputProps={{
									style: {
										padding: 5,
									},
								}}
								multiline
								rows={1}
								size="small"
								onChange={handleChange("remarks")}
								value={formValues.remarks}
							/>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={12} md={3}>
					<Paper
						sx={{
							display: "flex",
							flexDirection: "column",
							mt: 1,
							borderRadius: "8px",
							padding: 1,
							gap: ".5em",
						}}
					>
						<Typography variant="h6">Total</Typography>
						<Box
							sx={{
								display: "flex",

								gap: ".5em",
							}}
						>
							<FormControl variant="outlined" fullWidth>
								<Typography
									component={FormHelperText}
									sx={{ fontWeight: "bold" }}
									variant="subtitle2"
								>
									Amount
								</Typography>
								<OutlinedInput
									inputProps={{
										style: {
											padding: 5,
										},
									}}
									size="small"
									onChange={handleChange("remarks")}
									value={formValues.remarks}
								/>
							</FormControl>
							<FormControl variant="outlined" fullWidth>
								<Typography
									component={FormHelperText}
									sx={{ fontWeight: "bold" }}
									variant="subtitle2"
								>
									Weight
								</Typography>
								<OutlinedInput
									inputProps={{
										style: {
											padding: 5,
										},
									}}
									size="small"
									onChange={handleChange("remarks")}
									value={formValues.remarks}
								/>
							</FormControl>
							<FormControl variant="outlined" fullWidth>
								<Typography
									component={FormHelperText}
									sx={{ fontWeight: "bold" }}
									variant="subtitle2"
								>
									Amount
								</Typography>
								<OutlinedInput
									inputProps={{
										style: {
											padding: 5,
										},
									}}
									size="small"
									onChange={handleChange("remarks")}
									value={formValues.remarks}
								/>
							</FormControl>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs={12} md={3}>
					<Paper
						sx={{
							display: "flex",
							flexDirection: "column",
							mt: 1,
							borderRadius: "8px",
							padding: 1,
							gap: ".5em",
						}}
					>
						<Typography variant="h6">Account Current Balance</Typography>
						<Box sx={{ display: "flex", gap: ".5em" }}>
							<FormControl variant="outlined" fullWidth>
								<Typography
									component={FormHelperText}
									sx={{ fontWeight: "bold" }}
									variant="subtitle2"
								>
									Amount
								</Typography>
								<OutlinedInput
									inputProps={{
										style: {
											padding: 5,
										},
									}}
									size="small"
									onChange={handleChange("amount")}
									value={formValues.amount}
								/>
							</FormControl>
							<FormControl variant="outlined" fullWidth>
								<Typography
									component={FormHelperText}
									sx={{ fontWeight: "bold" }}
									variant="subtitle2"
								>
									Gold
								</Typography>
								<OutlinedInput
									inputProps={{
										style: {
											padding: 5,
										},
									}}
									size="small"
									onChange={handleChange("gold")}
									value={formValues.gold}
								/>
							</FormControl>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs={12} md={3}>
					<Paper
						sx={{
							display: "flex",
							flexDirection: "column",
							mt: 1,
							borderRadius: "8px",
							padding: 1,
							gap: ".5em",
						}}
					>
						<FormControl>
							<Typography
								component={FormHelperText}
								sx={{ fontWeight: "bold" }}
								variant="subtitle2"
							>
								Created By:
							</Typography>
							<TextInputField
								defaultValue="Admin"
								InputProps={{
									readOnly: true,
								}}
							/>
						</FormControl>
						<FormControl>
							<Typography
								component={FormHelperText}
								sx={{ fontWeight: "bold" }}
								variant="subtitle2"
							>
								Current Login:
							</Typography>
							<TextInputField
								defaultValue="Admin"
								InputProps={{
									readOnly: true,
								}}
							/>
						</FormControl>
					</Paper>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default GoldUnfixedPurchaseInvoice;
