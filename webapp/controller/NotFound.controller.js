sap.ui.define([
		"google/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("google.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);