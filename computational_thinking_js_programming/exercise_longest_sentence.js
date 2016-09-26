// Write a program that reads the content of a text and then logged out the longest sentence in the file based on number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). Any sequence of characters that are not spaces or sentence-ending characters should be treated as a word. You should also log out the number of words in the longest sentence.

var longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

// Plan
  // extract the sentences from text
  // extract the words from every sentence
  // compare the length of the words arrays
  // output result

function longestSentence(text) {
  var sentences = extractSentences(text);
  var sentenceWords = extractWords(sentences);
  var longestSentence = compareSentences(sentenceWords);
  displayResult(longestSentence); 
}

// argument - the text you want to search - string
// returns  - an array of sentences
function extractSentences(text) {
  return text.split(/[\.\!\?]/g);
}

// argument - an array of sentences 
// returns  - an array of words from every sentence
var extractWords = function(arrayOfSentences) {
  return arrayOfSentences.map(function(sentence) {
   return sentence.trim().split(' ');
  });
};

// argument - a nested array 
// sorts desc the nested array by size
// returns  - the first element
var compareSentences = function(sentences) {
  return sentences.sort(function(a, b) {
    return b.length - a.length;
  })[0];
};

// argumet - an array of strings 
// display result
// return  - undefined
var displayResult = function(longestSentence) {
  var output = "";
  output += longestSentence.join(' ');
  output += ".\n\n";
  output += "The longest sentece has " + longestSentence.length + " words.";
  console.log(output);
};

longestSentence(longText);

// return obj;
// console output

// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentece has 86 words.