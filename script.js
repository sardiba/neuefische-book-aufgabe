console.clear();
const url = "https://date.nager.at/api/v3/PublicHolidays/2022/DE";

const germanHolidays2022 = [
  {
    date: "2022-01-01",
    localName: "Neujahr",
    name: "New Year's Day",
    countryCode: "DE",
    fixed: true,
    global: true,
    counties: null,
    launchYear: 1967,
    types: ["Public"],
  },
  {
    date: "2022-01-06",
    localName: "Heilige Drei Könige",
    name: "Epiphany",
    countryCode: "DE",
    fixed: true,
    global: false,
    counties: ["DE-BW", "DE-BY", "DE-ST"],
    launchYear: 1967,
    types: ["Public"],
  },
  {
    date: "2022-03-08",
    localName: "Internationaler Frauentag",
    name: "International Women's Day",
    countryCode: "DE",
    fixed: true,
    global: false,
    counties: ["DE-BE"],
    launchYear: 2019,
    types: ["Public"],
  },
  {
    date: "2022-04-15",
    localName: "Karfreitag",
    name: "Good Friday",
    countryCode: "DE",
    fixed: false,
    global: true,
    counties: null,
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-04-17",
    localName: "Ostersonntag",
    name: "Easter Sunday",
    countryCode: "DE",
    fixed: false,
    global: false,
    counties: ["DE-BB", "DE-HE"],
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-04-18",
    localName: "Ostermontag",
    name: "Easter Monday",
    countryCode: "DE",
    fixed: false,
    global: true,
    counties: null,
    launchYear: 1642,
    types: ["Public"],
  },
  {
    date: "2022-05-01",
    localName: "Tag der Arbeit",
    name: "Labour Day",
    countryCode: "DE",
    fixed: true,
    global: true,
    counties: null,
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-05-26",
    localName: "Christi Himmelfahrt",
    name: "Ascension Day",
    countryCode: "DE",
    fixed: false,
    global: true,
    counties: null,
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-06-05",
    localName: "Pfingstsonntag",
    name: "Pentecost",
    countryCode: "DE",
    fixed: false,
    global: false,
    counties: ["DE-BB", "DE-HE"],
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-06-06",
    localName: "Pfingstmontag",
    name: "Whit Monday",
    countryCode: "DE",
    fixed: false,
    global: true,
    counties: null,
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-06-16",
    localName: "Fronleichnam",
    name: "Corpus Christi",
    countryCode: "DE",
    fixed: false,
    global: false,
    counties: ["DE-BW", "DE-BY", "DE-HE", "DE-NW", "DE-RP", "DE-SL"],
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-08-15",
    localName: "Mariä Himmelfahrt",
    name: "Assumption Day",
    countryCode: "DE",
    fixed: true,
    global: false,
    counties: ["DE-SL"],
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-09-20",
    localName: "Weltkindertag",
    name: "World Children's Day",
    countryCode: "DE",
    fixed: true,
    global: false,
    counties: ["DE-TH"],
    launchYear: 2019,
    types: ["Public"],
  },
  {
    date: "2022-10-03",
    localName: "Tag der Deutschen Einheit",
    name: "German Unity Day",
    countryCode: "DE",
    fixed: true,
    global: true,
    counties: null,
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-10-31",
    localName: "Reformationstag",
    name: "Reformation Day",
    countryCode: "DE",
    fixed: true,
    global: false,
    counties: [
      "DE-BB",
      "DE-MV",
      "DE-SN",
      "DE-ST",
      "DE-TH",
      "DE-HB",
      "DE-HH",
      "DE-NI",
      "DE-SH",
    ],
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-11-01",
    localName: "Allerheiligen",
    name: "All Saints' Day",
    countryCode: "DE",
    fixed: true,
    global: false,
    counties: ["DE-BW", "DE-BY", "DE-NW", "DE-RP", "DE-SL"],
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-11-16",
    localName: "Buß- und Bettag",
    name: "Repentance and Prayer Day",
    countryCode: "DE",
    fixed: false,
    global: false,
    counties: ["DE-SN"],
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-12-25",
    localName: "Erster Weihnachtstag",
    name: "Christmas Day",
    countryCode: "DE",
    fixed: true,
    global: true,
    counties: null,
    launchYear: null,
    types: ["Public"],
  },
  {
    date: "2022-12-26",
    localName: "Zweiter Weihnachtstag",
    name: "St. Stephen's Day",
    countryCode: "DE",
    fixed: true,
    global: true,
    counties: null,
    launchYear: null,
    types: ["Public"],
  },
];

