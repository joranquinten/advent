(function() {
  "use strict";

  /*
  Modal for displaying races per defined season
  Available from app.core
  */

  angular
    .module("app.core")
    .controller("itemModalController", itemModalController);

  /* @ngInject */
  function itemModalController($uibModalInstance, itemDetails) {
    // Bind this to a viewModel
    var vm = this;
    // itemDetail get passed when calling the modal from the parent controller
    vm.itemDetails = itemDetails;

    vm.close = close;

    ///////////////

    function close() {
      $uibModalInstance.close();
    }
  }
})();
