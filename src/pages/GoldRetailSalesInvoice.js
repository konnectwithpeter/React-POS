import {
	Box,
	Chip, Grid, Paper,
	Skeleton,
	Stack, Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import dayjs from "dayjs";
import React, { useState } from "react";
import GoldRetailGrid from "../components/goldretailsalesinvoice/GoldRetailGrid";
import ReceivedPayments from "../components/goldretailsalesinvoice/ReceivedPayments";
import TotalCalculations from "../components/goldretailsalesinvoice/TotalCalculations";
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

const GoldRetailSalesInvoice = (props) => {
	let { sidebarOpen } = props;

	let defaultValues = {
		location: "",
		invoiceNo: "",
		date: dayjs("2014-08-18T21:11:54"),
		goldRate: "",
		mobile1: "",
		civilId: "",
		invType: "",
		refNo: "",
		invAgainst: "",
		customer: "",
		salesman: "",
		nationality: "",
		area: "",
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

	let handleClick = () => {};

	let locations = [
		{ val: 10, lbl: "Ten" },
		{ val: 10, lbl: "Ten" },
		{ val: 10, lbl: "Ten" },
	];

	return (
		<Paper elevation={0} sx={{ padding: ".5em" }}>
			<Stack spacing={1}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						mt: 0.2,
						mb: 0.2,
					}}
				>
					<Typography variant="h6">Gold Retail Sales Invoice</Typography>
					<Typography variant="h6">New</Typography>
				</div>

				<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
					<Grid container spacing={1}>
						<Grid item lg={1.71428571} md={3}>
							<DropdownInput
								label="Location"
								onChange={handleChange("location")}
								value={formValues.location}
								options={locations}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={3}>
							<TextInputField
								label="Invoice No"
								onChange={handleChange("invoiceNo")}
								value={formValues.invoiceNo}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={3}>
							<DateInputField
								label="Date"
								onChange={handleChangeDate}
								value={formValues.date}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={3}>
							<TextInputField
								label="civil Id"
								onChange={handleChange("civilId")}
								value={formValues.civilId}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={3}>
							<DropdownInput
								label="Inv. Type"
								onChange={handleChange("invType")}
								value={formValues.invType}
								options={locations}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={3}>
							<TextInputField
								label="Ref No"
								onChange={handleChange("refNo")}
								value={formValues.refNo}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={3} align="right">
							<TextInputField
								label="Inv. Against"
								onChange={handleChange("invAgainst")}
								value={formValues.invAgainst}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item lg={1.71428571} md={6}>
							<TextInputField
								label="Customer"
								onChange={handleChange("customer")}
								value={formValues.customer}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={3}>
							<TextInputField
								label="Nationality"
								onChange={handleChange("nationality")}
								value={formValues.nationality}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={3}>
							<TextInputField
								label="Mobile"
								className={classes.input__num}
								onChange={handleChange("mobile1")}
								value={formValues.mobile1}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={3}>
							<TextInputField
								label="Area"
								onChange={handleChange("area")}
								value={formValues.area}
							/>
						</Grid>
						<Grid item sm={6} md={6} lg={1.71428571}>
							<TextInputField
								label="Customer Note"
								onChange={handleChange("customerNotes")}
								value={formValues.customerNotes}
							/>
						</Grid>
						<Grid item sm={6} md={4} lg={1.71428571}>
							<DropdownInput
								label="Salesman"
								onChange={handleChange("salesman")}
								value={formValues.salesman}
								options={locations}
							/>
						</Grid>
						<Grid item lg={1.71428571} md={2} align="right">
							<TextInputField
								label="Gold Rate (24k)"
								onChange={handleChange("goldRate")}
								value={formValues.goldRate}
							/>
						</Grid>
					</Grid>
				</Box>
				<GoldRetailGrid />
			</Stack>

			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<ReceivedPayments />
				</Grid>
				<Grid item xs={12} md={3}>
					<Box>
						<TotalCalculations />
						<Paper
							sx={{
								display: "flex",
								gap: 1,
								p: 0.5,
								mt: 1,
								borderRadius: "8px",
							}}
						>
							<Stack spacing={1}>
								<TextInputField label="Remarks" value={formValues.remarks} />
								<TextInputField
									label="Available Stock"
									value={formValues.remarks}
								/>
							</Stack>
							<Stack spacing={1} sx={{ mt: 1 }}>
								<Chip
									size="small"
									label="Hold Invoice"
									variant="outlined"
									onClick={handleClick}
									color="warning"
									sx={{ maxWidth: "10em" }}
								/>
								<Chip
									size="small"
									label="Unhold Invoice"
									variant="outlined"
									onClick={handleClick}
									color="primary"
									sx={{ maxWidth: "10em" }}
								/>
								<Chip
									size="small"
									label="Scrap Purchase"
									variant="outlined"
									onClick={handleClick}
									color="error"
									sx={{ maxWidth: "10em" }}
								/>
							</Stack>
						</Paper>
					</Box>
				</Grid>
				<Grid item xs={12} md={3}>
					<Paper
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 1,
							border: "1px solid rgb(0,0,0,0.1)",
							padding: 0.5,
							borderRadius: "8px",
							mt: 1,
						}}
					>
						<Typography>National ID</Typography>
						<Skeleton variant="rounded" height={90} sx={{}} />
					</Paper>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default GoldRetailSalesInvoice;
