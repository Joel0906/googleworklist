jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"google/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"google/test/integration/pages/Worklist",
		"google/test/integration/pages/Object",
		"google/test/integration/pages/NotFound",
		"google/test/integration/pages/Browser",
		"google/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "google.view."
	});

	sap.ui.require([
		"google/test/integration/WorklistJourney",
		"google/test/integration/ObjectJourney",
		"google/test/integration/NavigationJourney",
		"google/test/integration/NotFoundJourney",
		"google/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});