import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

function createData(gram, price, priceChange) {
	return { gram, price, priceChange };
}

const rows = [
	createData(1, 4934, -59),
	createData(8, 39472, -472),
	createData(10, 49340, -590),
	createData(100, 493400, -5900),
	createData(100, 493400, -5900),
	createData(100, 493400, -5900),
	createData(100, 493400, -5900),
];

export default function RatesTable() {
	return (
		<TableContainer>
			<Table aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Gram</StyledTableCell>
						<StyledTableCell align="right">24K Gold Price</StyledTableCell>
						<StyledTableCell align="right">Daily Price Change</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<StyledTableRow key={index}>
							<StyledTableCell component="th" scope="row">
								{row.gram} gram
							</StyledTableCell>
							<StyledTableCell align="right">₹ {row.price}</StyledTableCell>
							<StyledTableCell align="right">
								₹ {row.priceChange}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
