import {
	Divider,
	FormControl,
	FormHelperText,
	TextField,
	Paper,
	Typography,
	Stack,
	Box,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const GoldRates = () => {
	let location = useLocation();
	return (
		<Stack component={Paper} sx={{ mt: 1, p: 1 }}>
			<Typography>Gold Rates</Typography>
			<Divider sx={{ pb: 1 }} />

			<Box sx={{ display: "flex", gap: 1 }}>
				<FormControl variant="outlined" fullWidth>
					<FormHelperText>24k</FormHelperText>
					<TextField size="small" defaultValue={16.765} readOnly />
				</FormControl>
				<FormControl variant="outlined" fullWidth>
					<FormHelperText>22k</FormHelperText>
					<TextField size="small" defaultValue={16.765} readOnly />
				</FormControl>
			</Box>
			<Box sx={{ display: "flex", gap: 1 }}>
				<FormControl variant="outlined" fullWidth>
					<FormHelperText>21k</FormHelperText>
					<TextField size="small" defaultValue={16.765} readOnly />
				</FormControl>
				<FormControl variant="outlined" fullWidth>
					<FormHelperText>18k</FormHelperText>
					<TextField size="small" defaultValue={16.765} readOnly />
				</FormControl>
			</Box>
		</Stack>
	);
};

export default GoldRates;
