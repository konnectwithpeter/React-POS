import {
	FormControl,
	FormHelperText,
	TextField,
	Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";

export default function DateInputField(props) {
	let { label, onChange, value, classname, ...others } = props;
	return (
		<FormControl>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DesktopDatePicker
					inputProps={{
						style: {
							padding: 4,
							fontSize: 16,
						},
					}}
					inputFormat="MM/DD/YYYY"
					value={value}
					onChange={onChange}
					renderInput={(params) => (
						<TextField label={label} size="small" {...params} />
					)}
				/>
			</LocalizationProvider>
		</FormControl>
	);
}
