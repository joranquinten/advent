(function () {
  "use strict";

  /*
    Service for getting predefined information from the ergast API
    Available from app.core
    */

  angular
    .module("app.core")
    .factory("dataService", dataService);

  /* @ngInject */
  function dataService($q) {
    var service = {
      getAllItems: getAllItems
    };

    return service;

    ////////////////

    function getAllItems() {
      var defer = $q.defer();

      var dates = [{
        "month": 1,
        "title": "Mysterie op dinsdag 23 januari",
        "emoji": "🎻",
        "details": "<p>Op tijd thuis zijn van je werk! We eten op tijd, met de kinderen, bij oma Jok" +
          "e en opa Joop. Om <strong>kwart over 7</strong> vertrekken we naar Den Bosch voo" +
          "r de eerste date. Kleed je warm aan!</p><p>De eerste date houden we nog een verr" +
          "assing. Sommige dates mag je van tevoren weten, andere weer niet. Spannend hè?</" +
          "p>"
      }, {
        "month": 2,
        "title": "Itadakimasu!",
        "emoji": "🍣",
        "details": "<p>Zeg maar: \"Smakelijk eten!\" in het Japans. We gaan lekker sushi maken en da" +
          "arna zelf opeten. Dat hebben we wel verdiend!</p><p>Geef jij de saké even aan?</" +
          "p><p>Joep kan natuurlijk ook prima meehelpen en smullen! Voor Lena maken we een " +
          "smakelijk potje</p>"
      }, {
        "month": 3,
        "title": "Mysterie",
        "emoji": "🔥",
        "details": "<p>Oei! Deze date blijft nog een mysterie totdat hij begint! Geen nood: het enig" +
          "e wat jij hoeft te doen is de kindjes naar opa en oma brengen. Dan zorg ik voor " +
          "de rest!</p>"
      }, {
        "month": 4,
        "title": "Aapjes kijken",
        "emoji": "🐒",
        "details": "<p>We gaan lekker naar een bovenbeste dierentuin met zijn viertjes. Broodjes wor" +
          "den gesmeerd (door twee beren), pakjes drinken mee. Koekjes, snoepjes en de wand" +
          "elwagen.<br/>Lekker een dagje op avontuur!</p><p><small>Dit cadeautje heb je min" +
          " of meer jezelf gegeven, maar dat mag de pret niet drukken!</small></p>",
        "links": [{
          "link": "https://www.zooparc.nl/",
          "linkTitle": "Overloon"
        }, {
          "link": "https://www.dierenrijk.nl/",
          "linkTitle": "Neunen"
        }]
      }, {
        "month": 5,
        "title": "Picknick",
        "emoji": "🥖",
        "details": "<p>Mais oui! De picknickmand staat al klaar. Joep en Lena zijn aangekleed. We he" +
          "bben een thermoskan en kleedje bij. Lekker picknicken. Dat is fijn! In het bos? " +
          "In het park? Op Bedafse bergen? Jij mag kiezen!</p>"
      }, {
        "month": 6,
        "title": "Smakelijk eten",
        "emoji": "🥘",
        "details": "<p>We gaan lekker uitgebreid koken en dineren gewoon thuis. Net zo lekker! Kindj" +
          "es vroeg op bed (wij kunnen wel een snackje mee-eten). En daarna gaan wij uitgeb" +
          "reid aan de slag: voorgerechtje, hoofdgerecht en natuurlijk een lekker toetje. D" +
          "at mag gewoon ijs zijn, want dat glijdt overal tussendoor.</p><p>Bon apetit!</p>" +
          "<p>Waar heb je zin in? Aziatisch? Bourgondisch? Zuid-Amerikaans? Eerst even same" +
          "n een lijstje maken, dan zorgt Joran dat de boodschappen in huis zijn. Met een f" +
          "lesje wijn er bij.</p>",
        "links": [{
          "link": "http://www.jamiemagazine.nl/recepten/gelegenheid/diner-voor-twee-recepten/index." +
            "html",
          "linkTitle": "Jamies recepten voor twee"
        }, {
          "link": "https://www.ah.nl/allerhande/recepten/R-L1383828515710/diner-voor-2",
          "linkTitle": "Recepten uit de Allerhande"
        }]
      }, {
        "month": 7,
        "title": "Romantische zonsondergang",
        "emoji": "🌅",
        "details": "<p>De kindjes logeren bij tante Cool en ome Hipster. Kunnen wij lekker naar het " +
          "strand, om daar wat te zwemmen, lui te wandelen op het strand maar vooral de 's " +
          "avonds zonsondergang te zien. Met zijn tweetjes op een kleedje. Flesje wijn mag " +
          "ook mee. En misschien wat toastjes. In een koelbox, die je lief dan voor je draa" +
          "gt.</p>"
      }, {
        "month": 8,
        "title": "Sterrenkijken",
        "emoji": "🌌",
        "details": "<p>De Perse&iuml;den bereiken op maandag 13 augustus hun hoogtepunt. Dus op dins" +
          "dag 14 augustus, als het niet bewolkt is, gaan we met een paar kleedjes, fles wi" +
          "jn en lantaarns op Bedaf sterren kijken.</p>",
        "links": [{
          "link": "http://hemel.waarnemen.com/meteoorzwermen/Perseiden_2018.html",
          "linkTitle": "Meer over de Perse&iuml;den?"
        }]
      }, {
        "month": 9,
        "title": "Cloning around",
        "emoji": "🌭🌭",
        "details": "<p>De pornoronde!<br/>Communicatie en goede voorbereiding, met lezen van de instructies zijn essen" +
          "tieel! Een test voor onze hobby skills:</p><p><em>Met de Clone-A-Willy kit maak " +
          "je nu zelf thuis in een handomdraai een prachtig levensechte dildo van een penis" +
          ". Voor het maken van deze dildo wordt uitsluitend gebruik gemaakt van materialen die aan de hoogst" +
          "e veiligheidseisen voldoen. Het is dus niet gevaarlijk of irriterend voor de pen" +
          "is!</em></p><p>Aan de slag!</p>",
        "Links": [{
          "link": "https://cloneawilly.com/pages/how-it-works",
          "linkTitle": "Instructievideo"
        }]
      }, {
        "month": 10,
        "title": "Vrrrrrrrroem!",
        "emoji": "🏁",
        "details": "<p>We gaan keihard scheuren, op het asfalt. In een kart.</p><p>De wind in je har" +
          "en, de geur van verbrand rubber in je neus. En de winnaar krijgt een massage!</p" +
          ">"
      }, {
        "month": 11,
        "title": "Rollerdisco",
        "emoji": "🕺",
        "details": "<p>Dance! Boogie Wonderland! Wieg die heupjes maar vast los, want we gaan vloeie" +
          "nd achtjes en pirrouettes draaien op een glanzend geboende rollerdisco baan! Tre" +
          "k je stoute schoenen dus maar aan! Enne... de kindjes brengen we naar hun suiker" +
          "tante -en oom in Rotterdam!</p>"
      }, {
        "month": 12,
        "title": "Notenkraker",
        "emoji": "🎄",
        "details": "<p><em>De jonge Clara sluipt op kerstavond stiekem naar beneden om te gaan spele" +
          "n met haar mooiste cadeau: een notenkrakerpop. Maar de mysterieuze tovenaar Dros" +
          "selmeijer wacht haar op en neemt haar mee op een magisch avontuur. Nadat de muiz" +
          "enkoning is verslagen, reizen de notenkraker en Clara door het Land van Sneeuw n" +
          "aar Snoepjesland, waar de suikerboonfee hen trakteert op een paar schitterende d" +
          "ansen. Eenmaal thuis denkt Clara dat ze gedroomd heeft – maar herkent ze dan de " +
          "neef van Drosselmeijer niet?</em></p><p>We gaan met zijn tweetjes naar het kerst" +
          "ballet van de Notenkraker. Met een drankje (of twee) na afloop. Onze laatste dat" +
          "e dit jaar! Dus we pakken flink uit.</p><p>❄🐮❤️</p>",
        "links": [{
          "link": "https://www.theateraandeparade.nl/programma/?p=4#modal=/programma/4372/The_Royal" +
            "_Ballet/Live_Cinema_The_Nutcracker/",
          "linkTitle": "Programma informatie"
        }]
      }];

      defer.resolve(dates);

      return defer.promise;
    }
  }
})();