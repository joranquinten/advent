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
      if (item.month <= vm.month) {
        item.isOpen = !item.isOpen;
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
      if (vm.year === 2017) {
        dates.map(function(date) {
          date.isPassed = date.month < vm.month;
          date.isCurrent = date.month === vm.month;
          date.isOpen = date.isPassed;
          return date;
        });
      }

      return dates;
    }
  }
})();
