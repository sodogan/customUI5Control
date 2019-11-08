sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("myFiori.controller.App", {
		onInit: function () {

		},
		onClick: function () {
			MessageBox.information(
				"You have clicked the Custom Button.");
		}
	});
});