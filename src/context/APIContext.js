import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
let APIContext = createContext();
export default APIContext;
export const APIProvider = (props) => {
	//global start section for urls in the entire project
	const backendUrl =
		"http://sigmajwelapi-dev.eba-x3pmrmsb.us-east-1.elasticbeanstalk.com/api/Inventory/FillCombobox?CompanyId=1";
	const frontendUrl = "http://127.0.0.1:3000/";

	let [account, setAccount] = useState([]);
	let [accountGroup, setAccountGroup] = useState([]);
	let [locations, setLocations] = useState([]);
	let [items, setItems] = useState([]);
	let [itemType, setItemType] = useState([]);
	let [itemCat, setItemCat] = useState([]);
	let [itemSubcat, setItemSubcat] = useState([]);
	let [itemBrand, setItemBrand] = useState([]);
	let [goldPurity, setGoldPurity] = useState([]);
	let [goldColor, setGoldColor] = useState([]);
	let [diamondClarity, setDiamondClarity] = useState([]);
	let [diamondColor, setDiamondColor] = useState([]);
	let [diamondCut, setDiamondCut] = useState([]);
	let [stoneType, setStoneType] = useState([]);
	let [itemModel, setItemModel] = useState([]);
	let [metalType, setMetalType] = useState([]);
	let [customers, setCustomers] = useState([]);
	let [suppliers, setSuppliers] = useState([]);
	let [suppliersnCustommers, setSuppliersnCustommers] = useState([]);
	let [currency, setCurrency] = useState([]);
	let [companies, setCompanies] = useState([]);
	let [sysUsers, setSysUsers] = useState([]);
	let [salesman, setSalesman] = useState([]);
	let [country, setCountry] = useState([]);
	let [payType, setPayType] = useState([]);
	let [goldCat, setGoldCat] = useState([]);
	let [diamondCat, setDiamondCat] = useState([]);
	let [origin, setOrigin] = useState([]);

	let [loading, setLoading] = useState(true);

	let params = [
		["setAccount", "ACT"],
		["setAccountGroup", "ACT_GROUP"],
		["setLocations", "LOC"],
		["setItems", "ITEMS"],
		["setItemType", "ITM_TYPE"],
		["setItemCat", "ITM_CAT"],
		["setItemSubcat", "ITM_SUBCAT"],
		["setItemBrand", "ITM_BRAND"],
		["setGoldPurity", "ITM_GOLDPURITY"],
		["setGoldColor", "ITM_GOLDCOLOR"],
		["setDiamondClarity", "ITM_DCLARITY"],
		["setDiamondColor", "ITM_DCOLOR"],
		["setDiamondCut", "ITM_DCUT"],
		["setStoneType", "ITM_STONETYPE"],
		["setItemModel", "ITM_MODEL"],
		["setMetalType", "ITM_METAL"],
		["setCustomers", "PRT_C"],
		["setSuppliers", "PRT_S"],
		["setSuppliersnCustommers", "PRT_ALL"],
		["setCurrency", "CUR"],
		["setCompanies", "SYS_COMPANY"],
		["setSysUsers", "SYS_USER"],
		["setSalesman", "SMAN"],
		["setCountry", "COUNTRY"],
		["setPayType", "PAYTYPE"],
		["BANK", "BANK"],
		["setGoldCat", "ITM_GCAT"],
		["setDiamondCat", "ITM_DCAT"],
		["setOrigin", "ITM_ORIGIN"],
	];


	let setVariables = () => {
		for (let value of params) {
			console.log(value);
		}
		//setAccount(axios.get(`${backendUrl}&QueryType=LOC&ConditionString`).data);
	
	};

	useEffect(() => {
		setVariables();
	}, []);

	// let getContextVariables = async()=>{
	// 	let response = await fetch(``, {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify({
	// 		}),
	// 	});

	// 	let data = await response.json();
	// }

	let contextData = {
		API_URL: backendUrl,
		BASE_URL: frontendUrl,
		locations: locations,
		salesman: salesman,
	};
	return (
		<APIContext.Provider value={contextData}>
			{props.children}
		</APIContext.Provider>
	);
};
