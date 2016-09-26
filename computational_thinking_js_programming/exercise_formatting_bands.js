// We are given the following array for some popular bands:

var bands = [
  { name: "sunset rubdown", country: "UK", active: false },
  { name: "women", country: "Germany", active: false },
  { name: "a silver mt. zion", country: "Spain", active: true }
];

// However, we need to process this data before we can use it:
 
    // the band countries are wrong: all the bands should have country as "Canada"
    // the band name should have all words capitalized.
    // remove the dots in band names

// Write a function that can process the band array into its proper format:

var bands = [
  { name: "sunset rubdown", country: "UK", active: false },
  { name: "women", country: "Germany", active: false },
  { name: "a silver mt. zion", country: "Spain", active: true }
];

// map the input ot a single band
// update the country
// capitalize band name
// remove dots in the band name

function updateCountry(band) {
  return band.country = "Canada";
}

function capitalizeBandName(band) {
  band.name = band.name.split(" ").map(function(word){
    return capitalizeString(word);
  }).join(" ");
}

function capitalizeString(string) {
  var initial = string[0].toUpperCase();
  var rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(".", " ");
}

function processBands(bands) {
  bands.map(function(band) {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

processBands(bands);

// should return:

// [ { name: "Sunset Rubdown", country: "Canada", active: false },
//   { name: "Women", country: "Canada", active: false },
//   { name: "A Silver Mt Zion", country: "Canada", active: true }
// ]


// refactor without mutation of the input

function processBand(bands) {
  return bands.map(function(band) {
    var capitalizedName = capitalizePhrase(band.name);
    var newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: "Canada",
      active: band.active
    };
  });
}

function capitalizePhrase(phrase) {
  var capitalizedPhrase = phrase.split(" ").map(function(word) {
    return capitalizeString(word);
  }).join(" ");
}

function capitalizeString(string) {
  var initial = string[0].toUpperCase();
  var rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInString(string) {
  return string.replace(".", "");
}