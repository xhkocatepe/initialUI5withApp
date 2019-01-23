sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("fc.com.ittr.sf.lms.wfe.ui.fc.controller.Wizard", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf fc.com.ittr.sf.lms.wfe.ui.fc.view.Wizard
		 */
		onInit: function () {

		},
		onClick : function(){
			window.alert("hello");
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf fc.com.ittr.sf.lms.wfe.ui.fc.view.Wizard
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf fc.com.ittr.sf.lms.wfe.ui.fc.view.Wizard
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf fc.com.ittr.sf.lms.wfe.ui.fc.view.Wizard
		 */
		//	onExit: function() {
		//
		//	}

	});

});