"use strict";

import { Box, Paper } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { NumericCellEditor } from "../reusable/NumericCellEditor";
import "../reusable/styles.css";
import TextInputField from "../reusable/TextInputField";

const getRowData = () => {
	var rowData = [];
	for (var i = 0; i < 5; i++) {
		rowData.push({
			itemDesc: "Toyota",
			model: "Celica",
			price: 35000 + i * 1000,
			field4: "Sample XX",
			field5: "Sample 22",
			field6: "Sample 23",
		});
		rowData.push({
			itemDesc: "Ford",
			model: "Mondeo",
			price: 32000 + i * 1000,
			field4: "Sample YY",
			field5: "Sample 24",
			field6: "Sample 25",
		});
		rowData.push({
			itemDesc: "Porsche",
			model: "Boxster",
			price: 72000 + i * 1000,
			field4: "Sample ZZ",
			field5: "Sample 26",
			field6: "Sample 27",
		});
	}
	return rowData;
};

const PaymentType = () => {
	const gridRef = useRef();
	const containerStyle = useMemo(
		() => ({ width: "100%", height: "160px", marginTop: ".5em" }),
		[]
	);
	const gridStyle = useMemo(() => ({ height: "160px", width: "100%" }), []);
	const [rowData, setRowData] = useState(getRowData());

	const [columnDefs, setColumnDefs] = useState([
		{
			field: "S#",
			editable: false,
			maxWidth: 50,
			cellEditor: NumericCellEditor,
		},
		{
			field: "payId",
			headerName: "PayId",
			editable: true,
			maxWidth: 100,
		},

		{
			field: "payType",
			headerName: "Pay Type",
			cellEditor: "agSelectCellEditor",
			cellEditorParams: {
				values: ["Porsche", "Toyota", "Ford", "AAA", "BBB", "CCC"],
			},
			editable: true,
			minWidth: 100,
		},
		{
			field: "amount",
			headerName: "Amount",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 100,
		},
	]);
	const defaultColDef = useMemo(() => {
		return {
			flex: 1,
			editable: true,
		};
	}, []);

	const onCellValueChanged = useCallback((event) => {
		console.log(
			"onCellValueChanged: " + event.colDef.field + " = " + event.newValue
		);
	}, []);

	const onRowValueChanged = useCallback((event) => {
		var data = event.data;

		console.log(
			"onRowValueChanged: (" +
				data.payId +
				", " +
				data.payType +
				", " +
				data.amount +
				")"
		);
	}, []);

	const onBtStopEditing = useCallback(() => {
		gridRef.current.api.stopEditing();
	}, []);

	const onBtStartEditing = useCallback(() => {
		gridRef.current.api.setFocusedCell(1, "make");
		gridRef.current.api.startEditingCell({
			rowIndex: 1,
			colKey: "make",
		});
	}, []);

	return (
		<div style={containerStyle}>
			<div className="example-wrapper">
				{/* <div style={{ marginBottom: "5px", display: "flex", gap: 3 }}>
					<Button
						variant="outlined"
						style={{ fontSize: "12px" }}
						color="error"
						size="small"
						onClick={onBtStartEditing}
					>
						Delete Row
					</Button>
					<Button
						variant="contained"
						style={{ fontSize: "12px" }}
						color="secondary"
						size="small"
						onClick={onBtStopEditing}
					>
						Save Row
					</Button>
				</div> */}

				<div style={gridStyle} className="ag-theme-alpine">
					<AgGridReact
						component={Paper}
						ref={gridRef}
						rowData={rowData}
						columnDefs={columnDefs}
						defaultColDef={defaultColDef}
						editType={"fullRow"}
						onCellValueChanged={onCellValueChanged}
						onRowValueChanged={onRowValueChanged}
					></AgGridReact>
				</div>
			</div>
			<Box
				style={{
					display: "flex",
					justifyContent: "flex-end",
					padding: ".2em",
					alignItems: "center",
					gap: 2,
				}}
			>
				<TextInputField
					defaultValue="Created By: Admin"
					InputProps={{
						readOnly: true,
					}}
				/>

				<TextInputField
					defaultValue="Current Login: Admin"
					InputProps={{
						readOnly: true,
					}}
				/>
			</Box>
		</div>
	);
};
export default PaymentType;
