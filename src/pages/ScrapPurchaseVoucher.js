import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import dayjs from "dayjs";
import React, { useState } from "react";
import DateInputField from "../components/reusable/DateInputField";
import DropdownInput from "../components/reusable/DropdownInput";
import TextInputField from "../components/reusable/TextInputField";
import PaymentType from "../components/scrappurchasevoucher/PaymentType";
import ScrapPurchaseGrid from "../components/scrappurchasevoucher/ScrapPurchaseGrid";

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

const ScrapPurchaseVoucher = () => {
	let defaultValues = {
		location: "",
		invoiceNo: "",
		date: dayjs("2014-08-18T21:11:54"),
		refNo: "",
		mobile1: "",
		mobile2: "",
		salesman: "",
		goldRate: "",
		customer: "",
		area: "",
		block: "",
		jedda: "",
		street: "",
		civilId: "",
		idType: "",
		building: "",
		floor: "",
		flate: "",
		paciNo: "",
		country: "",
		customerNotes: "",
		remarks: "",
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
		<Box elevation={0} sx={{ padding: ".2em", m: 1 }}>
			<Stack spacing={0.8}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography variant="h6">Scrap Purchase Voucher</Typography>
					<Typography variant="h6">New</Typography>
				</div>

				<Box sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
					<Grid container spacing={1}>
						<Grid item lg={1.71428571} md={2}>
							<DropdownInput
								label="Location"
								onChange={handleChange("location")}
								value={formValues.location}
								options={locations}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1.5}>
							<TextInputField
								label="Invoice No"
								onChange={handleChange("invoiceNo")}
								value={formValues.invoiceNo}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={2}>
							<DateInputField
								label="Date"
								onChange={handleChangeDate}
								value={formValues.date}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1.5}>
							<TextInputField
								label="Ref No"
								onChange={handleChange("refNo")}
								value={formValues.refNo}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1.5}>
							<TextInputField
								label="Mobile"
								onChange={handleChange("mobile1")}
								value={formValues.mobile1}
								classname={classes.input__num}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1.5}>
							<TextInputField
								label="Mobile"
								onChange={handleChange("mobile2")}
								value={formValues.mobile2}
								classname={classes.input__num}
							/>
						</Grid>
						<Grid item lg={1.71428571} sm={6} md={2} align="right">
							<DropdownInput
								label="Country"
								onChange={handleChange("country")}
								value={formValues.country}
								options={locations}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item lg={1.71428571} md={2.5}>
							<TextInputField
								label="Customer"
								onChange={handleChange("customer")}
								value={formValues.customer}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1.5}>
							<DropdownInput
								label="Area"
								onChange={handleChange("area")}
								value={formValues.area}
								options={locations}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1}>
							<TextInputField
								label="Block"
								onChange={handleChange("block")}
								value={formValues.block}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1}>
							<TextInputField
								label="Jedda"
								onChange={handleChange("jedda")}
								value={formValues.jedda}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1.5}>
							<TextInputField
								label="Street"
								onChange={handleChange("street")}
								value={formValues.street}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1.5}>
							<TextInputField
								label="Building"
								onChange={handleChange("building")}
								value={formValues.building}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1.5} align="right">
							<TextInputField
								label="Floor"
								onChange={handleChange("floor")}
								value={formValues.floor}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item lg={1.71428571} md={1.5}>
							<TextInputField
								label="Flate"
								onChange={handleChange("flate")}
								value={formValues.flate}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1.5}>
							<TextInputField
								label="PACI No"
								onChange={handleChange("paciNo")}
								value={formValues.paciNo}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={2}>
							<TextInputField
								label="Civil Id"
								onChange={handleChange("civilId")}
								value={formValues.civilId}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={2}>
							<DropdownInput
								label="Id Type"
								onChange={handleChange("idType")}
								value={formValues.idType}
								options={locations}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={2}>
							<DropdownInput
								label="Salesman"
								onChange={handleChange("salesman")}
								value={formValues.salesman}
								options={locations}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={1.5}>
							<TextInputField
								label="Gold Rate (24k)"
								onChange={handleChange("goldRate")}
								value={formValues.goldRate}
							/>
						</Grid>
						<Grid item lg={1.71428571} sm={6} md={3} align="right">
							<TextInputField
								label="Customer Note"
								onChange={handleChange("customerNotes")}
								value={formValues.customerNotes}
							/>
						</Grid>
					</Grid>
				</Box>
				<ScrapPurchaseGrid />
				<Box>
					<Grid container spacing={3}>
						<Grid item lg={8} xs={12} md={8}>
							<PaymentType />
						</Grid>
						<Grid item lg={4} xs={12} md={4}>
							<Paper
								sx={{
									display: "flex",
									flexDirection: "column",
									borderRadius: "8px",
									padding: 1,
									gap: ".2em",
								}}
							>
								<Typography variant="h6">Total</Typography>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										gap: "1em",
									}}
								>
									<TextInputField
										label="Weight"
										onChange={handleChange("amount")}
										value={formValues.amount}
									/>

									<TextInputField
										label="Weight"
										onChange={handleChange("amount")}
										value={formValues.amount}
									/>

									<TextInputField
										label="Amount"
										onChange={handleChange("amount")}
										value={formValues.amount}
									/>
								</Box>
								<TextInputField
									label="Remarks"
									onChange={handleChange("remarks")}
									value={formValues.remarks}
									multiline
									rows={2}
								/>
							</Paper>
						</Grid>
					</Grid>
				</Box>
			</Stack>
		</Box>
	);
};

export default ScrapPurchaseVoucher;
