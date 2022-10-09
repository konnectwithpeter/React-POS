import { InsightsRounded } from "@mui/icons-material";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Fab,
	Slide,
} from "@mui/material";
import React from "react";
import RatesTable from "./RatesTable";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const GoldRatesPopup = (props) => {
	let { handleClosePopper, handleClickOpenPopper, open, setOpen } = props;

	return (
		<>
			<Fab
				variant="extended"
				size="small"
				color="info"
				sx={{
					position: "sticky",
					bottom: "5%",
					left: "90%",
					maxWidth: "fit-content",
				}}
				onClick={() => setOpen(true)}
			>
				<InsightsRounded sx={{ mr: 1 }} />
				Gold Rate
			</Fab>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				maxWidth="xs"
				keepMounted
				onClose={handleClosePopper}
				aria-describedby="alert-dialog-slide-description"
				PaperProps={{ sx: { position: "fixed", top: 50, right: 10, m: 0 } }}
			>
				<DialogTitle>Gold Rating</DialogTitle>
				<DialogContent>
					<RatesTable />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClosePopper}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default GoldRatesPopup;
