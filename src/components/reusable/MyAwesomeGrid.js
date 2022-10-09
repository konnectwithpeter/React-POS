"use strict";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { NumericCellEditor } from "./NumericCellEditor";
import "./styles.css";

const getRowData = () => {
	var rowData = [];
	for (var i = 0; i < 10; i++) {
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

const MyAwesomeGrid = () => {
	const gridRef = useRef();
	const containerStyle = useMemo(
		() => ({ width: "100%", height: "500px" }),
		[]
	);
	const gridStyle = useMemo(() => ({ height: "500px", width: "100%" }), []);
	const [rowData, setRowData] = useState(getRowData());
	const [columnDefs, setColumnDefs] = useState([
		{
			field: "make",
			cellEditor: "agSelectCellEditor",
			cellEditorParams: {
				values: ["Porsche", "Toyota", "Ford", "AAA", "BBB", "CCC"],
			},
		},
		{ field: "model" },
		{ field: "field4", headerName: "Read Only", editable: false },
		{ field: "price", cellEditor: NumericCellEditor },
		{
			headerName: "Suppress Navigable",
			field: "field5",
			suppressNavigable: true,
			minWidth: 200,
		},
		{ headerName: "Read Only", field: "field6", editable: false },
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
				data.make +
				", " +
				data.model +
				", " +
				data.price +
				", " +
				data.field5 +
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
				<div style={{ marginBottom: "5px" }}>
					<button style={{ fontSize: "12px" }} onClick={onBtStartEditing}>
						Start Editing Line 2
					</button>
					<button style={{ fontSize: "12px" }} onClick={onBtStopEditing}>
						Stop Editing
					</button>
				</div>

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
export default MyAwesomeGrid;
