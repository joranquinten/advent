/*eslint-disable*/
angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put('modules/home/home.html','<div id="home" class="row">\r\n\r\n  <div class="col-sm-12">\r\n\r\n    <h1>\uD83D\uDC96 Date kalender! \uD83D\uDC96</h1>\r\n\r\n    <div class="panel panel-default">\r\n      <div class="panel-heading">\r\n        <h2>Seasonal winners F1 2005 &ndash; 2015</h2>\r\n      </div>\r\n      <div class="panel-body">\r\n\r\n        <ul class="dates">\r\n          <li ng-repeat="date in vm.dates" ng-class="{\'jiggle\': date.isCurrent && !date.isOpen}">\r\n            <div class="door" ng-click="vm.toggleDoor(date);" ng-class="{\'open\': date.isOpen}">\r\n              {{date.month}}\r\n            </div>\r\n            <div class="revealed clickable" ng-click="vm.showDate(date);" ng-if="date.isOpen">?</div>\r\n          </li>\r\n        </ul>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>');
$templateCache.put('modules/modals/item.html','<div class="modal-header">\r\n  <h3 class="modal-title" id="modal-title">{{vm.itemDetails.title}}</h3>\r\n</div>\r\n<div class="modal-body" id="modal-body">\r\n\r\n  <div ng-bind-html="vm.itemDetails.details"></div>\r\n\r\n  <ul ng-if="vm.itemDetails.links.length > 0">\r\n    <li ng-repeat="link in vm.itemDetails.links">\r\n      <a ng-href="link.link" target="_blank">{{link.linkTitle}}</a>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n<div class="modal-footer">\r\n  <button class="btn btn-primary" type="button" ng-click="vm.close()">Close</button>\r\n</div>');}]);
/*eslint-enable*/