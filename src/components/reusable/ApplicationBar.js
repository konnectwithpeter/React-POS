import {
	AppBar,
	Toolbar,
	Typography,
	useScrollTrigger,
	Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { default as React } from "react";
import { Link, useLocation } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import NavMainButton from "./NavMainButton";

const ApplicationBar = (props) => {
	function ElevationScroll(props) {
		const { children, window } = props;

		const trigger = useScrollTrigger({
			disableHysteresis: true,
			threshold: 0,
			target: window ? window() : undefined,
		});
		return React.cloneElement(children, {
			elevation: trigger ? 2 : 0,
			sx: trigger
				? { backgroundColor: "rgb(255,255,255, .96)" }
				: {
						backgroundColor: "rgb(245,245,245, .0)",
						borderBottom: "1px solid rgb(0,0,0, .05)",
				  },
		});
	}

	ElevationScroll.propTypes = {
		children: PropTypes.element.isRequired,
		window: PropTypes.func,
	};

	let location = useLocation();

	return (
		<ElevationScroll>
			<AppBar position="fixed" sx={{ zIndex: 2, padding: 0 }}>
				<Toolbar
					variant="dense"
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						backgroundColor: "transparent",
					}}
				>
					<Box sx={{ display: "flex", gap:2, alignItems:"center" }}>
						<Typography
							component={Link}
							variant="h6"
							to="/"							
							sx={{ textDecoration: "none" }}
						>
							Retail POS
						</Typography>
						<NavMainButton />
					</Box>
					<AccountMenu />
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
};

export default ApplicationBar;
