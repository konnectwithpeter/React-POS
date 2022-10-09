"use strict";

import { Paper, Button } from "@mui/material";
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

const GoldPurchaseInvoiceGrid = () => {
	const gridRef = useRef();
	const containerStyle = useMemo(
		() => ({ width: "100%", height: "200px" }),
		[]
	);
	const gridStyle = useMemo(() => ({ height: "200px", width: "100%" }), []);
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
			headerName: "Item Code",
			editable: true,
			maxWidth: 100,
		},

		{
			field: "itemDesc",
			headerName: "Item Desc",
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
			headerName: "mcType",
			cellEditor: "agSelectCellEditor",
			cellEditorParams: {
				values: ["Porsche", "Toyota", "Ford", "AAA", "BBB", "CCC"],
			},
			editable: true,
			maxWidth: 100,
		},
		{
			field: "qty",
			headerName: "Qty",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 80,
		},
		{
			field: "grossWgt",
			headerName: "grossWgt",
			editable: true,
			maxWidth: 100,
		},

		{
			field: "stoneWgt",
			headerName: "stoneWgt",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 100,
		},

		{
			field: "netwgt",
			headerName: "Net Wt",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 80,
		},
		{
			field: "pureWgt",
			headerName: "pureWgt",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 80,
		},
		{
			field: "mc1",
			headerName: "mc1",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 80,
		},
		{
			field: "mc2",
			headerName: "mc2",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 80,
		},
		{
			field: "totalAmount",
			headerName: "totalAmount",
			cellEditor: NumericCellEditor,
			editable: true,
			maxWidth: 80,
		},
		{
			field: "total",
			headerName: "Total Amount",
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
				data.trType +
				", " +
				data.code +
				", " +
				data.description +
				", " +
				data.mcCost +
				", " +
				data.purity +
				", " +
				data.mcType +
				", " +
				data.qty +
				", " +
				data.grossWgt +
				", " +
				data.stwgt +
				", " +
				data.netwgt +
				", " +
				data.stValue +
				", " +
				data.mc +
				", " +
				data.rate +
				", " +
				data.total +
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
		</div>
	);
};
export default GoldPurchaseInvoiceGrid;
