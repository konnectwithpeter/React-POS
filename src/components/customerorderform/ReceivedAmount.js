import { FormControl, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import AddButton from "../reusable/AddButton";
import DropdownInput from "../reusable/DropdownInput";
import EditButton from "../reusable/EditButton";
import TextInputField from "../reusable/TextInputField";

const columns = [
	{ id: "serial", label: "S#" },
	{ id: "id", label: "Pay Id", align: "left" },
	{ id: "type", label: "PayType Name", align: "left" },
	{
		id: "amount",
		label: "Amount",
		align: "right",
	},
	{
		id: "currency",
		label: "Curr",
		align: "right",
	},
	{
		id: "rate",
		label: "Ex. Rate",
		align: "right",
	},
	{
		id: "fc",
		label: "Amount FC",
		align: "right",
	},
];

const rows = [];

const ReceivedAmount = () => {
	const defaultValues = {
		payId: "",
		payType: "",
		amount: "",
		currency: "",
		exRate: "",
		amountFC: "",
	};
	const [formValues, setFormValues] = React.useState(defaultValues);

	const [toAppend, setToAppend] = React.useState(null);
	const [appending, setAppending] = React.useState(false);

	const handleChange = (prop) => (event) => {
		setFormValues({ ...formValues, [prop]: event.target.value });
	};
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	let [rowItems, setRowItems] = React.useState([]);

	const handleAppend = () => {
		console.log(rowItems.filter((row) => row.payId === toAppend.payId)[0]);
		setFormValues(defaultValues);
		setAppending(false);
	};

	const handleAdd = () => {
		setRowItems(rowItems.concat(formValues));
		setFormValues(defaultValues);
	};

	let locations = [
		{ val: 10, lbl: "Ten" },
		{ val: 10, lbl: "Ten" },
		{ val: 10, lbl: "Ten" },
	];

	// React.useEffect(()=>{console.log(rowItems)},[rowItems])

	return (
		<Paper
			elevation={0}
			sx={{ width: "100%", overflow: "hidden", borderRadius: "8px" }}
		>
			<TableContainer sx={{ height: 185 }}>
				<Table stickyHeader size="small" sx={{ position: "relative" }}>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell key={column.id} align={column.align}>
									<Typography
										variant="subtitle2"
										sx={{ fontWeight: "bold", fontSize: 12 }}
									>
										{column.label}
									</Typography>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody sx={{ minHeight: 100 }}>
						{rowItems.length === 0 ? (
							<>
								<TableRow>
									<TableCell>1</TableCell>
									<TableCell colSpan="6"> </TableCell>
								</TableRow>
								<TableRow>
									<TableCell>2</TableCell>
									<TableCell colSpan="6"> </TableCell>
								</TableRow>
							</>
						) : (
							rowItems.map((row, index) => (
								<TableRow
									hover
									key={index}
									onClick={() => {
										setToAppend(row);
										setAppending(true);
										setFormValues(row);
									}}
								>
									<TableCell>{index + 1}</TableCell>
									<TableCell align="center">{row.payId}</TableCell>
									<TableCell align="center">{row.payType}</TableCell>
									<TableCell align="center">{row.amount}</TableCell>
									<TableCell align="center">{row.currency}</TableCell>
									<TableCell align="center">{row.exRate}</TableCell>
									<TableCell align="center">{row.amountFC}</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
					<TableHead sx={{ position: "sticky", bottom: 0 }}>
						<TableRow>
							<TableCell></TableCell>
							<TableCell>
								<TextInputField
									size="small"
									onChange={handleChange("payId")}
									value={formValues.payId}
								/>
							</TableCell>
							<TableCell>
								<TextInputField
									size="small"
									onChange={handleChange("payType")}
									value={formValues.payType}
								/>
							</TableCell>

							<TableCell>
								<DropdownInput
									onChange={handleChange("amount")}
									value={formValues.amount}
									options={locations}
								/>
							</TableCell>
							<TableCell align="right">
								<TextInputField
									size="small"
									onChange={handleChange("currency")}
									value={formValues.currency}
								/>
							</TableCell>
							<TableCell>
								<DropdownInput
									onChange={handleChange("exRate")}
									value={formValues.exRate}
									options={locations}
								/>
							</TableCell>

							<TableCell>
								<TextInputField
									size="small"
									onChange={handleChange("amountFC")}
									value={formValues.amountFC}
								/>
							</TableCell>
							<TableCell
								sx={{ display: "flex", alignItems: "center", border: "none" }}
							>
								{!appending ? (
									<AddButton
										data={formValues}
										handleAdd={handleAdd}
										variable="first"
									/>
								) : (
									<EditButton
										data={formValues}
										handleAppend={handleAppend}
										variable="first"
									/>
								)}
							</TableCell>
						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: ".2em",
					alignItems: "center",
				}}
			>
				<FormControl>
					<TextField
						inputProps={{
							style: {
								padding: 5,
							},
						}}
						label="Received Amount"
						size="small"
						sx={{ maxWidth: "15em" }}
						variant="outlined"
					/>
				</FormControl>
				<FormControl>
					<TextInputField
						defaultValue="Created By: Admin"
						InputProps={{
							readOnly: true,
						}}
					/>
				</FormControl>

				<FormControl>
					<TextInputField
						size="small"
						defaultValue="Current Login: Admin"
						InputProps={{
							readOnly: true,
						}}
					/>
				</FormControl>
			</div>
		</Paper>
	);
};

export default ReceivedAmount;
