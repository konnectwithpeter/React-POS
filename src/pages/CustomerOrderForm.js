import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import dayjs from "dayjs";
import React, { useState } from "react";
import CustomerOrderGrid from "../components/customerorderform/CustomerOrderGrid";
import ReceivedPayments from "../components/customerorderform/ReceivedPayments";
import TotalCalculations from "../components/customerorderform/TotalCalculations";
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

const CustomerOrderForm = (props) => {
	let defaultValues = {
		location: "",
		mobile1: "",
		mobile2: "",
		customer: "",
		civilId: "",
		nationality: "",
		address: "",
		area: "",
		orderRefNo: "",
		orderNo: "",
		date: dayjs("2014-08-18T21:11:54"),
		orderType: "",
		salesman: "",
		goldRate: "",
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
		<Paper elevation={0} sx={{ padding: ".2em", m: 1 }}>
			<Stack spacing={1}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						mt: 0.2,
					}}
				>
					<Typography variant="h6">Customer Order Form</Typography>
					<Typography variant="h6">New</Typography>
				</div>
				<Box>
					<Grid container spacing={1} sx={{ mb: 1 }}>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<DropdownInput
								label="Location"
								onChange={handleChange("location")}
								value={formValues.location}
								options={locations}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<TextInputField
								value={formValues.orderNo}
								label="Order No"
								onChange={handleChange("orderNo")}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<TextInputField
								label="Order Ref No"
								onChange={handleChange("orderRefNo")}
								value={formValues.orderRefNo}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<TextInputField
								label="Mobile"
								onChange={handleChange("mobile1")}
								value={formValues.mobile1}
								classname={classes.input__num}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<TextInputField
								label="Mobile"
								onChange={handleChange("mobile2")}
								value={formValues.mobile2}
								classname={classes.input__num}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<TextInputField
								label="Civil ID"
								onChange={handleChange("civilId")}
								value={formValues.civilId}
								classname={classes.input__num}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<DateInputField
								label="Date"
								onChange={handleChangeDate}
								value={formValues.date}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={1} sx={{ mb: 0.3 }}>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<DropdownInput
								label="Order Type"
								onChange={handleChange("orderType")}
								value={formValues.orderType}
								options={locations}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<DropdownInput
								label="Salesman"
								onChange={handleChange("salesman")}
								value={formValues.salesman}
								options={locations}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<TextInputField
								value={formValues.goldRate}
								label="Gold Rate (24k)"
								onChange={handleChange("goldRate")}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<TextInputField
								label="Customer"
								onChange={handleChange("customer")}
								value={formValues.customer}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<TextInputField
								label="Address"
								onChange={handleChange("address")}
								value={formValues.address}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<TextInputField
								label="Area"
								onChange={handleChange("area")}
								value={formValues.area}
							/>
						</Grid>
						<Grid item sm={6} lg={1.71428571} md={3}>
							<TextInputField
								label="Remarks"
								onChange={handleChange("remarks")}
								value={formValues.remarks}
							/>
						</Grid>
					</Grid>
				</Box>
				<CustomerOrderGrid />
				<Box>
					<Grid container spacing={3}>
						<Grid item xs={12} md={8}>
							<ReceivedPayments />
						</Grid>
						<Grid item xs={12} md={4}>
							<TotalCalculations />
						</Grid>
					</Grid>
				</Box>
			</Stack>
		</Paper>
	);
};

export default CustomerOrderForm;
