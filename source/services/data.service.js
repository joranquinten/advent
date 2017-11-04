(function () {
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

      var dates = [{
          month: 1,
          title: "Wandelconcert Den Bosch",
          emoji: "🎻",
          details: "<p>Houdt u wel van een winterse avondwandeling? En laat u zich graag verrassen door de mooiste kamermuziek? Dan is deze dynamische concertavond dé cultuurtip voor u! De historische binnenstad van Den Bosch vormt het decor waarin we, wandelend van de ene naar de andere sfeervolle locatie, luisteren naar muzikale schatten van de kamermuziek. Naast optredens van het befaamde Storioni Trio en hun internationale muziekvrienden, presenteert de kersverse winnaar van het Storioni Willem Twee Concours ’18 zich aan het publiek. Laat u zich verrassen en wandelt u mee?</p>",
          links: [{
            link: "http://storionifestival.nl/storNL/?event=wandelconcert-den-bosch-4&event_date=2018-01-23",
            linkTitle: "Storioni Festival"
          }]
        },
        {
          month: 2,
          title: "Stroomuitval",
          emoji: "🔥",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://www.thedatingdivas.com/power-outage-date/",
            linkTitle: "Naar de website"
          }]
        },
        {
          month: 3,
          title: "Rollerdisco",
          emoji: "🕺",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://google.com/",
            linkTitle: "Naar de website"
          }]
        },
        {
          month: 4,
          title: "April date",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://google.com/",
            linkTitle: "Naar de website"
          }]
        },
        {
          month: 5,
          title: "Mei date",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://google.com/",
            linkTitle: "Naar de website"
          }]
        },
        {
          month: 6,
          title: "Picknick",
          emoji: "🥖",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://google.com/",
            linkTitle: "Naar de website"
          }]
        },
        {
          month: 7,
          title: "Juli date",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://google.com/",
            linkTitle: "Naar de website"
          }]
        },
        {
          month: 8,
          title: "Sterrenkijken",
          emoji: "🌌",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://google.com/",
            linkTitle: "Naar de website"
          }]
        },
        {
          month: 9,
          title: "September date",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://google.com/",
            linkTitle: "Naar de website"
          }]
        },
        {
          month: 10,
          title: "Oktober date",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://google.com/",
            linkTitle: "Naar de website"
          }]
        },
        {
          month: 11,
          title: "Sauna",
          emoji: "😅",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://google.com/",
            linkTitle: "Naar de website"
          }]
        },
        {
          month: 12,
          title: "Notenkraker",
          emoji: "🎄",
          details: "<p>Long block of html</p>",
          links: [{
            link: "https://google.com/",
            linkTitle: "Naar de website"
          }]
        }
      ];

      defer.resolve(dates);

      return defer.promise;
    }
  }
})();