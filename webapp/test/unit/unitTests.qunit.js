/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fc/com/ittr/sf/lms/wfe/ui/fc/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});