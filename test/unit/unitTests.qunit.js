/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"treinaui5/sapui5viacep/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
