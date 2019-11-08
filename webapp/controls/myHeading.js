sap.ui.define(["sap/ui/core/Control"],
	function (Control) {
		return Control.extend("sodogan.custom.controls.myHeading", {
			metadata: {
				properties: {},
				methods: {},
				aggregations: {},
				events: {}
			},
			init: function () {},
			renderer: function (oRm, oControl) {
				oRm.write("<h1>This is a custom control</h1>");
			}
		});
	});