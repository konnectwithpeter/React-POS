import {
	CardGiftcardRounded, MenuRounded, ReceiptLongRounded,
	ReceiptRounded
} from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { NestedMenuItem } from "mui-nested-menu";
import React from "react";
import { Link } from "react-router-dom";

const NavMainButton = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
		window.scroll(0, 0);
	};

	return (
		<div>
			<MenuRounded
				size="large"
				color="primary"
				sx={{
					"&:hover": {
						border: "1px solid rgba(0, 0, 0, 0.1)",
						backgroundColor: "rgb(250,250,250)",
						cursor: "pointer",
					},
					margin: 0,
					border: "1px solid rgba(0, 0, 0, 0.2)",
					borderRadius: "5px",
					p: 0.3,
					cursor: "pointer",
				}}
				onClick={handleClick}
			/>
			<Menu
				sx={{ mt: 3 }}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<NestedMenuItem
					leftIcon={<ReceiptRounded />}
					label="Invoices"
					parentMenuOpen={open}
				>
					<MenuItem
						onClick={handleClose}
						component={Link}
						to="/gold-retail-sales-invoice"
					>
						Gold Retail Sales
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						component={Link}
						to="/gold-unfixed-purchase-invoice"
					>
						Gold Unfixed Purchase
					</MenuItem>
				</NestedMenuItem>

				<NestedMenuItem
					leftIcon={<CardGiftcardRounded />}
					label="Vouchers"
					parentMenuOpen={open}
				>
					<MenuItem
						onClick={handleClose}
						component={Link}
						to="/scrap-purchase-voucher"
					>
						Scrap Purchase
					</MenuItem>
				</NestedMenuItem>

				<NestedMenuItem
					leftIcon={<ReceiptLongRounded />}
					label="Forms"
					parentMenuOpen={open}
				>
					<MenuItem
						onClick={handleClose}
						component={Link}
						to="/customer-order-form"
					>
						Customer Order
					</MenuItem>

					{/* <NestedMenuItem
						leftIcon={<ReceiptRounded />}
						rightIcon={<ArrowRight />}
						label="Go deeper!"
						parentMenuOpen={open}
					>
						<MenuItem onClick={handleClose}>Standard Menu Item!</MenuItem>
						<ListItemIcon
							onClick={handleClose}
							leftIcon={<Close />}
							rightIcon={<Save />}
							label="Icon Menu Item"
						/>
					</NestedMenuItem> */}
				</NestedMenuItem>
			</Menu>
		</div>
	);
};

export default NavMainButton;
