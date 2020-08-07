const request = {
	'url': 'https://api.smartthings.com/history/devices',
	'method': 'get',
	'headers': {
		'Content-Type': 'application/json;charset=utf-8',
		'Accept': 'application/json',
		'Authorization': 'Bearer 0bd82516-23d1-4a86-9c89-75a2369ab70e',
	},
	'params': {
		'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
		'pagingAfterEpoch': 1586816914302,
		'pagingAfterHash': 3867841901,
	},
}
const response = {
	'items': [
		{
			'deviceId': '9883434a-d115-4d6a-a3d3-41996c08f0b9',
			'deviceName': 'Floor Heater',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T22:28:40.000+0000',
			'text': 'power meter of Floor Heater is: 729.8W',
			'component': 'main',
			'componentLabel': 'Floor Heater',
			'capability': 'powerMeter',
			'attribute': 'power',
			'value': 729.8,
			'data': {},
			'translatedAttributeName': 'power meter',
			'translatedAttributeValue': '729.8',
			'epoch': 1586816920281,
			'hash': 3867841914,
		},
		{
			'deviceId': '9883434a-d115-4d6a-a3d3-41996c08f0b9',
			'deviceName': 'Floor Heater',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T22:28:38.000+0000',
			'text': 'power meter of Floor Heater is: 730.7W',
			'component': 'main',
			'componentLabel': 'Floor Heater',
			'capability': 'powerMeter',
			'attribute': 'power',
			'value': 730.7,
			'data': {},
			'translatedAttributeName': 'power meter',
			'translatedAttributeValue': '730.7',
			'epoch': 1586816918266,
			'hash': 3017400352,
		},
		{
			'deviceId': '9883434a-d115-4d6a-a3d3-41996c08f0b9',
			'deviceName': 'Floor Heater',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T22:28:37.000+0000',
			'text': 'power meter of Floor Heater is: 732.0W',
			'component': 'main',
			'componentLabel': 'Floor Heater',
			'capability': 'powerMeter',
			'attribute': 'power',
			'value': 732,
			'data': {},
			'translatedAttributeName': 'power meter',
			'translatedAttributeValue': '732.0',
			'epoch': 1586816917255,
			'hash': 1227401644,
		},
		{
			'deviceId': '9883434a-d115-4d6a-a3d3-41996c08f0b9',
			'deviceName': 'Floor Heater',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T22:28:35.000+0000',
			'text': 'power meter of Floor Heater is: 732.6W',
			'component': 'main',
			'componentLabel': 'Floor Heater',
			'capability': 'powerMeter',
			'attribute': 'power',
			'value': 732.6,
			'data': {},
			'translatedAttributeName': 'power meter',
			'translatedAttributeValue': '732.6',
			'epoch': 1586816915323,
			'hash': 711157348,
		},
		{
			'deviceId': '9883434a-d115-4d6a-a3d3-41996c08f0b9',
			'deviceName': 'Floor Heater',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T22:28:34.000+0000',
			'text': 'power meter of Floor Heater is: 734.1W',
			'component': 'main',
			'componentLabel': 'Floor Heater',
			'capability': 'powerMeter',
			'attribute': 'power',
			'value': 734.1,
			'data': {},
			'translatedAttributeName': 'power meter',
			'translatedAttributeValue': '734.1',
			'epoch': 1586816914302,
			'hash': 2637849626,
		},
	],
	'_links': {
		'next': {
			'href': 'https://api.smartthings.com/history/devices?pagingBeforeEpoch=1586816914302&pagingBeforeHash=2637849626&limit=20&oldestFirst=false&pagingOffset=0&locationId=3749dfe2-441e-45e6-a461-1fd3cef3dba6',
		},
		'previous': {
			'href': 'https://api.smartthings.com/history/devices?pagingAfterEpoch=1586816920281&pagingAfterHash=3867841914&limit=20&oldestFirst=false&pagingOffset=0&locationId=3749dfe2-441e-45e6-a461-1fd3cef3dba6',
		},
	},
}
export default {request, response}