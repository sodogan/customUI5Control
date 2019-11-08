sap.ui.define(["sap/ui/core/Control"],
	function (Control) {
		return Control.extend("sodogan.custom.controls.myButton", {
			metadata: {
				properties: {
					"width": {
						type: "sap.ui.core.CSSSize",
						defaultValue: "300px"
					},
					"height": {
						type: "sap.ui.core.CSSSize",
						defaultValue: "100px"
					},
					"text": {
						type: "string"
					}

				},
				methods: {},
				aggregations: {},
				events: {
					"hover": {

					}
				}
			},
			init: function () {},
			renderer: function (oRm, oControl) {
				oRm.write("<div");
				oRm.write("width", oControl.getProperty('width'));
				oRm.write("height", oControl.getProperty('height'));
				oRm.writeStyles();
				oRm.write(">");
				oRm.write("<button type='button'");
				oRm.write("width", oControl.getProperty('width'));
				oRm.write("height", oControl.getProperty('height'));
				oRm.writeStyles();
				oRm.write(">");
				oRm.write(oControl.getProperty('text'));
				oRm.write("</button>");
				oRm.write("</div>");

			}
		});
	});