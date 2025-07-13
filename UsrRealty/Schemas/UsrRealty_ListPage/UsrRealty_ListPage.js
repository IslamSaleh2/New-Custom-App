define("UsrRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealty"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 112
						},
						{
							"id": "d5d4664e-0794-8aa4-cba9-3d6a5b888d99",
							"code": "PDS_UsrPrice",
							"caption": "#ResourceString(PDS_UsrPrice)#",
							"dataValueType": 32,
							"width": 129
						},
						{
							"id": "bb6f9453-6c21-73b6-e624-7b4af52a00ff",
							"code": "PDS_UsrColumn4",
							"caption": "#ResourceString(PDS_UsrColumn4)#",
							"dataValueType": 10,
							"width": 92
						},
						{
							"id": "6f0d68e4-c680-1fa5-aba2-c8cb4bec224d",
							"code": "PDS_UsrOfferType",
							"caption": "#ResourceString(PDS_UsrOfferType)#",
							"dataValueType": 10,
							"width": 125
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrRealty",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrColumn4": {
						"modelConfig": {
							"path": "PDS.UsrColumn4"
						}
					},
					"PDS_UsrOfferType": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrRealty",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrPrice": {
							"path": "UsrPrice"
						},
						"UsrColumn4": {
							"path": "UsrColumn4"
						},
						"UsrOfferType": {
							"path": "UsrOfferType"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});