<@markup id="customDocLibView" target="documentListContainer" action="after">
    <script type="text/javascript">//<![CDATA[
        YAHOO.Bubbling.subscribe("postSetupViewRenderers", function(layer, args) {
            var scope = args[1].scope;
            var largeViewRenderer = new Alfresco.DocumentListLargeViewRenderer("large");
            scope.registerViewRenderer(largeViewRenderer);
        });
    //]]></script>
</@>