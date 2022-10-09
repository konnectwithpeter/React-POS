import {
	FormControl,
	FormHelperText,
	OutlinedInput,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";

const TextInputField = (props) => {
	let { label, onChange, value, classname, ...others } = props;

	return (
		<FormControl>
			<TextField
				label={label}
				className={classname}
				size="small"
				onChange={onChange}
				value={value}
				{...others}
				inputProps={{
					style: {
						padding: 5,
					},
				}}
			/>

			{/* <TextField
				inputProps={{
					style: {
						padding: 5,
					},
				}}
				label={label}
				className={classname}
				size="small"
				onChange={onChange}
				value={value}
				{...others}
				defaultValue="Small"
			/> */}
		</FormControl>
	);
};

export default TextInputField;
