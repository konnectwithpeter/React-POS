import {
	ReceiptRounded,
	RecentActorsRounded,
	RedeemRounded
} from "@mui/icons-material";
import {
	Badge,
	Box,
	Divider,
	Grid,
	Paper,
	Stack, Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import MyAwesomeGrid from "../components/reusable/MyAwesomeGrid";

let useStyles = makeStyles({
	base__card: {
		"&:hover": {
			color: "black",
			transform: "scale(1.02)",
		},
		display: "flex",
		flexDirection: "column",
		gap: 3,
		justifyContent: "center",
		padding: ".5em",
		minWidth: "14em",
		maxWidth: "14em",
		alignItems: "center",
		backgroundColor: "#EDEDED !important",
		textDecoration: "none !important",
		// border: "1px solid rgb(0,0,0,0.2) !important",
		borderRadius: "15px",
	},
	containers: {
		padding: "1em",
		border: "1px solid rgb(0,0,0,0.1) !important",
		borderRadius: "15px",
	},
});
const HomePage = () => {
	let classes = useStyles();



	return (
		<Stack
			component={Box}
			sx={{ padding: "2em", position: "relative" }}
			spacing={2}
		>
			<Box className={classes.containers}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",

						mb: 2,
					}}
				>
					<Typography variant="h5">Invoices</Typography>
				</div>
				<Divider sx={{ mb: 2, mt: 1 }} />

				<Grid container spacing={4}>
					<Grid item md={4}>
						<Badge badgeContent={4} color="primary">
							<Paper
								component={Link}
								to="/gold-retail-sales-invoice"
								elevation={6}
								id="base-card"
								className={classes.base__card}
							>
								<ReceiptRounded color="primary" sx={{ fontSize: "100px" }} />
								<Typography variant="h6">Gold Retail Sales</Typography>
							</Paper>
						</Badge>
					</Grid>
					<Grid item md={4}>
						<Badge badgeContent={4} color="primary">
							<Paper
								component={Link}
								to="/gold-unfixed-purchase-invoice"
								elevation={6}
								id="base-card"
								className={classes.base__card}
							>
								<ReceiptRounded color="primary" sx={{ fontSize: "100px" }} />
								<Typography variant="h6">Gold Unfixed Purchase</Typography>
							</Paper>
						</Badge>
					</Grid>
				</Grid>
			</Box>
			<Box className={classes.containers}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",

						mb: 2,
					}}
				>
					<Typography variant="h5">Vouchers</Typography>
				</div>
				<Divider sx={{ mb: 2, mt: 1 }} />

				<Grid container spacing={4}>
					<Grid item md={4}>
						<Badge badgeContent={4} color="primary">
							<Paper
								component={Link}
								to="/scrap-purchase-voucher"
								elevation={6}
								id="base-card"
								className={classes.base__card}
							>
								<RedeemRounded color="primary" sx={{ fontSize: "100px" }} />
								<Typography variant="h6">Scrap Purchase</Typography>
							</Paper>
						</Badge>
					</Grid>
				</Grid>
			</Box>

			<Box className={classes.containers}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",

						mb: 2,
					}}
				>
					<Typography variant="h5">Forms</Typography>
				</div>
				<Divider sx={{ mb: 2, mt: 1 }} />

				<Grid container spacing={4}>
					<Grid item md={4}>
						<Badge badgeContent={4} color="primary">
							<Paper
								component={Link}
								to="/customer-order-form"
								elevation={6}
								id="base-card"
								className={classes.base__card}
							>
								<RecentActorsRounded
									color="primary"
									sx={{ fontSize: "100px" }}
								/>
								<Typography variant="h6">Customer Orders</Typography>
							</Paper>
						</Badge>
					</Grid>
				</Grid>
			</Box>	
		
		</Stack>
	);
};

export default HomePage;
