KoWSa
=====

KnockoutJS handlers for Windows Store apps

Example
========
*HTML*
<pre>
&lt;div data-win-control="WinJS.UI.ListView"
             data-bind="datasource:someArray, template:itemTemplate"
             style="height:100%"
             id="listview"
             data-win-options="{layout:{type:WinJS.UI.GridLayout}}">&lt;/div>
</pre>			 
*Template*
<pre>
&lt;script id="itemTemplate" type="text/html">
        &lt;div>
            &lt;div style="width:260px;height:190px"
                 data-bind="style:{backgroundImage: 'url('+$data.imageUrl+')'}">
                &lt;div data-bind="text:title">&lt;/div>
            &lt;/div>
        &lt;/div>
&lt;/script>
</pre>

Notes
=====

* Tutoral is on it's way.
* Contains TypeScript and the JavaScript it is compiled to.

Known bugs
==========
* The template handler misses the reference too $root and $parent. 


