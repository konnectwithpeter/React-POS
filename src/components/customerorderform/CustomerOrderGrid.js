"use strict";

import { Button } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { NumericCellEditor } from "../reusable/NumericCellEditor";
import "../reusable/styles.css";

const getRowData = () => {
	var rowData = [];
	for (var i = 0; i < 5; i++) {
		rowData.push({
			make: "Toyota",
			model: "Celica",
			price: 35000 + i * 1000,
			field4: "Sample XX",
			field5: "Sample 22",
			field6: "Sample 23",
		});
		rowData.push({
			make: "Ford",
			model: "Mondeo",
			price: 32000 + i * 1000,
			field4: "Sample YY",
			field5: "Sample 24",
			field6: "Sample 25",
		});
		rowData.push({
			make: "Porsche",
			model: "Boxster",
			price: 72000 + i * 1000,
			field4: "Sample ZZ",
			field5: "Sample 26",
			field6: "Sample 27",
		});
	}
	return rowData;
};

const CustomerOrderGrid = () => {
	const gridRef = useRef();
	const containerStyle = useMemo(
		() => ({ width: "100%", height: "180px" }),
		[]
	);
	const gridStyle = useMemo(() => ({ height: "180px", width: "100%" }), []);
	const [rowData, setRowData] = useState(getRowData());

	const [columnDefs, setColumnDefs] = useState([
		{
			field: "S#",
			editable: false,
			maxWidth: 50,
			cellEditor: NumericCellEditor,
		},

		{
			field: "itemCode",
			headerName: "ItemCode",
			editable: true,
			maxWidth: 100,
		},
		{
			field: "itemName",
			headerName: "ItemName",
			editable: true,
		},
		{
			field: "purity",
			headerName: "Purity",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 100,
		},
		{
			field: "mcType",
			headerName: "McType",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 100,
		},
		{
			field: "qty",
			headerName: "Qty",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 100,
		},
		{
			field: "grossWgt",
			headerName: "Gross Wgt",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 100,
		},
		{
			field: "stoneWgt",
			headerName: "StoneWgt",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 100,
		},

		{
			field: "netWgt",
			headerName: "Net Wgt",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 100,
		},
		{
			field: "pureWgt",
			headerName: "Pure Wgt",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 100,
		},

		{
			field: "rateGm",
			headerName: "Rate Gm",
			maxWidth: 100,
		},

		{
			field: "totalAmount",
			headerName: "TotalAmount",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 110,
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
				data.itemCode +
				", " +
				data.itemName +
				", " +
				data.purity +
				", " +
				data.mcType +
				", " +
				data.qty +
				", " +
				data.grossWgt +
				", " +
				data.stoneWgt +
				", " +
				data.netwgt +
				", " +
				data.pureWgt +
				", " +
				data.rateGm +
				", " +
				data.totalAmount +
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
		</div>
	);
};
export default CustomerOrderGrid;
