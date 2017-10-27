(function() {
  "use strict";

  /*
    Service for getting predefined information from the ergast API
    Available from app.core
    */

  angular.module("app.core").factory("dataService", dataService);

  /* @ngInject */
  function dataService($http, $q, $log) {
    var service = {
      getAllItems: getAllItems
    };

    return service;

    ////////////////

    function getAllItems() {
      var defer = $q.defer();

      var dates = [
        {
          month: 1,
          title: "Januari date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 2,
          title: "Februari date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 3,
          title: "Maart date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 4,
          title: "April date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 5,
          title: "Mei date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 6,
          title: "Juni date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 7,
          title: "Juli date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 8,
          title: "Augustus date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 9,
          title: "September date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 10,
          title: "Oktober date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 11,
          title: "November date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        },
        {
          month: 12,
          title: "December date",
          details: "<p>Long block of html</p>",
          links: [
            {
              link: "https://google.com/",
              linkTitle: "Naar de website"
            }
          ]
        }
      ];

      defer.resolve(dates);

      return defer.promise;
    }
  }
})();
