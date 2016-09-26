// Re-implement the sentiment analysis, but this time make use of regex. The use of regex for processing text-based data is very powerful. If you would notice in the previous approach to doing sentiment analysis, there words that were like the ones in our keywords that weren't counted because they weren't an exact match.

// This could've been remedied by adding the other variations of the word, for example: fortune --> fortunes, respect --> respected, oppress --> oppressed, or death --> deaths. This would've have worked, but with a regex based keyword list, it's more obvious and expressive that we're working with variations of those keywords.

var textExcerpt = "To be or not to be-that is the question:\n" +
  "Whether 'tis nobler in the mind to suffer\n" +
  "The slings and arrows of outrageous fortune,\n" +
  "Or to take arms against a sea of troubles,\n" +
  "And, by opposing, end them. To die, to sleep-\n" +
  "No more-and by a sleep to say we end\n" +
  "The heartache and the thousand natural shocks\n" +
  "That flesh is heir to-'tis a consummation\n" +
  "Devoutly to be wished. To die, to sleep-\n" +
  "To sleep, perchance to dream. Aye, there's the rub,\n" +
  "For in that sleep of death what dreams may come,\n" +
  "When we have shuffled off this mortal coil,\n" +
  "Must give us pause. There's the respect\n" +
  "That makes calamity of so long life.\n" +
  "For who would bear the whips and scorns of time,\n" +
  "Th' oppressor's wrong, the proud man's contumely, [F: poor]\n" +
  "The pangs of despised love, the law’s delay, [F: disprized]\n" +
  "The insolence of office, and the spurns\n" +
  "That patient merit of the unworthy takes,\n" +
  "When he himself might his quietus make\n" +
  "With a bare bodkin? Who would fardels bear, [F: these Fardels]\n" +
  "To grunt and sweat under a weary life,\n" +
  "But that the dread of something after death,\n" +
  "The undiscovered country from whose bourn\n" +
  "No traveler returns, puzzles the will\n" +
  "And makes us rather bear those ills we have\n" +
  "Than fly to others that we know not of?\n" +
  "Thus conscience does make cowards of us all,\n" +
  "And thus the native hue of resolution\n" +
  "Is sicklied o'er with the pale cast of thought,\n" +
  "And enterprises of great pitch and moment, [F: pith]\n" +
  "With this regard their currents turn awry, [F: away]\n" +
  "And lose the name of action.-Soft you now,\n" +
  "The fair Ophelia.-Nymph, in thy orisons\n" +
  "Be all my sins remembered";

var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|ed)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(noble)|(resolut(e|ion)?)/gi;
var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or)?)/gi;

var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|ed)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(noble)|(resolut(e|ion)?)/gi;
var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or)?)/gi;

function sentiment(text) {
  var text = text.replace(/\n/g, ' ').replace(/[\.\!\,\?]/g, '');
  var positives = text.match(positiveRegex);
  var negatives = text.match(negativeRegex);

  console.log('There are ' + positives.length + ' positive words in the text.');
  console.log('Positive sentiments: ' + positives.join(' '));
  console.log('');
  console.log('There are ' + negatives.length + ' negative words in the text.');
  console.log('Negative sentiments: ' + negatives.join(' '));

  if (positives.length > negatives.length) {
    sentiment = 'Positive';
  } else if (positives.length < negatives.length) {
    sentiment = 'Negative';
  } else {
    sentiment = 'Neutral';
  }

  console.log('The sentiment of the text is ' + sentiment + '.');
}

sentiment(text);