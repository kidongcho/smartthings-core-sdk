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
		'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
	},
}
const response = {
	'items': [
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T22:22:44.000+0000',
			'text': 'vibration of Kitchen Back Door is: No vibration',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'accelerationSensor',
			'attribute': 'acceleration',
			'value': 'inactive',
			'data': {},
			'translatedAttributeName': 'vibration',
			'translatedAttributeValue': 'No vibration',
			'epoch': 1586816564199,
			'hash': 662077805,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T22:22:42.000+0000',
			'text': 'contact of Kitchen Back Door is: Closed',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'contactSensor',
			'attribute': 'contact',
			'value': 'closed',
			'data': {},
			'translatedAttributeName': 'contact',
			'translatedAttributeValue': 'Closed',
			'epoch': 1586816562407,
			'hash': 1224148553,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T22:22:40.000+0000',
			'text': 'vibration of Kitchen Back Door is: Vibration detected',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'accelerationSensor',
			'attribute': 'acceleration',
			'value': 'active',
			'data': {},
			'translatedAttributeName': 'vibration',
			'translatedAttributeValue': 'Vibration detected',
			'epoch': 1586816560190,
			'hash': 3155813052,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T22:16:33.000+0000',
			'text': 'temperature of Kitchen Back Door is: 71.0°F',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'temperatureMeasurement',
			'attribute': 'temperature',
			'value': 71,
			'unit': 'F',
			'data': {},
			'translatedAttributeName': 'temperature',
			'translatedAttributeValue': '71.0',
			'epoch': 1586816193138,
			'hash': 354025605,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T21:51:33.000+0000',
			'text': 'temperature of Kitchen Back Door is: 72.0°F',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'temperatureMeasurement',
			'attribute': 'temperature',
			'value': 72,
			'unit': 'F',
			'data': {},
			'translatedAttributeName': 'temperature',
			'translatedAttributeValue': '72.0',
			'epoch': 1586814693071,
			'hash': 523827018,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T21:16:32.000+0000',
			'text': 'temperature of Kitchen Back Door is: 73.0°F',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'temperatureMeasurement',
			'attribute': 'temperature',
			'value': 73,
			'unit': 'F',
			'data': {},
			'translatedAttributeName': 'temperature',
			'translatedAttributeValue': '73.0',
			'epoch': 1586812592817,
			'hash': 4038647584,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T21:11:32.000+0000',
			'text': 'temperature of Kitchen Back Door is: 72.0°F',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'temperatureMeasurement',
			'attribute': 'temperature',
			'value': 72,
			'unit': 'F',
			'data': {},
			'translatedAttributeName': 'temperature',
			'translatedAttributeValue': '72.0',
			'epoch': 1586812292801,
			'hash': 269158554,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T21:01:32.000+0000',
			'text': 'temperature of Kitchen Back Door is: 73.0°F',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'temperatureMeasurement',
			'attribute': 'temperature',
			'value': 73,
			'unit': 'F',
			'data': {},
			'translatedAttributeName': 'temperature',
			'translatedAttributeValue': '73.0',
			'epoch': 1586811692700,
			'hash': 1479436339,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:46:32.000+0000',
			'text': 'temperature of Kitchen Back Door is: 72.0°F',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'temperatureMeasurement',
			'attribute': 'temperature',
			'value': 72,
			'unit': 'F',
			'data': {},
			'translatedAttributeName': 'temperature',
			'translatedAttributeValue': '72.0',
			'epoch': 1586810792649,
			'hash': 2571120462,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:44:44.000+0000',
			'text': 'contact of Kitchen Back Door is: Open',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'contactSensor',
			'attribute': 'contact',
			'value': 'open',
			'data': {},
			'translatedAttributeName': 'contact',
			'translatedAttributeValue': 'Open',
			'epoch': 1586810684360,
			'hash': 1018391854,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:44:42.000+0000',
			'text': 'vibration of Kitchen Back Door is: No vibration',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'accelerationSensor',
			'attribute': 'acceleration',
			'value': 'inactive',
			'data': {},
			'translatedAttributeName': 'vibration',
			'translatedAttributeValue': 'No vibration',
			'epoch': 1586810682368,
			'hash': 3589231287,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:44:39.000+0000',
			'text': 'contact of Kitchen Back Door is: Closed',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'contactSensor',
			'attribute': 'contact',
			'value': 'closed',
			'data': {},
			'translatedAttributeName': 'contact',
			'translatedAttributeValue': 'Closed',
			'epoch': 1586810679186,
			'hash': 2202210416,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:44:38.000+0000',
			'text': 'vibration of Kitchen Back Door is: Vibration detected',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'accelerationSensor',
			'attribute': 'acceleration',
			'value': 'active',
			'data': {},
			'translatedAttributeName': 'vibration',
			'translatedAttributeValue': 'Vibration detected',
			'epoch': 1586810678308,
			'hash': 277801414,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:42:06.000+0000',
			'text': 'vibration of Kitchen Back Door is: No vibration',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'accelerationSensor',
			'attribute': 'acceleration',
			'value': 'inactive',
			'data': {},
			'translatedAttributeName': 'vibration',
			'translatedAttributeValue': 'No vibration',
			'epoch': 1586810526324,
			'hash': 2968930542,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:42:04.000+0000',
			'text': 'vibration of Kitchen Back Door is: Vibration detected',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'accelerationSensor',
			'attribute': 'acceleration',
			'value': 'active',
			'data': {},
			'translatedAttributeName': 'vibration',
			'translatedAttributeValue': 'Vibration detected',
			'epoch': 1586810524269,
			'hash': 24908389,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:36:32.000+0000',
			'text': 'temperature of Kitchen Back Door is: 71.0°F',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'temperatureMeasurement',
			'attribute': 'temperature',
			'value': 71,
			'unit': 'F',
			'data': {},
			'translatedAttributeName': 'temperature',
			'translatedAttributeValue': '71.0',
			'epoch': 1586810192718,
			'hash': 2592398795,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:31:57.000+0000',
			'text': 'vibration of Kitchen Back Door is: No vibration',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'accelerationSensor',
			'attribute': 'acceleration',
			'value': 'inactive',
			'data': {},
			'translatedAttributeName': 'vibration',
			'translatedAttributeValue': 'No vibration',
			'epoch': 1586809917555,
			'hash': 1858152903,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:31:54.000+0000',
			'text': 'vibration of Kitchen Back Door is: Vibration detected',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'accelerationSensor',
			'attribute': 'acceleration',
			'value': 'active',
			'data': {},
			'translatedAttributeName': 'vibration',
			'translatedAttributeValue': 'Vibration detected',
			'epoch': 1586809914316,
			'hash': 1972146461,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T20:31:54.000+0000',
			'text': 'contact of Kitchen Back Door is: Open',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'contactSensor',
			'attribute': 'contact',
			'value': 'open',
			'data': {},
			'translatedAttributeName': 'contact',
			'translatedAttributeValue': 'Open',
			'epoch': 1586809914311,
			'hash': 46318256,
		},
		{
			'deviceId': '10c6404e-69cf-4456-80f4-b7995f6b3578',
			'deviceName': 'Kitchen Back Door',
			'locationId': '3749dfe2-441e-45e6-a461-1fd3cef3dba6',
			'locationName': 'Darnell Drive',
			'time': '2020-04-13T18:56:34.000+0000',
			'text': 'temperature of Kitchen Back Door is: 70.0°F',
			'component': 'main',
			'componentLabel': 'Kitchen Back Door',
			'capability': 'temperatureMeasurement',
			'attribute': 'temperature',
			'value': 70,
			'unit': 'F',
			'data': {},
			'translatedAttributeName': 'temperature',
			'translatedAttributeValue': '70.0',
			'epoch': 1586804194251,
			'hash': 1007456785,
		},
	],
	'_links': {
		'next': {
			'href': 'https://api.smartthings.com/history/devices?pagingBeforeEpoch=1586804194251&pagingBeforeHash=1007456785&limit=20&oldestFirst=false&pagingOffset=0&locationId=3749dfe2-441e-45e6-a461-1fd3cef3dba6&deviceId=10c6404e-69cf-4456-80f4-b7995f6b3578',
		},
		'previous': {
			'href': 'https://api.smartthings.com/history/devices?pagingAfterEpoch=1586816564199&pagingAfterHash=662077805&limit=20&oldestFirst=false&pagingOffset=0&locationId=3749dfe2-441e-45e6-a461-1fd3cef3dba6&deviceId=10c6404e-69cf-4456-80f4-b7995f6b3578',
		},
	},
}
export default {request, response}
