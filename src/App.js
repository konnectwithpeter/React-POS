import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ApplicationBar from "./components/reusable/ApplicationBar";
import ControlMenu from "./components/reusable/ControlMenu";
import GoldRatesPopup from "./components/reusable/GoldRatesPopup";
import APIContext, { APIProvider } from "./context/APIContext";
import CustomerOrderForm from "./pages/CustomerOrderForm";
import GoldRetailSalesInvoice from "./pages/GoldRetailSalesInvoice";
import GoldUnfixedPurchaseInvoice from "./pages/GoldUnfixedPurchaseInvoice";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import ScrapPurchaseVoucher from "./pages/ScrapPurchaseVoucher";
import SignUpPage from "./pages/SignUpPage";

const theme = createTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: "#ff4400",

			// contrastText: will be calculated to contrast with palette.primary.main
		},
	},
	components: {
		MuiInputBase: {
			styleOverrides: {
				root: {
					backgroundColor: "white !important",
					fontSize: ".75 rem",
					"&.Mui-focused": {
						backgroundColor: "yellow",
					},
				},
			},
		},
	},
});

const App = () => {
	let location = useLocation();
	let [sidebarOpen, setSidebarOpen] = useState(false);
	let [currentForm, setCurrentForm] = useState(null);
	const [open, setOpen] = React.useState(false);

	const handleClickOpenPopper = () => {
		setOpen(true);
	};

	const handleClosePopper = () => {
		setOpen(false);
	};

	let props = { handleClosePopper, handleClickOpenPopper, open, setOpen };
	return (
		<APIProvider>
			<ThemeProvider theme={theme}>
				<Box sx={{ flexGrow: 1, mb: "3em" }}>
					<ApplicationBar {...props} />
				</Box>

				<Box
					sx={{
						maxWidth: "100vw",
						position: "relative",
						minHeight: "92.5vh",
					}}
				>
					<Routes>
						<Route path="/create-account" element={<SignUpPage />} />
						<Route path="/login" element={<LoginPage />} />

						<Route path="/" exact element={<HomePage />} />
						<Route
							path="/customer-order-form"
							exact
							element={<CustomerOrderForm {...props} />}
						/>
						<Route
							path="/scrap-purchase-voucher"
							element={<ScrapPurchaseVoucher {...props} />}
						/>
						<Route
							path="/gold-retail-sales-invoice"
							element={<GoldRetailSalesInvoice {...props} />}
						/>
						<Route
							path="/gold-unfixed-purchase-invoice"
							element={<GoldUnfixedPurchaseInvoice {...props} />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
					{location.pathname === "/create-account" ||
					location.pathname === "/login" ||
					location.pathname === "/" ? null : (
						<ControlMenu />
					)}
					<GoldRatesPopup {...props} />
				</Box>
			</ThemeProvider>
		</APIProvider>
	);
};

export default App;
