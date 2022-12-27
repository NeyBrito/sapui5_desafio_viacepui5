/*global QUnit*/

sap.ui.define([
	"treinaui5/sapui5viacep/controller/AppUI5ViaCep.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AppUI5ViaCep Controller");

	QUnit.test("I should test the AppUI5ViaCep controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
