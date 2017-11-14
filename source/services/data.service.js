(function() {
  "use strict";

  /*
    Service for getting predefined information from the ergast API
    Available from app.core
    */

  angular.module("app.core").factory("dataService", dataService);

  /* @ngInject */
  function dataService($q) {
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
          title: "Mysterie op dinsdag 23 januari",
          emoji: "🎻",
          details:
<<<<<<< HEAD
            "<p>Op tijd thuis zijn van je werk! We eten op tijd, met de kinderen, bij oma Joke en opa Joop. Om <strong>kwart over 7</strong> vertrekken we naar Den Bosch voor de eerste date. Kleed je warm aan!</p><p>De eerste date houden we nog een verrassing. Sommige dates mag je van tevoren weten, andere weer niet. Spannend hè?</p>"
=======
            "<p>We vieren het nieuwe jaar met een concert. Op verschillende plekken in Den Bosch wordt muziek gespeeld en wij wandelen romantisch van locatie naar locatie.</p><p><em>Houdt u wel van een winterse avondwandeling? En laat u zich graag verrassen door de mooiste kamermuziek? Dan is deze dynamische concertavond dé cultuurtip voor u! De historische binnenstad van Den Bosch vormt het decor waarin we, wandelend van de ene naar de andere sfeervolle locatie, luisteren naar muzikale schatten van de kamermuziek. Naast optredens van het befaamde Storioni Trio en hun internationale muziekvrienden, presenteert de kersverse winnaar van het Storioni Willem Twee Concours ’18 zich aan het publiek. Laat u zich verrassen en wandelt u mee?</em></p>",
          links: [
            {
              link:
                "http://storionifestival.nl/storNL/?event=wandelconcert-den-bosch-4&event_date=2018-01-23",
              linkTitle: "Storioni Festival"
            }
          ]
>>>>>>> 27a2af5eb4849894081912735ced400515d856ae
        },
        {
          month: 2,
          title: "Smakelijk eten",
          emoji: "🥘",
          details:
<<<<<<< HEAD
            "<p>We gaan lekker uitgebreid koken en dineren gewoon thuis. Net zo lekker! Voorgerechtje, hoofdgerecht en, als je zin hebt, natuurlijk een lekker toetje (en dat mag gewoon ijs zijn).</p><p>Bon apetit!</p><p>Een gerechtje kies je zelf uit, waar je zin in hebt.</p>",
=======
            "<p>We gaan lekker uitgebreid koken en dineren gewoon thuis. Net zo lekker! Kindjes vroeg op bed (wij kunnen wel een snackje mee-eten). En daarna gaan wij uitgebreid aan de slag: voorgerechtje, hoofdgerecht en natuurlijk een lekker toetje. Dat mag gewoon ijs zijn, want dat glijdt overal tussendoor.</p><p>Bon apetit!</p><p>Waar heb je zin in? Aziatisch? Bourgondisch? Zuid-Amerikaans? Eerst even samen een lijstje maken, dan zorgt Joran dat de boodschappen in huis zijn. Met een flesje wijn er bij.</p>",
>>>>>>> 27a2af5eb4849894081912735ced400515d856ae
          links: [
            {
              link:
                "http://www.jamiemagazine.nl/recepten/gelegenheid/diner-voor-twee-recepten/index.html",
              linkTitle: "Jamies recepten voor twee"
            },
            {
              link:
                "https://www.ah.nl/allerhande/recepten/R-L1383828515710/diner-voor-2",
              linkTitle: "Recepten uit de Allerhande"
            }
          ]
        },
        {
          month: 3,
          title: "Stroomuitval",
          emoji: "🔥",
          details:
            "<p>Oei! De stroom is uitgevallen! Dat wordt knus een avondje zonder televisie, zonder Netflix, zonder internet, zonder telefoons.<br/>Maar met kaarsjes, kleedjes, spelletjes en zaklampen overleven in de woonkamer. Als het koud wordt, kruip je dicht tegen elkaar aan.</p><p>'s Ochtends doet de stroom het weer.</p>"
        },
        {
          month: 4,
          title: "Aapjes kijken",
          emoji: "🐒",
          details:
            "<p>We gaan lekker naar een bovenbeste dierentuin met zijn viertjes. Broodjes worden gesmeerd (door twee beren), pakjes drinken mee. Koekjes, snoepjes en de wandelwagen.<br/>Lekker een dagje op avontuur!</p>",
          links: [
            {
              link: "http://www.bestzoo.nl/",
              linkTitle: "Best Zoo"
            }
          ]
        },
        {
          month: 5,
          title: "Picknick",
          emoji: "🥖",
          details:
            "<p>Mais oui! De picknickmand staat al klaar. Joep en Lena zijn aangekleed. We hebben een thermoskan en kleedje bij. Lekker picknicken. Dat is fijn! In het bos? In het park? Op Bedafse bergen? Jij mag kiezen!</p>"
        },
        {
          month: 6,
          title: "Toet toet!",
          emoji: "🛵",
          details:
            "<p>We gaan stoer toeren, maar dan op een scooter. Lekker scheuren langs de Maas bijvoorbeeld. Daar kunnen we altijd even stoppen voor een lekkere lunch.</p><p>Jij rijdt! Of ik?</p>"
        },
        {
          month: 7,
          title: "Romantische zonsondergang",
          emoji: "🌅",
          details:
            "<p>De kindjes logeren bij opa en oma. Wij gaan 's middags naar het strand. Cadzand bijvoorbeeld, of Kijkduin, om daar wat te zwemmen, lui te wandelen op het strand maar vooral de 's avonds zonsondergang te zien. Met zijn tweetjes op een kleedje. Flesje wijn mag ook mee. En misschien wat toastjes. In een koelbox, die je Lief dan draagt.</p>"
        },
        {
          month: 8,
          title: "Sterrenkijken",
          emoji: "🌌",
          details:
            "<p>De Perse&iuml;den bereiken op maandag 13 augustus hun hoogtepunt. Dus op dinsdag 14 augustus, als het niet bewolkt is, gaan we met een paar kleedjes, fles wijn en lantaarns op Bedaf sterren kijken.</p>",
          links: [
            {
              link:
                "http://hemel.waarnemen.com/meteoorzwermen/Perseiden_2018.html",
              linkTitle: "Meer over de Perse&iuml;den?"
            }
          ]
        },
        {
          month: 9,
          title: "Spoorwegmuseum",
          emoji: "🚂",
          details:
            "<p>Uitgeroepen tot één van de leukste musea van Nederland: het Spoorwegmuseum. Daar gaan we natuurlijk met de trein naar toe. En met zijn viertjes, want vooral Joep zal het fantastisch vinden!</p>",
          links: [
            {
              link: "https://www.spoorwegmuseum.nl/",
              linkTitle: "Spoorwegmuseum.nl"
            }
          ]
        },
        {
          month: 10,
          title: "Itadakimasu!",
          emoji: "🍣",
          details:
            '<p>Zeg maar: "Smakelijk eten!" in het Japans. We gaan lekker sushi maken en daarna zelf opeten. Dat hebben we wel verdiend!</p><p>Geef jij de saké even aan?</p>'
        },
        {
          month: 11,
          title: "Rollerdisco",
          emoji: "🕺",
          details:
<<<<<<< HEAD
            "<p>Oei! De stroom is uitgevallen! Dat wordt knus een avondje zonder televisie, zonder Netflix, zonder internet en hopelijk zonder babyfoon.<br/>Maar met kaarsjes, kleedjes, spelletjes en zaklampen overleven in de woonkamer.</p><p>'s Ochtends doet de stroom het weer.</p>"
=======
            "<p>Dance! Boogie Wonderland!</p><p>Trek je stoute rolschaatsen aan: we gaan aan de rollerdisco! De kindjes logeren bij tante Saskia en ome Sjoerd. Wij ook trouwens, dan kunnen we gezellig met zijn allen ontbijten.</p>",
          links: [
            {
              link: "http://www.skatefever.nl/",
              linkTitle: "Skate fever"
            }
          ]
>>>>>>> 27a2af5eb4849894081912735ced400515d856ae
        },
        {
          month: 12,
          title: "Notenkraker",
          emoji: "🎄",
          details:
            "<p><em>De jonge Clara sluipt op kerstavond stiekem naar beneden om te gaan spelen met haar mooiste cadeau: een notenkrakerpop. Maar de mysterieuze tovenaar Drosselmeijer wacht haar op en neemt haar mee op een magisch avontuur. Nadat de muizenkoning is verslagen, reizen de notenkraker en Clara door het Land van Sneeuw naar Snoepjesland, waar de suikerboonfee hen trakteert op een paar schitterende dansen. Eenmaal thuis denkt Clara dat ze gedroomd heeft – maar herkent ze dan de neef van Drosselmeijer niet?</em></p><p>We gaan met zijn tweetjes naar het kerstballet van de Notenkraker. Met een drankje (of twee) na afloop. Onze laatste date dit jaar! Dus we pakken flink uit.</p><p>❄🐮❤️</p>",
          links: [
            {
              link:
                "https://www.theateraandeparade.nl/programma/?p=4#modal=/programma/4372/The_Royal_Ballet/Live_Cinema_The_Nutcracker/",
              linkTitle: "Programma informatie"
            }
          ]
        }
      ];

      defer.resolve(dates);

      return defer.promise;
    }
  }
})();
