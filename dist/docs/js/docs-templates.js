angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/demo.tmpl.html',
    '<docs-demo ng-repeat="demo in demos" \n' +
    '  demo-id="{{demo.id}}" demo-title="{{demo.label}}" demo-module="{{demo.ngModule.module}}">\n' +
    '  <demo-file ng-repeat="file in demo.$files"\n' +
    '             name="{{file.name}}" contents="file.httpPromise">\n' +
    '  </demo-file>\n' +
    '</docs-demo>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/docs-demo.tmpl.html',
    '<div layout="column" layout-fill class="doc-content">\n' +
    '  <div flex layout="column" style="z-index:1">\n' +
    '\n' +
    '    <div ng-transclude></div>\n' +
    '\n' +
    '    <section class="demo-container md-whiteframe-z1"\n' +
    '      ng-class="{\'show-source\': demoCtrl.$showSource}" >\n' +
    '\n' +
    '<!--       <md-toolbar class="demo-toolbar" >\n' +
    '        <div class="md-toolbar-tools">\n' +
    '          <span>{{demoCtrl.demoTitle}}</span>\n' +
    '          <span flex></span>\n' +
    '          <md-button\n' +
    '            style="min-width: 72px;"\n' +
    '            layout="row" layout-align="center center"\n' +
    '            ng-click="demoCtrl.$showSource = !demoCtrl.$showSource">\n' +
    '            <md-icon icon="/img/icons/ic_visibility_24px.svg"\n' +
    '               style="margin: 0 4px 0 0;">\n' +
    '            </md-icon>\n' +
    '            Source\n' +
    '          </md-button>\n' +
    '        </div>\n' +
    '      </md-toolbar> -->\n' +
    '\n' +
    '      <!-- Source views -->\n' +
    '      <md-tabs style="border-top: solid 1px #00ADC3;"\n' +
    '        class="demo-source-tabs" ng-show="demoCtrl.$showSource">\n' +
    '        <md-tab ng-repeat="file in demoCtrl.orderedFiles" label="{{file.name}}">\n' +
    '          <md-content md-scroll-y class="demo-source-container">\n' +
    '            <hljs code="file.contentsPromise" lang="{{file.fileType}}" should-interpolate="demoCtrl.interpolateCode">\n' +
    '            </hljs>\n' +
    '          </md-c>\n' +
    '        </md-tab>\n' +
    '      </md-tabs>\n' +
    '\n' +
    '      <!-- Live Demos -->\n' +
    '      <demo-include files="demoCtrl.files" module="demoCtrl.demoModule" class="{{demoCtrl.demoId}}">\n' +
    '      </demo-include>\n' +
    '    </section>\n' +
    '\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/home.tmpl.html',
    '<div ng-controller="HomeCtrl" layout="column" class="doc-content">\n' +
    '    <md-content class="extraPad" >\n' +
    '        <p>\n' +
    '            <a href="http://www.google.com/design/spec/material-design/">Material Design</a> is a specification for a\n' +
    '            unified system of visual, motion, and interaction design that adapts across different devices and different\n' +
    '            screen sizes.\n' +
    '\n' +
    '            Below is a brief video that presents the Material Design system:\n' +
    '        </p>\n' +
    '\n' +
    '        <md-content layout="row" layout-align="center center" style="padding-bottom: 25px;" >\n' +
    '\n' +
    '        </md-content>\n' +
    '\n' +
    '        <p>\n' +
    '            The Angular Material Design project is a reference implementation effort similar to that provided in the\n' +
    '            <a href="http://www.polymer-project.org/">Polymer</a> project\'s\n' +
    '            <a href="http://www.polymer-project.org/docs/elements/paper-elements.html">Paper elements</a>\n' +
    '            collection. This project provides a set of AngularJS UI elements that implement the material design system.\n' +
    '\n' +
    '        <h3>Useful Links:</h3>\n' +
    '\n' +
    '        <ul>\n' +
    '            <li>To contribute, fork our GitHub <a href="https://github.com/angular/material">repository</a>.</li>\n' +
    '            <li>For problems,\n' +
    '                <a href="https://github.com/angular/material/issues?q=is%3Aissue+is%3Aopen" target="_blank">\n' +
    '                    search the issues\n' +
    '                </a> and/or\n' +
    '                <a href="https://github.com/angular/material/issues/new" target="_blank">\n' +
    '                    create a new issue\n' +
    '                </a>.\n' +
    '            </li>\n' +
    '            <li>For questions,\n' +
    '                <a href="https://groups.google.com/forum/#!forum/ngmaterial" target="_blank">\n' +
    '                    search the forum\n' +
    '                </a> and/or post a new message.\n' +
    '            </li>\n' +
    '            <li>These docs were generated from source in the `master` branch:\n' +
    '                <ul style="padding-top:5px;">\n' +
    '                    <li>\n' +
    '                        at commit <a ng-href="{{BUILDCONFIG.repository}}/commit/{{BUILDCONFIG.commit}}" target="_blank">\n' +
    '                        v{{BUILDCONFIG.version}}  -  SHA {{BUILDCONFIG.commit.substring(0,7)}}\n' +
    '                    </a>.\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        on {{BUILDCONFIG.date}} GMT.\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '        <br/>\n' +
    '        <br/>\n' +
    '    </md-content>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-alignment.tmpl.html',
    '<div ng-controller="LayoutCtrl" layout="column" layout-fill class="layout-content">\n' +
    '\n' +
    '  <p>\n' +
    '    The <code>layout-align</code> attribute takes two words.\n' +
    '    The first word says how the children will be aligned in the layout\'s direction, and the second word says how the children will be aligned perpindicular to the layout\'s direction.\n' +
    '    <br/>\n' +
    '    Only one word is required for the attribute. For example, <code>layout="row" layout-align="center"</code> would make the elements center horizontally and use the default behavior vertically.\n' +
    '    <br/>\n' +
    '    <code>layout="column" layout-align="center end"</code> would make\n' +
    '    children align along the center vertically and along the end (right) horizontally.\n' +
    '  </p>\n' +
    '  <p>\n' +
    '   See below for more examples:\n' +
    '  </p>\n' +
    '\n' +
    '  <section class="layout-panel-parent">\n' +
    '    <div ng-panel="layoutDemo">\n' +
    '      <docs-demo demo-title=\'layout="{{layoutDemo.direction}}" layout-align="{{layoutAlign()}}"\' class="small-demo" interpolate-code="true">\n' +
    '        <demo-file name="index.html">\n' +
    '          <div layout="{{layoutDemo.direction}}" layout-align="{{layoutAlign()}}">\n' +
    '            <div>one</div>\n' +
    '            <div>two</div>\n' +
    '            <div>three</div>\n' +
    '          </div>\n' +
    '        </demo-file>\n' +
    '      </docs-demo>\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <div layout="column" layout-gt-sm="row" layout-align="space-around">\n' +
    '\n' +
    '    <div>\n' +
    '      <md-subheader>Layout Direction</md-subheader>\n' +
    '      <md-radio-group ng-model="layoutDemo.direction">\n' +
    '        <md-radio-button value="row">row</md-radio-button>\n' +
    '        <md-radio-button value="column">column</md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <md-subheader>Alignment in Layout Direction ({{layoutDemo.direction == \'row\' ? \'horizontal\' : \'vertical\'}})</md-subheader>\n' +
    '      <md-radio-group ng-model="layoutDemo.mainAxis">\n' +
    '        <md-radio-button value="start">start</md-radio-button>\n' +
    '        <md-radio-button value="center">center</md-radio-button>\n' +
    '        <md-radio-button value="end">end</md-radio-button>\n' +
    '        <md-radio-button value="space-around">space-around</md-radio-button>\n' +
    '        <md-radio-button value="space-between">space-between</md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <md-subheader>Alignment in Perpindicular Direction ({{layoutDemo.direction == \'column\' ? \'horizontal\' : \'vertical\'}})</md-subheader>\n' +
    '      <md-radio-group ng-model="layoutDemo.crossAxis">\n' +
    '        <md-radio-button value="start">start</md-radio-button>\n' +
    '        <md-radio-button value="center">center</md-radio-button>\n' +
    '        <md-radio-button value="end">end</md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-container.tmpl.html',
    '<div ng-controller="LayoutCtrl" layout="column" layout-fill class="layout-content">\n' +
    '\n' +
    '  <h3 class="layout-title">Overview</h3>\n' +
    '  <p>\n' +
    '    Angular Material\'s responsive CSS layout is built on\n' +
    '    <a href="http://www.w3.org/TR/css3-flexbox/">flexbox</a>.\n' +
    '  </p>\n' +
    '\n' +
    '  <p>\n' +
    '    The layout system is based upon element attributes rather than CSS classes.\n' +
    '    Attributes provide an easy way to set a value (eg `layout="row"`), and additionally\n' +
    '    helps us separate concerns: attributes define layout, and classes define styling.\n' +
    '  </p>\n' +
    '\n' +
    '  <md-divider></md-divider>\n' +
    '  <h3 class="layout-title">Layout Attribute</h3>\n' +
    '  <p>\n' +
    '    Use the <code>layout</code> attribute on an element to arrange its children\n' +
    '    horizontally in a row (<code>layout="row"</code>), or vertically in\n' +
    '    a column (<code>layout="column"</code>). \n' +
    '  </p>\n' +
    '\n' +
    '  <hljs lang="html">\n' +
    '    <div layout="row">\n' +
    '      <div>I\'m left.</div>\n' +
    '      <div>I\'m right.</div>\n' +
    '    </div>\n' +
    '    <div layout="column">\n' +
    '      <div>I\'m above.</div>\n' +
    '      <div>I\'m below.</div>\n' +
    '    </div>\n' +
    '  </hljs>\n' +
    '\n' +
    '  <p>\n' +
    '    See <a href="#/layout/options">Layout Options</a> for information on responsive layouts and other options.\n' +
    '  </p>\n' +
    '\n' +
    '  <!--\n' +
    '  <md-divider>\n' +
    '  <docs-demo demo-title="Example App Layout" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="column" layout-fill class="layout-demo">\n' +
    '        <header>\n' +
    '          Header\n' +
    '        </header>\n' +
    '\n' +
    '        <section flex layout="column" layout-gt-sm="row">\n' +
    '          <aside flex flex-gt-sm="20">\n' +
    '            Menu<br />\n' +
    '            flex flex-gt-sm="20"\n' +
    '          </aside>\n' +
    '          <main flex>\n' +
    '            Main<br />flex\n' +
    '          </main>\n' +
    '        </section>\n' +
    '\n' +
    '        <footer>\n' +
    '          Footer\n' +
    '        </footer>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <p>\n' +
    '    In this layout, the header and footer are both using their normal height, while the main\n' +
    '    content area is flexing, or stretching, to fill the remaining area.\n' +
    '    <br/><gr/>\n' +
    '    The app container is a vertical layout, while the main area is a responsive row/column\n' +
    '    layout, depending upon the screen size. \n' +
    '    The aside menu is above on mobile, and to the left on larger devices.\n' +
    '  </p>\n' +
    '  -->\n' +
    '</div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-grid.tmpl.html',
    '<div ng-controller="LayoutCtrl" layout="column" layout-fill class="layout-content">\n' +
    '\n' +
    '  <p>\n' +
    '    To customize the size and position of elements in a layout, use the\n' +
    '    <code>flex</code>, <code>offset</code>, and <code>flex-order</code> attributes.\n' +
    '  </p>\n' +
    '\n' +
    '  <md-divider></md-divider>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex Attribute" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div flex>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '        <div flex hide-sm>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <p>\n' +
    '    Add the <code>flex</code> attribute to a layout\'s child element, and it\n' +
    '    will flex (stretch) to fill the available area.\n' +
    '  </p>\n' +
    '\n' +
    '\n' +
    '  <md-divider></md-divider>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex Percent Values" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div flex="33">\n' +
    '          [flex="33"]\n' +
    '        </div>\n' +
    '        <div flex="55">\n' +
    '          [flex="55"]\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <p>\n' +
    '    A layout child\'s <code>flex</code> attribute can be given an integer value from 0-100.\n' +
    '    The element will stretch to the percentage of available space matching the value.\n' +
    '    <br/><br/>\n' +
    '    The <code>flex</code> attribute value is restricted to 33, 66, and multiples\n' +
    '    of five.\n' +
    '    <br/>\n' +
    '    For example: <code>flex="5", flex="20", "flex="33", flex="50", flex="66", flex="75", ...</code>.\n' +
    '  </p>\n' +
    '  <p>\n' +
    '  See the <a href="#/layout/options">layout options page</a> for more information on responsive flex attributes.\n' +
    '  </p>\n' +
    '\n' +
    '  <md-divider></md-divider>\n' +
    '  <docs-demo demo-title="Flex Order Attribute" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-margin>\n' +
    '        <div flex flex-order="3">\n' +
    '          [flex-order="3"]\n' +
    '        </div>\n' +
    '        <div flex flex-order="2">\n' +
    '          [flex-order="2"]\n' +
    '        </div>\n' +
    '        <div flex flex-order="1">\n' +
    '          [flex-order="1"]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <p>\n' +
    '    Add the <code>flex-order</code> attribute to a layout child to set its\n' +
    '    position within the layout.\n' +
    '  </p>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-options.tmpl.html',
    '<div ng-controller="LayoutCtrl" layout="column" layout-fill class="layout-content layout-options">\n' +
    '\n' +
    '  <docs-demo demo-title="Responsive Layout" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-sm="column">\n' +
    '        <div flex>\n' +
    '          I\'m above on mobile, and to the left on larger devices.\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          I\'m below on mobile, and to the right on larger devices.\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    See the <a href="#/layout/container">Layout Container</a> page for a basic explanation\n' +
    '    of layout attributes.\n' +
    '    <br/>\n' +
    '    To make your layout change depending upon the device size, there are\n' +
    '    other <code>layout</code> attributes available:\n' +
    '  </p>\n' +
    '\n' +
    '  <ul>\n' +
    '    <li>\n' +
    '      <code>layout</code> sets the default layout on all devices.\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <code>layout-sm</code> sets the layout on devices less than 600px wide (phones).\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <code>layout-gt-sm</code> sets the layout on devices greater than 600px wide (bigger than phones).\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <code>layout-md</code> sets the layout on devices between 600px and 960px wide (tablets in portrait).\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <code>layout-gt-md</code> sets the layout on devices greater than 960px wide (bigger than tablets in portrait).\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <code>layout-lg</code> sets the layout on devices between 960 and 1200px wide (tablets in landscape).\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <code>layout-gt-lg</code> sets the layout on devices greater than 1200px wide (computers and large screens).\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '  <br/>\n' +
    '\n' +
    '  <md-divider></md-divider>\n' +
    '\n' +
    '  <docs-demo demo-title="Layout Margin, Padding and Fill" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-margin layout-fill layout-padding>\n' +
    '        <div flex>I\'m on the left, and there\'s an empty area around me.</div>\n' +
    '        <div flex>I\'m on the right, and there\'s an empty area around me.</div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    <code>layout-margin</code> adds margin around each <code>flex</code> child. It also adds a margin to the layout container itself.\n' +
    '    <br/>\n' +
    '    <code>layout-padding</code> adds padding inside each <code>flex</code> child. It also adds padding to the layout container itself.\n' +
    '    <br/>\n' +
    '    <code>layout-fill</code> forces the layout element to fill its parent container.\n' +
    '  </p>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <md-divider></md-divider>\n' +
    '\n' +
    '  <docs-demo demo-title="Responsive Flex & Offset Attributes" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div flex="66" flex-sm="33">\n' +
    '          I flex to one-third of the space on mobile, and two-thirds on other devices.\n' +
    '        </div>\n' +
    '        <div flex="33" flex-sm="66">\n' +
    '          I flex to two-thirds of the space on mobile, and one-third on other devices.\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    See the <a href="#/layout/grid">Layout Grid</a> page for a basic explanation\n' +
    '    of flex and offset attributes.\n' +
    '  </p>\n' +
    '\n' +
    '  <table>\n' +
    '    <tr>\n' +
    '      <td>flex</td>\n' +
    '      <td>Sets flex.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-sm</td>\n' +
    '      <td>Sets flex on devices less than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-gt-sm</td>\n' +
    '      <td>Sets flex on devices greater than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-md</td>\n' +
    '      <td>Sets flex on devices between 600px and 960px wide..</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-gt-md</td>\n' +
    '      <td>Sets flex on devices greater than 960px wide.\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-lg</td>\n' +
    '      <td>Sets flex on devices between 960px and 1200px.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-gt-lg</td>\n' +
    '      <td>Sets flex on devices greater than 1200px wide.</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '\n' +
    '  <md-divider></md-divider>\n' +
    '\n' +
    '  <docs-demo demo-title="Hide and Show Attributes" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout layout-align="center center">\n' +
    '        <md-subheader hide-sm>\n' +
    '          I\'m hidden on mobile and shown on larger devices.\n' +
    '        </md-subheader>\n' +
    '        <md-subheader hide-gt-sm>\n' +
    '          I\'m shown on mobile and hidden on larger devices.\n' +
    '        </md-subheader>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <br/>\n' +
    '  <table>\n' +
    '    <tr>\n' +
    '      <td>hide</td>\n' +
    '      <td><code>display: none</code></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-sm</td>\n' +
    '      <td><code>display: none</code> on devices less than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-gt-sm</td>\n' +
    '      <td><code>display: none</code> on devices greater than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-md</td>\n' +
    '      <td><code>display: none</code> on devices between 600px and 960px wide..</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-gt-md</td>\n' +
    '      <td><code>display: none</code> on devices greater than 960px wide.\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-lg</td>\n' +
    '      <td><code>display: none</code> on devices between 960px and 1200px.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-gt-lg</td>\n' +
    '      <td><code>display: none</code> on devices greater than 1200px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show</td>\n' +
    '      <td>Negates hide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-sm</td>\n' +
    '      <td>Negates hide on devices less than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-gt-sm</td>\n' +
    '      <td>Negates hide on devices greater than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-md</td>\n' +
    '      <td>Negates hide on devices between 600px and 960px wide..</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-gt-md</td>\n' +
    '      <td>Negates hide on devices greater than 960px wide.\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-lg</td>\n' +
    '      <td>Negates hide on devices between 960px and 1200px.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-gt-lg</td>\n' +
    '      <td>Negates hide on devices greater than 1200px wide.</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/view-source.tmpl.html',
    '<md-dialog class="view-source-dialog">\n' +
    '\n' +
    '  <md-tabs>\n' +
    '    <md-tab ng-repeat="file in files"\n' +
    '                  active="file === data.selectedFile"\n' +
    '                  ng-click="data.selectedFile = file" >\n' +
    '        <span class="window_label">{{file.viewType}}</span>\n' +
    '    </md-tab>\n' +
    '  </md-tabs>\n' +
    '\n' +
    '  <div class="md-content" md-scroll-y flex>\n' +
    '    <div ng-repeat="file in files">\n' +
    '      <hljs code="file.content"\n' +
    '        lang="{{file.fileType}}"\n' +
    '        ng-show="file === data.selectedFile" >\n' +
    '      </hljs>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="md-actions" layout="horizontal">\n' +
    '    <md-button class="md-button-light" ng-click="$hideDialog()">\n' +
    '      Done\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-dialog>\n' +
    '');
}]);