fetch(url, {
  method: "GET",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
})
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log("data", data);
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

// ***** AUFGABEN *****

// 1. Filtere alle Feiertage aus deinem Bundesland und speichere sie in eine Konstante! Hinweis: Bei einigen Feiertagen der Wert des "counties" Keys null. Benutze daher optional chaining. --> array.filter() & array.includes()
const holidays = germanHolidays2022;
const holidayHh = holidays.filter((holiday) => {
  //async is for aufg.7
  return holiday.counties === null || holiday.counties.includes("DE-HH");
  //andere Schreibweise:  return holiday.counties?.includes("DE-HH");
});
// console.log(holidayHh);

// 2. Speichere in einer weiteren Konstante einen weiteren Array mit Objekten, die nur die DATEN und NAMEN der Feiertage aus deinem Bundesland enthalten --> array.map()
const holidayDate = holidayHh.map((holidayInfo) => {
  return { date: holidayInfo.date, name: holidayInfo.name };
});
// console.log(holidayDate);
/* 3. Schreibe eine Funktion "createHtml", die als Parameter einen array entgegen nimmt und für jedes Element aus dem Array einen template String erzeugt. 

Der String soll einen HTML-Paragraphen mit jeweils dem Namen und dem Datum des einzelnen Elements enthalten. Nutze hier Object destructuring, damit du im template String nicht mehr per Dot-Notation auf die Objekt-Keys zugreifen musst, sondern direkt die Variablen "date" und "name" nutzen kannst.

Speichere dir den neu entstandenen Array in eine Variable zwischen. Guck dir array.join() an und überlege dir, wie du den Array in einen String umwandeln kannst --> array.map(), array.join() 
*/

const createHtml = (array) => {
  let html = "";
  array.forEach((item) => {
    html =
      html +
      `<div class="holiday-wrapper"><p class="fattie">${item.name}</p><p> ${item.date}</p></div>`;
  });
  return html;
};
// 4. Rufe die Funktion "createHtml" auf und übergebe ihr als Parameter den Array, in dem die Daten und Namen der Feiertage aus deinem Bundesland gelistet sind. Füge der section mit der Klasse "holidays" das generierte HTML hinzu --> element.innerHTML

const holidayHoliday = document.querySelector("#holidays");
holidayHoliday.innerHTML = createHtml(holidayDate);

// 5. Du kannst im Neue Fische Book natürlich auch Freunde adden. Nutze in einer neuen Funktion den Spread Operator (siehe MDN), um die fishies und coaches zu einem separaten Array "friends" zusammenzufügen.

const fishies = [
  "Andrea",
  "Alexander",
  "CJ",
  "Denis",
  "Jannis",
  "Michael",
  "Monika",
  "Nikita",
  "Samir",
  "Sarah",
  "Tatjana",
  "Volker",
];

const coaches = ["Jan", "Martin", "Anita"];

const myBuddies = fishies.concat(coaches);
document.querySelector(".friends").innerHTML = myBuddies;
// console.log(myBuddies);

// 6. Schreibe die Anzahl deiner Freunde per innerHTML in den Paragraphen mit der Klasse "friends"
// console.log(myBuddies.length);
document.querySelector(".friends").innerHTML = myBuddies.length;
/* 7. Zusatzaufgabe: Fetche dir die Feiertage von der API (anstelle des lokalen "holidays" Arrays) und packe Steps 1-4 in asynchrone Funktionen, die letztendlich zum selben Ergebnis führen sollen. 

Link zur API: https://date.nager.at/api/v3/PublicHolidays/2022/DE
*/

const buddiesDay = async () => {
  console.log("Call buddies day");

  const response = await fetch(
    "https://date.nager.at/api/v3/PublicHolidays/2022/DE",
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Referrer Policy": "strict-origin-when-cross-origin",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
  );

  console.log(response);

  // const getBuddiesDay = await fetch(
  //   "https://date.nager.at/api/v3/PublicHolidays/2022/DE",
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       Connection: "keep-alive",
  //       "Referrer Policy": "strict-origin-when-cross-origin",
  //       "User-Agent":
  //         "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0",
  //     },
  //   }
  // );

  const buddiesList = await response.json();
  return buddiesList;
};
