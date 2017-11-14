(function() {
  "use strict";

  /*
  Define the controller for the module
  */

  angular.module("app.home").controller("home", home);

  /* @ngInject */
  function home($log, $q, $uibModal, dataService) {
    // Bind this to a viewModel
    var vm = this;

    var YEAR = 2018;

    var date = new Date();
    vm.month = date.getMonth() + 1;
    vm.year = date.getFullYear();

    // Public methods:
    vm.toggleDoor = toggleDoor;
    vm.showDate = showDate;

    init();

    ///////////////

    function init() {
      getDates().then(function(dates) {
        vm.dates = formatDates(dates);
      });
    }

    ////////////////////

    function toggleDoor(item) {
      if (!window.localStorage.getItem("settings")) {
        window.localStorage.setItem("settings", JSON.stringify(vm.dates));
      }

      if ((vm.year === YEAR && item.month <= vm.month) || true) {
        item.isOpen = !item.isOpen;

        var localSettings = JSON.parse(window.localStorage.getItem("settings"));

        localSettings.map(function(localItem) {
          var _item = localItem;

          if (item.month === localItem.month) {
            _item.isOpen = item.isOpen;
          }

          return _item;
        });

        window.localStorage.setItem("settings", JSON.stringify(localSettings));
      }
    }

    function showDate(itemDetails) {
      // Open the modal and pass the variable 'itemDetails' to the modalController
      $uibModal.open({
        animation: true,
        templateUrl: "/modules/modals/item.html",
        controller: "itemModalController",
        controllerAs: "vm",
        size: "lg",
        resolve: {
          itemDetails: function() {
            return itemDetails;
          }
        }
      });
    }

    function getDates() {
      var defer = $q.defer();

      $log.debug("getting dates...");

      // Make the call to the service:
      dataService.getAllItems().then(
        function(response) {
          // Bind the beautified data to the viewModel:
          defer.resolve(response);
        },
        function error(msg) {
          // Log any error from the service
          $log.error(msg);
          defer.reject();
        }
      );

      return defer.promise;
    }

    function formatDates(dates) {
      var localSettings =
        JSON.parse(window.localStorage.getItem("settings")) || [];

      if (vm.year === YEAR) {
        dates.map(function(date) {
          var isOpened =
            localSettings.filter(function(setting) {
              return setting.month === date.month && setting.isOpen;
            }).length > 0;

          date.isPassed = date.month < vm.month;
          date.isCurrent = date.month === vm.month;
          date.isOpen = date.isPassed || isOpened;
          return date;
        });
      }

      return dates;
    }
  }
})();
