var tracery = require("tracery-grammar");
var twit = require('twit');

var T = new twit(require('./config.js'));

story = {
  "noun" : ["shoe","boot","corset","wand"],
  "verb" : ["fits","aches","falls deeply in love"],
  "animal" : ["bird"],
  "if-shoe" : ["If the #noun# #verb#..."],
  "early-bird" : ["The early #animal# gets the #noun#."],
  "two-in" : ["#number# in the #noun# are worth #number# in the #noun#"],
  "get-two" : ["Get #number# #noun#s stoned at once."],
  "number": ["1","2","3","69"],
	"origin": ["#if-shoe#","#early-bird#","#two-in#","#get-two#"]
    }

grammar = tracery.createGrammar(story);
aphorism = grammar.flatten('#origin#');
console.log(aphorism);

T.post('statuses/update', {status: aphorism}, function (error, data, response) {
  if (response) {
    console.log('Tweeted!');
    //console.log(data)
    //console.log(error)
    console.log(error)
  }
  else {
    console.log("Error!");
    console.log(error);
  }
});
