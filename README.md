KoWSa
=====

KnockoutJS handlers for Windows Store apps

Examples
========
*HTML*
<div data-win-control="WinJS.UI.ListView"
             data-bind="datasource:top, template:itemTemplate"
             style="height:100%"
             id="listview"
             data-win-options="{layout:{type:WinJS.UI.GridLayout}}"></div>
			 
*Template*
 <script id="itemTemplate" type="text/html">
        <div>
            <div style="width:260px;height:190px"
                 data-bind="style:{backgroundImage: 'url('+$data.imageUrl+')'}">
                <div data-bind="text:title"></div>
            </div>
        </div>
 </script>

