WT.SPA.on('/au/portal/quote/vehicle.*#/confirm-vehicle', function () {
    try {
        //!-##surveywto--START##
        // {"widgetType":"surveywto","content":"{\"title\":\"Before you go\",\"logo\":\"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIzLjMgLTcuNDQ4NTcxNDcxMDk2NTUgMzkwLjM0OTk5OTk5OTk5OTk3IDEyOS43NjUzMzQwMzg1MDYxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSI4ODYiPjxnIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTIxNC4yNCA5NC40MWE2My4yNCA2My4yNCAwIDAgMC0xOC0xMS43MiA1MC42MiA1MC42MiAwIDAgMC0xOS41OS00IDM5LjEzIDM5LjEzIDAgMCAwLTUuNTIuNDMgMzIuNTggMzIuNTggMCAwIDAtNS4xOSAxLjIzIDQxIDQxIDAgMCAwIDE0LjQgMTMgMzguODEgMzguODEgMCAwIDAgMTguNDEgNC40NSAzNS42IDM1LjYgMCAwIDAgNy40My0uODIgNTEgNTEgMCAwIDAgOC4wNi0yLjYxbTEyLTguODhhNDEuNDEgNDEuNDEgMCAwIDAgMTEuMzEtMjkuNTggMzkuMzMgMzkuMzMgMCAwIDAtMi43My0xNC40OCAzOS43NiAzOS43NiAwIDAgMC04LTEyLjU4QTQxIDQxIDAgMCAwIDIxMy42MyAxOWEzOS4xMiAzOS4xMiAwIDAgMC0zMC40NS0uMjUgMzYuOTIgMzYuOTIgMCAwIDAtMTIuMzggOC40NiA0MS4xMyA0MS4xMyAwIDAgMC04LjkxIDEzLjU5IDQxLjg1IDQxLjg1IDAgMCAwLTMuMTIgMTYgMzYgMzYgMCAwIDAgLjM5IDUuMzkgNTQgNTQgMCAwIDAgMS4yNSA2IDI5LjE3IDI5LjE3IDAgMCAxIDgtMi43MyA1MC4wNyA1MC4wNyAwIDAgMSAxMC0uODggNjAuMzQgNjAuMzQgMCAwIDEgMjQuNTEgNS4zOSA4NS40NiA4NS40NiAwIDAgMSAyMy4zNCAxNS40OG0yLjEgMTkuMDhhNTYuNCA1Ni40IDAgMCAxLTQ4LjcyIDUuODIgNTQuNDMgNTQuNDMgMCAwIDEtMTYuMTMtOC45NSA1NS4yMyA1NS4yMyAwIDAgMS0xNS42MS0xOS45NCA1OS43NiA1OS43NiAwIDAgMS01LjQzLTI1LjUgNTUuMTkgNTUuMTkgMCAwIDEgNC4zNC0yMS42NCA1OS41OCA1OS41OCAwIDAgMSAxMi43NC0xOC41MkE1NS41NiA1NS41NiAwIDAgMSAxNzcuMiAzLjk5YTU0IDU0IDAgMCAxIDIwLjg0LTQgNTUuNjYgNTUuNjYgMCAwIDEgMjEuMjUgNCA1Ny40NiA1Ny40NiAwIDAgMSAzMC40NiAzMC43MyA1OS44NyA1OS44NyAwIDAgMSA0LjIzIDIyLjY5IDU3LjM2IDU3LjM2IDAgMCAxLTMuNDMgMTkuNzYgNTQuMTMgNTQuMTMgMCAwIDEtMTAuMjggMTYuOTMgMjguMTMgMjguMTMgMCAwIDAgNiAyIDMwIDMwIDAgMCAwIDYuNTguNjZoMnYxNS4yNWgtMS40M2E0NCA0NCAwIDAgMS0xMi4zNS0xLjg1IDY0LjczIDY0LjczIDAgMCAxLTEyLjgtNS41OW01MS40NS01Ni42OGg1LjFjOC4yNCAwIDE0LjEyLTEuMjUgMTcuNjctMy43NXM1LjI0LTYuNjQgNS4yNC0xMi40NGMwLTUuMS0xLjU5LTguODUtNC43Ni0xMS4zMnMtOC4wOS0zLjctMTQuNjUtMy43aC04LjZ6bS0uMTQgNDkuMThoMTIuNjdxMTEgMCAxNi4yNC00LjE1YzMuNDktMi43NSA1LjIzLTcgNS4yMy0xMi43OHEwLTkuMzctNS40My0xNC4yMmMtMy42My0zLjIxLTktNC44Ni0xNi00Ljg2aC0xMi42NXYzNnptOC05NS40MWMxMS44IDAgMjAuNzIgMi41OCAyNi44NiA3LjcyczkuMTcgMTIuNjcgOS4xNyAyMi41MmEyMy44NCAyMy44NCAwIDAgMS0zIDEyLjA3IDI0LjIzIDI0LjIzIDAgMCAxLTguOCA4LjY0IDIyLjg3IDIyLjg3IDAgMCAxIDEyLjc4IDkuMzEgMjguMjIgMjguMjIgMCAwIDEgNC43MSAxNi40NCAzNy4xIDM3LjEgMCAwIDEtMi43NSAxNC41NSAyOC44NSAyOC44NSAwIDAgMS0xOS4yOSAxNy4yOWMtNC4yIDEuMjMtMTAuMTcgMS44Mi0xNy44NCAxLjgySDI2NFYxLjdoMjMuNjh6bTEwNiAxMTAuMzJoLTU3LjI0VjEuN2g1Ny4zMXYxNC43M2gtNDEuMzF2MzNoNDEuMzF2MTQuMzNoLTQxLjMxVjk2LjhoNDEuMzF2MTUuMjJ6IiBmaWxsPSIjMjIxZjFmIi8+PHBhdGggZD0iTTkyLjU1IDgyLjUyYTEyIDEyIDAgMCAwIDEyLTEyIDExLjc2IDExLjc2IDAgMCAwLTEuNjgtNi4xNkw3OC4yIDIxLjhBMjguODIgMjguODIgMCAwIDAgNjUuNTUgMS45OGEyNC41IDI0LjUgMCAwIDEgMjUuOCAxMS44MmwyNS4yIDQzLjYyYTI0LjUxMiAyNC41MTIgMCAwIDEtNDIuMTEgMjUuMU05Mi40OCA2Mi44SDYxLjc2TDUyLjkgNzguMTZoMzkuNThhNy42OCA3LjY4IDAgMCAwIDAtMTUuMzZNNjIuMjEgMjJsOSAxNS42N0EyNC41IDI0LjUgMCAwIDAgMjguNDkgMTMuOEwzLjMgNTcuNDJBMjQuNTUgMjQuNTUgMCAwIDAgNS45NCA4NS43YTI4Ljg3IDI4Ljg3IDAgMCAxIDEwLjc5LTIwLjg1TDQxLjM3IDIyLjJhMTEuODMgMTEuODMgMCAwIDEgNC40Ni00LjU0IDEyIDEyIDAgMCAxIDE2LjM4IDQuMzdtLTE3IDkuODhsMTUuMzQgMjYuNThINzguM0w1OC40OCAyNC4yMmE3LjY4IDcuNjggMCAwIDAtMTMuMjkgNy42OU0yNC45OCA3OC41NGw5LjA4LTE1LjY3YTI0LjUxIDI0LjUxIDAgMCAwIC42OCA0OWg1MC4zN2EyNC40NyAyNC40NyAwIDAgMCAyMy4xMi0xNi40MSAyOC44OSAyOC44OSAwIDAgMS0yMy40MyAxSDM1LjU1YTExLjg3IDExLjg3IDAgMCAxLTYuMTYtMS42MSAxMiAxMiAwIDAgMS00LjQyLTE2LjM2bTE3LjA4IDkuODNsMTUuMzctMjYuNjQtOC44Ny0xNS4yOC0xOS43NyAzNC4yN2E3LjY4IDcuNjggMCAwIDAgMTMuMjkgNy43IiBmaWxsPSIjMDA5YWU0Ii8+PC9nPjwvc3ZnPg==\",\"logoWidth\":\"100px\",\"logoHeight\":\"50px\",\"completedHtml\":\"<h3>Thank you for your feedback</h3>\",\"completedHtmlOnCondition\":[{\"html\":\"<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>\"},{\"html\":\"<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>\"}],\"pages\":[{\"name\":\"page1\",\"elements\":[{\"type\":\"radiogroup\",\"name\":\"promoter_features\",\"title\":\"Which of the following features do you value the most?\",\"description\":\"\\n\",\"isRequired\":true,\"choices\":[{\"value\":\"Performance\",\"text\":\"Price\"},{\"value\":\"Stability\",\"text\":\"Features\"},{\"value\":\"User interface\",\"text\":\"Etc.\"}],\"otherText\":\"Other features:\",\"colCount\":2}]}],\"showQuestionNumbers\":\"off\"}","theme":"{\"themeName\":\"borderless\",\"colorPalette\":\"light\",\"isPanelless\":false,\"backgroundImage\":\"\",\"backgroundOpacity\":1,\"backgroundImageAttachment\":\"scroll\",\"backgroundImageFit\":\"cover\",\"cssVariables\":{\"--sjs-corner-radius\":\"4px\",\"--sjs-base-unit\":\"8px\",\"--sjs-shadow-small\":\"0px 0px 0px 0px rgba(0, 0, 0, 0.15)\",\"--sjs-shadow-inner\":\"inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)\",\"--sjs-border-default\":\"rgba(179, 200, 229, 1)\",\"--sjs-border-light\":\"rgba(220, 229, 241, 1)\",\"--sjs-general-backcolor\":\"rgba(255, 255, 255, 1)\",\"--sjs-general-backcolor-dark\":\"rgba(241, 246, 255, 1)\",\"--sjs-general-backcolor-dim-light\":\"rgba(238, 245, 255, 1)\",\"--sjs-general-backcolor-dim-dark\":\"rgba(223, 233, 250, 1)\",\"--sjs-general-forecolor\":\"rgba(0, 0, 0, 0.91)\",\"--sjs-general-forecolor-light\":\"rgba(133, 154, 186, 1)\",\"--sjs-general-dim-forecolor\":\"rgba(0, 0, 0, 0.91)\",\"--sjs-general-dim-forecolor-light\":\"rgba(133, 154, 186, 1)\",\"--sjs-secondary-backcolor\":\"rgba(255, 152, 20, 1)\",\"--sjs-secondary-backcolor-light\":\"rgba(255, 152, 20, 0.1)\",\"--sjs-secondary-backcolor-semi-light\":\"rgba(255, 152, 20, 0.25)\",\"--sjs-secondary-forecolor\":\"rgba(255, 255, 255, 1)\",\"--sjs-secondary-forecolor-light\":\"rgba(255, 255, 255, 0.25)\",\"--sjs-shadow-small-reset\":\"0px 0px 0px 0px rgba(0, 0, 0, 0.15)\",\"--sjs-shadow-medium\":\"0px 2px 6px 0px rgba(0, 0, 0, 0.1)\",\"--sjs-shadow-large\":\"0px 8px 16px 0px rgba(0, 0, 0, 0.1)\",\"--sjs-shadow-inner-reset\":\"inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)\",\"--sjs-border-inside\":\"rgba(0, 0, 0, 0.16)\",\"--sjs-special-red-forecolor\":\"rgba(255, 255, 255, 1)\",\"--sjs-special-green\":\"rgba(25, 179, 148, 1)\",\"--sjs-special-green-light\":\"rgba(25, 179, 148, 0.1)\",\"--sjs-special-green-forecolor\":\"rgba(255, 255, 255, 1)\",\"--sjs-special-blue\":\"rgba(67, 127, 217, 1)\",\"--sjs-special-blue-light\":\"rgba(67, 127, 217, 0.1)\",\"--sjs-special-blue-forecolor\":\"rgba(255, 255, 255, 1)\",\"--sjs-special-yellow\":\"rgba(255, 152, 20, 1)\",\"--sjs-special-yellow-light\":\"rgba(255, 152, 20, 0.1)\",\"--sjs-special-yellow-forecolor\":\"rgba(255, 255, 255, 1)\",\"--sjs-article-font-xx-large-textDecoration\":\"none\",\"--sjs-article-font-xx-large-fontWeight\":\"700\",\"--sjs-article-font-xx-large-fontStyle\":\"normal\",\"--sjs-article-font-xx-large-fontStretch\":\"normal\",\"--sjs-article-font-xx-large-letterSpacing\":\"0\",\"--sjs-article-font-xx-large-lineHeight\":\"64px\",\"--sjs-article-font-xx-large-paragraphIndent\":\"0px\",\"--sjs-article-font-xx-large-textCase\":\"none\",\"--sjs-article-font-x-large-textDecoration\":\"none\",\"--sjs-article-font-x-large-fontWeight\":\"700\",\"--sjs-article-font-x-large-fontStyle\":\"normal\",\"--sjs-article-font-x-large-fontStretch\":\"normal\",\"--sjs-article-font-x-large-letterSpacing\":\"0\",\"--sjs-article-font-x-large-lineHeight\":\"56px\",\"--sjs-article-font-x-large-paragraphIndent\":\"0px\",\"--sjs-article-font-x-large-textCase\":\"none\",\"--sjs-article-font-large-textDecoration\":\"none\",\"--sjs-article-font-large-fontWeight\":\"700\",\"--sjs-article-font-large-fontStyle\":\"normal\",\"--sjs-article-font-large-fontStretch\":\"normal\",\"--sjs-article-font-large-letterSpacing\":\"0\",\"--sjs-article-font-large-lineHeight\":\"40px\",\"--sjs-article-font-large-paragraphIndent\":\"0px\",\"--sjs-article-font-large-textCase\":\"none\",\"--sjs-article-font-medium-textDecoration\":\"none\",\"--sjs-article-font-medium-fontWeight\":\"700\",\"--sjs-article-font-medium-fontStyle\":\"normal\",\"--sjs-article-font-medium-fontStretch\":\"normal\",\"--sjs-article-font-medium-letterSpacing\":\"0\",\"--sjs-article-font-medium-lineHeight\":\"32px\",\"--sjs-article-font-medium-paragraphIndent\":\"0px\",\"--sjs-article-font-medium-textCase\":\"none\",\"--sjs-article-font-default-textDecoration\":\"none\",\"--sjs-article-font-default-fontWeight\":\"400\",\"--sjs-article-font-default-fontStyle\":\"normal\",\"--sjs-article-font-default-fontStretch\":\"normal\",\"--sjs-article-font-default-letterSpacing\":\"0\",\"--sjs-article-font-default-lineHeight\":\"28px\",\"--sjs-article-font-default-paragraphIndent\":\"0px\",\"--sjs-article-font-default-textCase\":\"none\",\"--sjs-general-backcolor-dim\":\"rgba(231, 240, 255, 1)\",\"--sjs-primary-backcolor\":\"rgba(35, 101, 200, 1)\",\"--sjs-primary-backcolor-dark\":\"rgba(26, 86, 175, 1)\",\"--sjs-primary-backcolor-light\":\"rgba(35, 101, 200, 0.1)\",\"--sjs-primary-forecolor\":\"rgba(255, 255, 255, 1)\",\"--sjs-primary-forecolor-light\":\"rgba(255, 255, 255, 0.25)\",\"--sjs-special-red\":\"rgba(229, 10, 62, 1)\",\"--sjs-special-red-light\":\"rgba(229, 10, 62, 0.1)\"},\"headerView\":\"basic\"}","custom-css":"","position":"Bottom-Left Corner","maxwidth":"400px","maxheight":"500px","zindex":"9999999","render-engine":"v1","auto-close-on-submission":true,"trigger-immediately":false,"trigger-exitintent":true,"trigger-delay":false,"trigger-delay-sec":"0","rate-limit":"Once","rate-limit-days":"1"}
        !function () {

            var entry = function () {

                var testAlias = null;
                try {
                    testAlias = WT.optimize.g_RunObjList.filter(x => x.z7715?.process?.body?.factors[0]?.value?.match(/wt_survey_onload/i))[0].params.testAlias;
                } catch (err) { }

                var fireMetric = function (name, data) {
                    if (!testAlias) return;

                    if (!data) data = {};
                    WT.click({
                        testAlias: testAlias,
                        conversionPoint: name,
                        data: data
                    });

                    if (name === "survey_submission") {
                        var ls;
                        try {

                            ls = JSON.parse(localStorage.getItem("_wt.surveyresponses") || "{}");
                            for (var key in data) {
                                ls[key] = data[key];
                            }

                            localStorage.setItem("_wt.surveyresponses", JSON.stringify(ls));

                        } catch (err) { }
                    }

                };

                var el = document.getElementById('wto-survey-iframe');
                if (el) el.parentNode.removeChild(el);

                window.wt_survey_onload = function () {
                    var el = document.getElementById('wto-survey-iframe');
                    if (el) el.style.display = "block";

                    delete window.wt_survey_onload;
                };

                window.addEventListener("message", function (e) {

                    var data = e.data;

                    if (data.service === "wto" && data.product == "surveys") {

                        if (data.status === "ready to receive") {

                            e.source.postMessage({
                                service: "wto",
                                product: "surveys",
                                status: "data given, do render",
                                surveyid: "something",
                                surveyJson: { "title": "Before you go", "logo": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIzLjMgLTcuNDQ4NTcxNDcxMDk2NTUgMzkwLjM0OTk5OTk5OTk5OTk3IDEyOS43NjUzMzQwMzg1MDYxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSI4ODYiPjxnIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTIxNC4yNCA5NC40MWE2My4yNCA2My4yNCAwIDAgMC0xOC0xMS43MiA1MC42MiA1MC42MiAwIDAgMC0xOS41OS00IDM5LjEzIDM5LjEzIDAgMCAwLTUuNTIuNDMgMzIuNTggMzIuNTggMCAwIDAtNS4xOSAxLjIzIDQxIDQxIDAgMCAwIDE0LjQgMTMgMzguODEgMzguODEgMCAwIDAgMTguNDEgNC40NSAzNS42IDM1LjYgMCAwIDAgNy40My0uODIgNTEgNTEgMCAwIDAgOC4wNi0yLjYxbTEyLTguODhhNDEuNDEgNDEuNDEgMCAwIDAgMTEuMzEtMjkuNTggMzkuMzMgMzkuMzMgMCAwIDAtMi43My0xNC40OCAzOS43NiAzOS43NiAwIDAgMC04LTEyLjU4QTQxIDQxIDAgMCAwIDIxMy42MyAxOWEzOS4xMiAzOS4xMiAwIDAgMC0zMC40NS0uMjUgMzYuOTIgMzYuOTIgMCAwIDAtMTIuMzggOC40NiA0MS4xMyA0MS4xMyAwIDAgMC04LjkxIDEzLjU5IDQxLjg1IDQxLjg1IDAgMCAwLTMuMTIgMTYgMzYgMzYgMCAwIDAgLjM5IDUuMzkgNTQgNTQgMCAwIDAgMS4yNSA2IDI5LjE3IDI5LjE3IDAgMCAxIDgtMi43MyA1MC4wNyA1MC4wNyAwIDAgMSAxMC0uODggNjAuMzQgNjAuMzQgMCAwIDEgMjQuNTEgNS4zOSA4NS40NiA4NS40NiAwIDAgMSAyMy4zNCAxNS40OG0yLjEgMTkuMDhhNTYuNCA1Ni40IDAgMCAxLTQ4LjcyIDUuODIgNTQuNDMgNTQuNDMgMCAwIDEtMTYuMTMtOC45NSA1NS4yMyA1NS4yMyAwIDAgMS0xNS42MS0xOS45NCA1OS43NiA1OS43NiAwIDAgMS01LjQzLTI1LjUgNTUuMTkgNTUuMTkgMCAwIDEgNC4zNC0yMS42NCA1OS41OCA1OS41OCAwIDAgMSAxMi43NC0xOC41MkE1NS41NiA1NS41NiAwIDAgMSAxNzcuMiAzLjk5YTU0IDU0IDAgMCAxIDIwLjg0LTQgNTUuNjYgNTUuNjYgMCAwIDEgMjEuMjUgNCA1Ny40NiA1Ny40NiAwIDAgMSAzMC40NiAzMC43MyA1OS44NyA1OS44NyAwIDAgMSA0LjIzIDIyLjY5IDU3LjM2IDU3LjM2IDAgMCAxLTMuNDMgMTkuNzYgNTQuMTMgNTQuMTMgMCAwIDEtMTAuMjggMTYuOTMgMjguMTMgMjguMTMgMCAwIDAgNiAyIDMwIDMwIDAgMCAwIDYuNTguNjZoMnYxNS4yNWgtMS40M2E0NCA0NCAwIDAgMS0xMi4zNS0xLjg1IDY0LjczIDY0LjczIDAgMCAxLTEyLjgtNS41OW01MS40NS01Ni42OGg1LjFjOC4yNCAwIDE0LjEyLTEuMjUgMTcuNjctMy43NXM1LjI0LTYuNjQgNS4yNC0xMi40NGMwLTUuMS0xLjU5LTguODUtNC43Ni0xMS4zMnMtOC4wOS0zLjctMTQuNjUtMy43aC04LjZ6bS0uMTQgNDkuMThoMTIuNjdxMTEgMCAxNi4yNC00LjE1YzMuNDktMi43NSA1LjIzLTcgNS4yMy0xMi43OHEwLTkuMzctNS40My0xNC4yMmMtMy42My0zLjIxLTktNC44Ni0xNi00Ljg2aC0xMi42NXYzNnptOC05NS40MWMxMS44IDAgMjAuNzIgMi41OCAyNi44NiA3LjcyczkuMTcgMTIuNjcgOS4xNyAyMi41MmEyMy44NCAyMy44NCAwIDAgMS0zIDEyLjA3IDI0LjIzIDI0LjIzIDAgMCAxLTguOCA4LjY0IDIyLjg3IDIyLjg3IDAgMCAxIDEyLjc4IDkuMzEgMjguMjIgMjguMjIgMCAwIDEgNC43MSAxNi40NCAzNy4xIDM3LjEgMCAwIDEtMi43NSAxNC41NSAyOC44NSAyOC44NSAwIDAgMS0xOS4yOSAxNy4yOWMtNC4yIDEuMjMtMTAuMTcgMS44Mi0xNy44NCAxLjgySDI2NFYxLjdoMjMuNjh6bTEwNiAxMTAuMzJoLTU3LjI0VjEuN2g1Ny4zMXYxNC43M2gtNDEuMzF2MzNoNDEuMzF2MTQuMzNoLTQxLjMxVjk2LjhoNDEuMzF2MTUuMjJ6IiBmaWxsPSIjMjIxZjFmIi8+PHBhdGggZD0iTTkyLjU1IDgyLjUyYTEyIDEyIDAgMCAwIDEyLTEyIDExLjc2IDExLjc2IDAgMCAwLTEuNjgtNi4xNkw3OC4yIDIxLjhBMjguODIgMjguODIgMCAwIDAgNjUuNTUgMS45OGEyNC41IDI0LjUgMCAwIDEgMjUuOCAxMS44MmwyNS4yIDQzLjYyYTI0LjUxMiAyNC41MTIgMCAwIDEtNDIuMTEgMjUuMU05Mi40OCA2Mi44SDYxLjc2TDUyLjkgNzguMTZoMzkuNThhNy42OCA3LjY4IDAgMCAwIDAtMTUuMzZNNjIuMjEgMjJsOSAxNS42N0EyNC41IDI0LjUgMCAwIDAgMjguNDkgMTMuOEwzLjMgNTcuNDJBMjQuNTUgMjQuNTUgMCAwIDAgNS45NCA4NS43YTI4Ljg3IDI4Ljg3IDAgMCAxIDEwLjc5LTIwLjg1TDQxLjM3IDIyLjJhMTEuODMgMTEuODMgMCAwIDEgNC40Ni00LjU0IDEyIDEyIDAgMCAxIDE2LjM4IDQuMzdtLTE3IDkuODhsMTUuMzQgMjYuNThINzguM0w1OC40OCAyNC4yMmE3LjY4IDcuNjggMCAwIDAtMTMuMjkgNy42OU0yNC45OCA3OC41NGw5LjA4LTE1LjY3YTI0LjUxIDI0LjUxIDAgMCAwIC42OCA0OWg1MC4zN2EyNC40NyAyNC40NyAwIDAgMCAyMy4xMi0xNi40MSAyOC44OSAyOC44OSAwIDAgMS0yMy40MyAxSDM1LjU1YTExLjg3IDExLjg3IDAgMCAxLTYuMTYtMS42MSAxMiAxMiAwIDAgMS00LjQyLTE2LjM2bTE3LjA4IDkuODNsMTUuMzctMjYuNjQtOC44Ny0xNS4yOC0xOS43NyAzNC4yN2E3LjY4IDcuNjggMCAwIDAgMTMuMjkgNy43IiBmaWxsPSIjMDA5YWU0Ii8+PC9nPjwvc3ZnPg==", "logoWidth": "100px", "logoHeight": "50px", "completedHtml": "<h3>Thank you for your feedback</h3>", "completedHtmlOnCondition": [{ "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>" }, { "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>" }], "pages": [{ "name": "page1", "elements": [{ "type": "radiogroup", "name": "promoter_features", "title": "Which of the following features do you value the most?", "description": "\n", "isRequired": true, "choices": [{ "value": "Performance", "text": "Price" }, { "value": "Stability", "text": "Features" }, { "value": "User interface", "text": "Etc." }], "otherText": "Other features:", "colCount": 2 }] }], "showQuestionNumbers": "off" },
                                theme: { "themeName": "borderless", "colorPalette": "light", "isPanelless": false, "backgroundImage": "", "backgroundOpacity": 1, "backgroundImageAttachment": "scroll", "backgroundImageFit": "cover", "cssVariables": { "--sjs-corner-radius": "4px", "--sjs-base-unit": "8px", "--sjs-shadow-small": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)", "--sjs-shadow-inner": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)", "--sjs-border-default": "rgba(179, 200, 229, 1)", "--sjs-border-light": "rgba(220, 229, 241, 1)", "--sjs-general-backcolor": "rgba(255, 255, 255, 1)", "--sjs-general-backcolor-dark": "rgba(241, 246, 255, 1)", "--sjs-general-backcolor-dim-light": "rgba(238, 245, 255, 1)", "--sjs-general-backcolor-dim-dark": "rgba(223, 233, 250, 1)", "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)", "--sjs-general-forecolor-light": "rgba(133, 154, 186, 1)", "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)", "--sjs-general-dim-forecolor-light": "rgba(133, 154, 186, 1)", "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)", "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)", "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)", "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)", "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)", "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)", "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)", "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)", "--sjs-shadow-inner-reset": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)", "--sjs-border-inside": "rgba(0, 0, 0, 0.16)", "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)", "--sjs-special-green": "rgba(25, 179, 148, 1)", "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)", "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)", "--sjs-special-blue": "rgba(67, 127, 217, 1)", "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)", "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)", "--sjs-special-yellow": "rgba(255, 152, 20, 1)", "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)", "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)", "--sjs-article-font-xx-large-textDecoration": "none", "--sjs-article-font-xx-large-fontWeight": "700", "--sjs-article-font-xx-large-fontStyle": "normal", "--sjs-article-font-xx-large-fontStretch": "normal", "--sjs-article-font-xx-large-letterSpacing": "0", "--sjs-article-font-xx-large-lineHeight": "64px", "--sjs-article-font-xx-large-paragraphIndent": "0px", "--sjs-article-font-xx-large-textCase": "none", "--sjs-article-font-x-large-textDecoration": "none", "--sjs-article-font-x-large-fontWeight": "700", "--sjs-article-font-x-large-fontStyle": "normal", "--sjs-article-font-x-large-fontStretch": "normal", "--sjs-article-font-x-large-letterSpacing": "0", "--sjs-article-font-x-large-lineHeight": "56px", "--sjs-article-font-x-large-paragraphIndent": "0px", "--sjs-article-font-x-large-textCase": "none", "--sjs-article-font-large-textDecoration": "none", "--sjs-article-font-large-fontWeight": "700", "--sjs-article-font-large-fontStyle": "normal", "--sjs-article-font-large-fontStretch": "normal", "--sjs-article-font-large-letterSpacing": "0", "--sjs-article-font-large-lineHeight": "40px", "--sjs-article-font-large-paragraphIndent": "0px", "--sjs-article-font-large-textCase": "none", "--sjs-article-font-medium-textDecoration": "none", "--sjs-article-font-medium-fontWeight": "700", "--sjs-article-font-medium-fontStyle": "normal", "--sjs-article-font-medium-fontStretch": "normal", "--sjs-article-font-medium-letterSpacing": "0", "--sjs-article-font-medium-lineHeight": "32px", "--sjs-article-font-medium-paragraphIndent": "0px", "--sjs-article-font-medium-textCase": "none", "--sjs-article-font-default-textDecoration": "none", "--sjs-article-font-default-fontWeight": "400", "--sjs-article-font-default-fontStyle": "normal", "--sjs-article-font-default-fontStretch": "normal", "--sjs-article-font-default-letterSpacing": "0", "--sjs-article-font-default-lineHeight": "28px", "--sjs-article-font-default-paragraphIndent": "0px", "--sjs-article-font-default-textCase": "none", "--sjs-general-backcolor-dim": "rgba(231, 240, 255, 1)", "--sjs-primary-backcolor": "rgba(35, 101, 200, 1)", "--sjs-primary-backcolor-dark": "rgba(26, 86, 175, 1)", "--sjs-primary-backcolor-light": "rgba(35, 101, 200, 0.1)", "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)", "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)", "--sjs-special-red": "rgba(229, 10, 62, 1)", "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)" }, "headerView": "basic" },
                                customCSS: ``
                            }, e.origin);

                        }
                        if (data.status === "close-survey") {
                            // close frame 
                            var el = document.getElementById('wto-survey-iframe');
                            if (el) el.parentNode.removeChild(el);
                        }

                        if (data.status === "submission") {
                            fireMetric('survey_submission', data.data || {});

                            // close frame 
                            setTimeout(function () {
                                var el = document.getElementById('wto-survey-iframe');
                                if (el) el.parentNode.removeChild(el);
                            }, 1500);


                        }

                        if (data.status === "event") {
                            var ev = data.event;

                            fireMetric('survey_' + ev);

                            // Broadcast the event 
                            window.dispatchEvent(new CustomEvent('wto_survey_' + ev));
                        }
                    }
                });

                var styles
                document.body.insertAdjacentHTML('beforeend', `
        <iframe id="wto-survey-iframe" src="https://c.webtrends-optimize.com/acs/accounts/d25dc2a4-010d-4fd1-a1ad-41e81138c16d/manager/wto-survey-js-embed.html?host=https://${location.host}" style="position: fixed; display: none; border: 0 none; box-shadow: 0 0 10px #ddd; bottom: 0; right: 0; height: 100%; max-height: 500px; z-index: 9999999; width: 100%; max-width: 400px; " onload="javascript:window.wt_survey_onload();"/>
        `);
            }

            var rateLimiter = function () {
                var cookie = window.WT && WT.helpers.cookie.get("_wt.widget.survey.dismissed-1731026830987");
                if (cookie == "in") {
                    return;
                }

                // If we get to this point, it's fine.
                entry();

                // Cookie for rate limiting
                if (window.WT && WT.helpers.cookie) WT.helpers.cookie.set("_wt.widget.survey.dismissed-1731026830987", "in", 90);
            };


            // Exit Intent Library 
            var onExitIntent = function (o) { var e, r = !1; navigator.userAgent.match(new RegExp('Trident|MSIE|Edge/', 'i')) && ((e = Element.prototype).matches || (Element.prototype.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; 0 <= --n && t.item(n) !== this;); return -1 < n }), document.addEventListener("focus", function (e) { e.target && e.target.matches("select") && (r = !0) }, !0), document.addEventListener("blur", function (e) { e.target && e.target.matches("select") && (r = !1) }, !0)), document.onmouseout = function (e) { var t, n; (t = (e = null != e ? e : { e: window.event }).relatedTarget || e.toElement) && "HTML" !== t.nodeName || (n = e.clientY || e.pageY, (!navigator.userAgent.match(/firefox|chrome/i) || navigator.userAgent.match(new RegExp('Edge/', 'i')) && 0 === e.buttons) && (n = 0), n < 10 && !r && o()) } };

            // Exit Intent Trigger 
            onExitIntent(rateLimiter);

        }();
        //!-##surveywto--END##
        WT.trackGA.dlPush('Test 156', 'Variant 1');
    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'optimize test 156 - omni - Variant 1',
            eventLabel: error,
            nonInteraction: true,
        });
    }
});